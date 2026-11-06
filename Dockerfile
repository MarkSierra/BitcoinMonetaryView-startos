# Image for the StartOS package, built from the pinned upstream submodule.
# Pure Python standard library: no packages to install.
# Base image pinned by digest: exactly the one in upstream/Dockerfile, the image the app is tested
# on. Move it with each upstream bump (see UPDATING.md).
FROM python:3.15-slim@sha256:e97b88e416c3c01eb427b21fd8cd3ebf006e6ee38afcfcc3cae1c54ee2ab0a75

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app
COPY upstream/bitcoinmonetaryview/ /app/bitcoinmonetaryview/
COPY upstream/LICENSE upstream/NOTICE /app/
