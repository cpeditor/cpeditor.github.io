---
title: "安装可执行文件"
linkTitle: "安装可执行文件"
weight: 10
description: 这是安装 CP Editor 最简单的方式，推荐大多数用户使用。
---

在 [Release](https://github.com/cpeditor/cpeditor/releases) 页面选择你需要的版本，下载相应的可执行文件。

如果你访问 GitHub 的速度较慢，你还可以尝试 [Gitee 镜像](https://gitee.com/ouuan/cpeditor/releases) 和 [FastGit 镜像](https://hub.fastgit.org/cpeditor/cpeditor/releases)。

### Windows

#### 使用安装包安装

> 使用安装包在你的电脑上进行安装。配置文件将会存储在你的系统的配置目录下，CP Editor 将会出现在你的系统的已安装程序列表中。

下载 `setup.exe` 以进行安装。

#### 便携式版本

> 使用便携式版本，无需安装即可使用 CP Editor。这意味着你可以将 CP Editor 存储在 U 盘等可移动介质中。
>
> 配置文件将存储在可执行文件所在的文件夹，CP Editor 将不会出现在你的系统的已安装程序列表中。

下载 `portable.zip`，将其解压到任意一个你想要存放的位置。

### 绝大部分 Linux 发行版

下载 `AppImage`，执行 `chmod +x <AppImagePath>` 给其添加执行权限，随后运行该文件。

### Debian 系 Linux 发行版

如果你使用的是 Debian 系的 Linux 发行版（Ubuntu，Linux Mint 等），可以下载 `.deb` 包，并在终端中执行如下命令：

```sh
sudo apt install <path to .deb package>
```

接下来输入密码，确认安装。你也可以使用 `Gdebi` 等图形化工具安装 `deb` 包，要求系统版本不低于 Debian 10 Buster，Ubuntu 18.04 Bionic Beaver，Linux Mint 19 Tara 或其他基于前述发行版的系统的相应版本。

### macOS

下载 `.dmg` 文件然后安装。如果出现“未识别的开发者”等提示消息，请依然允许 CP Editor 运行。可以在 `System Preferences -> Security & Privacy -> General` 中将 CP Editor 添加到白名单里。
