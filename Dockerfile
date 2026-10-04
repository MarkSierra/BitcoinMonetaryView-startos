# Image for the StartOS package, built from the pinned upstream submodule.
# Pure Python standard library: no packages to install.
ARG PYTHON_IMAGE=python:3.12-slim
FROM ${PYTHON_IMAGE}

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app
COPY upstream/bitcoinmonetaryview/ /app/bitcoinmonetaryview/
COPY upstream/LICENSE upstream/NOTICE /app/
