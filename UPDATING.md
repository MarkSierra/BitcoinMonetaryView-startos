# Updating the upstream version

This package builds BitcoinMonetaryView from the `upstream` git submodule
([MarkSierra/BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView)).

## Determining the upstream version

- Latest release tag: `git -C upstream fetch --tags && git -C upstream describe --tags --abbrev=0 origin/main`
- The current pin is the submodule commit: `git submodule status upstream`.

## Applying the bump

1. `git -C upstream checkout <tag or commit>` and `git add upstream`.
2. Bump `version` in `startos/versions/current.ts` (upstream version + `:0`, or rename the file into a
   historical version and create a new `current.ts` if a migration is needed — see the packaging guide).
   Write `releaseNotes` in English (`en_US`) and German (`de_DE`): StartOS shows them in the user's
   interface language. Keep the German texts in `startos/manifest/i18n.ts` and
   `startos/i18n/dictionaries/translations.ts` in step with the English ones too.
3. If upstream changed its settings schema (`docs/settings.md`), update `startos/fileModels/settings.json.ts`
   and the actions.

## Publishing a release

Build artifacts of the *Build* workflow expire after 14 days. To keep every version downloadable,
publish a GitHub release for it:

1. Make sure `main` carries the new version in `startos/versions/current.ts` (e.g. `0.2.0:0`).
2. On GitHub: Releases → *Draft a new release* → new tag **`v` + the version with `:` replaced by `_`**
   (e.g. `v0.2.2_0` for `0.2.2:0`, Start9's
   [tag convention](https://docs.start9.com/packaging/0.4.0.x/versions.html#git-tag-conventions)) on `main` →
   describe the changes → *Publish release*. (Releases up to `v0.2.2.0` used a `.` instead; they stay as
   they are.)
3. The *Release* workflow checks that the tag matches the version, builds both architectures and attaches
   `bitcoinmonetaryview_x86_64.s9pk`, `bitcoinmonetaryview_aarch64.s9pk` and `SHA256SUMS` to the release.
