---
title: "初始化"
linkTitle: "初始化"
weight: 30
description: 完成 CP Editor 的初始化以做好使用准备
---

## 更改界面语言

现在 CP Editor 支持多种语言，包括英文，中文和俄语。

在默认情况下 CP Editor 的界面语言与系统设置一致。如果你需要对界面语言进行更改，可以在 [设置->外观->通用->界面语言](../preferences/appearance/\_index.zh.md#界面语言-ui-language) 中进行更改。注意你需要重启 CP Editor 以使更改生效。

## 设置编译与运行命令

根据你使用的编程语言，你需要安装 `g++` / `python` / `java` 等环境。你需要将它们加入 `PATH` 环境变量以使 CP Editor 能找到它们。

接下来在设置页面设置编译与运行命令。例如，你可以在 [设置->语言->C++->C++ 命令](../preferences/language/\_index.zh.md#c-命令) 中设置 C++ 的相关命令。

## 安装 CF Tool

如果你需要在 CP Editor 中提交 Codeforces 题目，你需要安装 [CF Tool](https://github.com/xalanq/cf-tool)。

你可以将其加入 `PATH` 环境变量，或是在 [设置->扩展->CF Tool](../preferences/extensions/\_index.zh.md#cf-tool) 中设置其路径。

在使用 CF Tool 之前，你需要在终端运行 `cf config` 命令完成相关配置。

## 安装 Competitive Companion

[Competitive Companion](https://github.com/jmerle/competitive-companion) 用于从在线评测系统中解析题目/比赛的信息。在安装它后，你只需点击一下即可从题目中获取测试样例，免除了手动复制的麻烦。

你可以通过安装浏览器扩展的方式来安装 Competitive Companion。

-   [Chrome](https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl)
-   [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/competitive-companion/)

## 安装代码格式化程序

### 安装 Clang Format

CP Editor 使用 [Clang Format](http://releases.llvm.org/download.html) 来格式化 C/C++ 以及 Java 代码。

你需要将其加入 `PATH` 环境变量，或是在 [设置->扩展->Clang Format](../preferences/extensions/\_index.zh.md#clang-format) 中设置其路径。

### 安装 YAPF

CP Editor 使用 [YAPF](https://github.com/google/yapf) 来格式化 Python 代码。

[安装](https://github.com/google/yapf#installation) 后应该就可以使用了。如果不能，请在 [设置->扩展->代码格式化->YAPF](../preferences/extensions/\_index.zh.md#yapf) 进行设置。

## 安装 Language Server

你可以使用 [Language Server](https://microsoft.github.io/language-server-protocol/) 来获得你代码中的错误或警告信息。

要使用 Language Server，你需要安装 [Language Server 程序](https://microsoft.github.io/language-server-protocol/implementors/servers/) 并在 [设置->扩展->Language Server](../preferences/extensions/\_index.zh.md#language-server) 中完成相关设置。

如果你不熟悉 Language Server 的话，下面是一些可能有用的建议。

### C++ Server

[LLVM](https://releases.llvm.org/download.html) 提供了 `clangd` 程序。在 Windows 下，你需要下载 LLVM 的二进制安装包；而在 Linux 和 macOS 下，你可以通过包管理器进行安装。你需要在 设置->扩展->Language Server->C++ Server 中设置 `clangd` 路径，该路径应被设置为可执行文件的路径。如果它已经在 `PATH` 中，直接设置为 `clangd` 即可。

### Java Server

你需要安装 `java` 并将其加入 `PATH` 环境变量中。接下来下载 [Eclipse.JDT.ls](http://download.eclipse.org/jdtls/snapshots/jdt-language-server-latest.tar.gz)，将其解压至你想要解压的位置（需要在一个新目录下），我们下面称该目录为 `<INSTALL_PATH>`。接下来在 设置->扩展->Language Server->Java Server 中，将路径设置为 `java`，将参数设置为 `-jar $INSTALL_PATH/plugins/org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar -configuration <INSTALL_PATH>/config_(linux|win|mac)`。例如，在 Windows 下，参数可以这样设置：`-configuration C://Users/Myname/Desktop/Eclipse.JDT.ls/config_win`。

上述 jar 文件的完整文件名，`org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar`，可能会随 JDT 的版本改变而改变。如果 Java 提示 “jar 未找到”，请在 `<INSTALL_PATH>/plugins` 下找到 `org.eclipse.equinox.launcher_*` jar 文件的最新版本，并用相应的文件名替换 `-jar` 后面的命令参数。

### Python Server

你需要安装 `python` 和 `pip` 并将其加入 `PATH` 中。执行命令 `pip install 'python-language-server[all]` 安装 `python-language-server`。在安装完成后，打开 CP Editor，在 设置->扩展->Language Server->Python Server 中，将路径设置为 `python`，将参数设置为 `-m pyls`，即可完成 Python 下 Language Server 程序的配置。
