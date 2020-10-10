---
title: "从 AUR 构建"
linkTitle: "从 AUR 构建"
weight: 40
description: 这是 Arch Linux 用户的推荐安装方法。你可以使用 AUR 安装器来进行更新，轻松享受最新的特性。并且，由于 AppImage 是在 Ubuntu 上构建的，只能使用 Fusion 主题，但如果是在使用 KDE 桌面环境的 Arch Linux 上构建的，就可以使用 Breeze（微风）等主题。
---

如果你使用的是基于 Arch Linux 的 Linux 发行版（如 Manjaro 等系统），则可以使用该方法进行安装。

CP Editor 在 AUR 上有两个包：稳定版 [cpeditor](https://aur.archlinux.org/packages/cpeditor/) 和 alpha 版 [cpeditor-git](https://aur.archlinux.org/packages/cpeditor-git/)。

就像安装其它 AUR 包一样，首先你需要有一个 AUR 安装器（如 [yay](https://github.com/Jguer/yay)）。如果你没有，可以通过 `sudo pacman -S yay` 安装一个。

接着，运行 `yay -S cpeditor` 或 `yay -S cpeditor-git`，选择默认选项即可。

安装完成后，你就可以在终端中使用 `cpeditor` 来运行 CP Editor 了。
