---
title: "使用包管理器"
weight: 15
description: 你可以使用你的发行版的包管理器或其他包管理器安装 CP Editor。
---

### 打包情况

[![Packaging status](https://repology.org/badge/vertical-allrepos/cpeditor.svg)](https://repology.org/project/cpeditor/versions)

其中有的包是官方维护的，而大多数的包是由社区维护的。

然而，目前很多软件包仓库都没有包含 CP Editor。如果需要帮助，软件包维护者可以联系我们。例如，我们可以在我们的 CI/CD 工作流中加入一些脚本。

下面是一些安装软件包的指导。

### Snapcraft

你可以使用 [Snapcraft](https://snapcraft.io) 来安装 [cpeditor](https://snapcraft.io/cpeditor)，它在大多数 Linux 发行版上都可用。

有两个 channel 可供选择：`latest/stable` 和 `latest/edge`。

由于技术原因，它以 classic confinement 发布，所以你需要 `--classic` 选项来安装它。

安装最新的稳定版本：`sudo snap install cpeditor --classic`

安装最新的测试（alpha）版本： `sudo snap install cpeditor --classic --channel=latest/edge`

### AUR

如果你使用的是 [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux_(简体中文))，你可以从 [AUR](https://wiki.archlinux.org/title/Arch_User_Repository_(简体中文)) 安装 CP Editor。AUR 通常情况下也在 Manjaro 等基于 Arch 的发行版可用，但偶尔会因为主仓库不同等原因而出错。

CP Editor 在 AUR 上有两个包：稳定版 [cpeditor](https://aur.archlinux.org/packages/cpeditor/) 和 alpha 版 [cpeditor-git](https://aur.archlinux.org/packages/cpeditor-git/)。

如果你对 AUR 不熟悉，你可以安装 [paru](https://github.com/Morganamilo/paru) 并使用 `paru -S cpeditor` 来安装。你也可以阅读关于 [手动安装 AUR 包](https://wiki.archlinux.org/title/Arch_User_Repository_(简体中文)#安装软件包) 或者 [AUR 工具](https://wiki.archlinux.org/title/AUR_helpers_(简体中文)) 的 wiki。

安装完成后，你就可以在终端中运行 `cpeditor` 或在开始菜单中运行 CP Editor 了。
