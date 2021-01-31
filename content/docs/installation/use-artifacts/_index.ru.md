---
title: "Use Artifacts"
linkTitle: "Use Artifacts"
weight: 30
description: In this way, you can get the latest unreleased features without building by yourself. But not all operating systems support this, and it's only available for updating, not for the first installation.
---

If you want to use the latest version (even later than the beta release), but don't want to build from source, you can download Artifacts from [GitHub Actions](https://github.com/cpeditor/cpeditor/actions).

However, it's not recommended to use Artifacts, they are more unstable than beta releases, and could be a work in progress. You should read the commit logs and even the source codes before using Artifacts.

To run it on Windows/macOS, you should install from [Releases](https://github.com/cpeditor/cpeditor/releases) first (usually any version is OK unless something like DLL missing happens). On Windows, replace `cpeditor.exe` in your install folder with the Artifact. On macOS, run `cp path/to/Artifact cpeditor.app/Contents/MacOs`, where `cpeditor.app` is the one already installed on your machine.

To run it on Ubuntu 18.04, you need to install Qt. Other Linux distributions may not support binaries compiled on Ubuntu 18.04.
