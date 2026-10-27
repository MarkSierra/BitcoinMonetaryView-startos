# Image for the StartOS package, built from the pinned upstream submodule.
# Pure Python standard library: no packages to install.
# Base image pinned by digest: every build uses exactly this image. Dependabot opens a PR
# when python:3.12-slim gets a new digest (Python or Debian security updates).
FROM python:3.12-slim@sha256:12316debbfb86890f6b2d825820612741ba527ad5a44e3902759141d572bfe8f

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app
COPY upstream/bitcoinmonetaryview/ /app/bitcoinmonetaryview/
COPY upstream/LICENSE upstream/NOTICE /app/
