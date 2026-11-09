"""Keep the result databases nodatacow on btrfs; rewrite any copy-on-write files once.

Usage: nocow.py <data-dir> <network-dir>...
Conversion errors are non-fatal while the live data directory remains intact.
"""
import fcntl
import os
import shutil
import struct
import sys

FS_IOC_GETFLAGS = 0x80086601
FS_IOC_SETFLAGS = 0x40086602
FS_NOCOW_FL = 0x00800000
CHUNK = 16 << 20


def get_flags(fd):
    return struct.unpack("q", fcntl.ioctl(fd, FS_IOC_GETFLAGS, struct.pack("q", 0)))[0]


def set_nocow(path):
    fd = os.open(path, os.O_RDONLY)
    try:
        flags = get_flags(fd)
        if not flags & FS_NOCOW_FL:
            fcntl.ioctl(fd, FS_IOC_SETFLAGS, struct.pack("q", flags | FS_NOCOW_FL))
    finally:
        os.close(fd)


def is_nocow(path):
    fd = os.open(path, os.O_RDONLY)
    try:
        return bool(get_flags(fd) & FS_NOCOW_FL)
    finally:
        os.close(fd)


def tree(root):
    for d, _, files in os.walk(root):
        yield d
        for f in files:
            p = os.path.join(d, f)
            if os.path.isfile(p) and not os.path.islink(p):
                yield p


def copy(src, dst):
    """Byte copy: a reflink between datacow and nodatacow files is refused by btrfs."""
    with open(src, "rb") as i, open(dst, "wb") as o:
        while buf := i.read(CHUNK):
            o.write(buf)
        o.flush()
        os.fsync(o.fileno())
    shutil.copymode(src, dst)


def restore_original(old, path):
    """Block startup if the original database directory cannot be restored."""
    try:
        os.rename(old, path)
    except OSError as e:
        raise RuntimeError(f"nocow: cannot restore {old} to {path}; refusing to start") from e


def rewrite(data, net):
    path = os.path.join(data, net)
    tmp = os.path.join(data, f".{net}.nocow")
    old = os.path.join(data, f".{net}.old")
    if os.path.isdir(old):
        if os.path.isdir(path):
            shutil.rmtree(old)
        else:
            restore_original(old, path)
    if os.path.isdir(tmp):
        shutil.rmtree(tmp)
    if not os.path.isdir(path) or all(is_nocow(p) for p in tree(path)):
        return

    size = sum(os.path.getsize(p) for p in tree(path) if os.path.isfile(p))
    st = os.statvfs(data)
    if st.f_bavail * st.f_frsize < size * 1.1 + (1 << 30):
        print(f"nocow: not enough free space to rewrite {path} ({size >> 20} MiB); left as is")
        return

    print(f"nocow: rewriting {path} ({size >> 20} MiB) without copy-on-write")
    os.mkdir(tmp, 0o700)
    try:
        set_nocow(tmp)
        for d, dirs, files in os.walk(path):
            target = os.path.join(tmp, os.path.relpath(d, path))
            for sub in dirs:
                os.makedirs(os.path.join(target, sub), exist_ok=True)
            for f in files:
                copy(os.path.join(d, f), os.path.join(target, f))
        os.rename(path, old)
        try:
            os.rename(tmp, path)
        except OSError:
            restore_original(old, path)
            raise
    except OSError:
        if os.path.isdir(tmp):
            shutil.rmtree(tmp)
        raise
    shutil.rmtree(old)
    print(f"nocow: {path} done")


def main(data, nets):
    try:
        set_nocow(data)
    except OSError as e:
        print(f"nocow: cannot set nodatacow on {data} ({e}); skipping")
        return
    for net in nets:
        try:
            rewrite(data, net)
        except OSError as e:
            print(f"nocow: {net}: {e}; continuing")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2:])
