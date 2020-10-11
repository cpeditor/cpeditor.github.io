---
title: "Install from binaries"
linkTitle: "Install from binaries"
weight: 10
description: This is the easiest way to install CP Editor, and is recommended for most users.
---

Choose a version in the [Releases](https://github.com/cpeditor/cpeditor/releases), then download your binary.

### Windows

#### Setup Version

> The setup version needs to be installed on your machine. The setting files will be stored in the config directory on your system, and it will be visible in the list of installed programs on your system.

Download the `setup.exe` in the assets and install it.

#### Portable Version

> The portable version can be executed without installation. The setting files will be stored in the same directory as the executable file, and you won't see it in the list of installed programs on your system.

Download the `portable.zip` in the assets and unzip it to any directory you like.

### Most Linux Distros

Download the `AppImage` in the assets, add execute permission to it (`chmod +x <AppImagePath>`), then run it.

### Debian-based Linux Distros

On Debian-based Linux distributions (Ubuntu, Linux Mint, etc.) you can download `.deb` package in the assets and run the command in terminal:

```sh
sudo apt install <path to .deb package>
```

Then type your root password and agree with the installation. You can also use `Gdebi` or another graphical tools to install `deb` package. Supported: Debian 10 Buster, Ubuntu 18.04 Bionic Beaver, Linux Mint 19 Tara and newer versions of these distributions or based on them.

### macOS

Download the `.dmg` file in the assets and install it.

You may need to click "Yes" to access Filesystem several times. Apple may report that this application does not comes from recognised developer and prevent you from launching app. Please add an exception to the Editor from `Settings -> Security -> General`, and allow CP Editor to `run anyways`
