---
title: "Use package managers"
weight: 40
description: You can use the package manager provided by your OS or other package managers to install CP Editor.
---

### Packaging status

[![Packaging status](https://repology.org/badge/vertical-allrepos/cpeditor.svg)](https://repology.org/project/cpeditor/versions)

Some of the packages are officially maintained while most of them are maintained by the community.

However, at present, CP Editor is not available in many package repositories. Package maintainers can contact us if any help is needed. For example, we may add some scripts in our CI/CD workflow.

Here are a few guidelines to install the packages.

### AUR

There are two [AUR](https://aur.archlinux.org/) packages for CP Editor: [cpeditor](https://aur.archlinux.org/packages/cpeditor/) for the stable version and [cpeditor-git](https://aur.archlinux.org/packages/cpeditor-git/) for the alpha version.

If you have `yay` installed, you can run `yay -S cpeditor` to install. If you don't have `yay` and don't know how to install from AUR, you can read [how to install yay](https://github.com/Jguer/yay#installation) or [the Arch Wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_and_upgrading_packages).

After the installation, you'll be able to run CP Editor by `cpeditor` in your terminal or launch from the start menu like other apps.
