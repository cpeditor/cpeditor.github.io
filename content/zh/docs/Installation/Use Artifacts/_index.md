---
title: "使用 Artifacts"
linkTitle: "使用 Artifacts"
weight: 30
description: 使用这种方法，你无需自己构建即可获得最新的未正式发布功能。但是并非所有操作系统都支持此功能，并且只能用于更新，而不能用于首次安装。
---

如果你想要使用最新版本（比 beta 还要新），但是不想从源代码构建，你可以从 [GitHub Actions](https://github.com/cpeditor/cpeditor/actions) 下载 Artifacts。

然而，我们不建议你使用 Artifacts，因为它们比 beta 版本更加不稳定，可能正在开发中。在使用 Artifacts 之前，你应该阅读 commit 日志甚至源代码。

为了在 Windows/MacOS 上运行它，你应该首先从 [Releases](https://github.com/cpeditor/cpeditor/releases) 安装（通常任何版本都可以，除非 DLL 丢失等）。在 Windows 上，将安装文件夹中的`cpeditor.exe` 替换为 Artifact 版本的。在 Mac 上，运行 `cp path/to/Artifact cpeditor.app/Contents/MacOs`，其中 `cpeditor.app` 是你的计算机上已安装的那个。

为了在 Ubuntu 18.04 上运行它，你需要安装 Qt。其他 Linux 发行版可能不支持在 Ubuntu 18.04 上编译的二进制文件。
