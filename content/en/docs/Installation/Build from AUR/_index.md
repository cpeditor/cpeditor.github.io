---
title: "Build from AUR"
linkTitle: "Build from AUR"
weight: 40
description: This is the way recommended for Arch Linux users. You can use an AUR helper to update the package and get the latest features. What's more, since the AppImage is built on Ubuntu, you can only use the fusion theme, but if it's built on Arch Linux with KDE you can use other themes like Breeze.
---

This method is only for Arch Linux (or other distros based on Arch Linux, including Manjaro) users.

There are two AUR packages for CP Editor: [cpeditor](https://aur.archlinux.org/packages/cpeditor/) for the stable version and [cpeditor-git](https://aur.archlinux.org/packages/cpeditor-git/) for the alpha version.

Just like installing other packages from AUR, you need an AUR helper, if you don't have one, you can install yay by `sudo pacman -S yay`.

Then, run either `yay -S cpeditor` or `yay -S cpeditor-git`, choose the default options, and wait until the build finishes.

After the installation, you'll be able to run CP Editor by `cpeditor` in your terminal.
