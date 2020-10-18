---
title: "初始化"
linkTitle: "初始化"
weight: 30
description: 完成 CP Editor 的初始化以做好使用准备
---

## 更改界面语言

现在 CP Editor 支持多种语言，包括英文，中文和俄语。

在默认情况下 CP Editor 的界面语言与系统设置一致。如果你需要对界面语言进行更改，可以在设置->外观中进行更改。注意你需要重启 CP Editor 以使更改生效。

## 设置编译与运行命令

根据你使用的编程语言，你需要安装 `g++` / `python` / `java` 等环境。你需要将它们加入 PATH 环境变量以使 CP Editor 能找到它们。

接下来在设置页面设置编译与运行命令。例如，你可以在 [设置->语言->C++->C++ 命令](../preferences/language#c-commands) 中设置 C++ 的相关命令。

## 安装 CF Tool

如果你需要在 CP Editor 中提交 Codeforces 题目，你需要安装 [CF Tool](https://github.com/xalanq/cf-tool)。

你可以将其加入 PATH 环境变量，或是在 [设置->扩展->CF Tool](../preferences/extensions#cf-tool) 中设置其路径。

在使用 CF Tool 之前，你需要在终端运行 `cf config` 命令完成相关配置。

## 安装 Competitive Companion

[Competitive Companion](https://github.com/jmerle/competitive-companion) 用于从在线评测系统中解析题目/比赛的信息。在安装它后，你只需点击一下即可从题目中获取测试样例，免除了手动复制的麻烦。

你可以通过安装浏览器扩展的方式来安装 Competitive Companion。

-   [Chrome](https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl)
-   [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/competitive-companion/)

## 安装 Clang Format

CP Editor 使用 [Clang Format](http://releases.llvm.org/download.html) 来格式化 C++ 代码。

你需要将其加入 PATH 环境变量，或是在 [设置->扩展->Clang Format](../preferences/extensions#clang-format) 中设置其路径。

## Setup Language Server

You can use [Language Server](https://microsoft.github.io/language-server-protocol/) to lint your codes and get errors, warnings, etc.

You can install [any language server program](https://microsoft.github.io/language-server-protocol/implementors/servers/) and set suitable settings in [Preferences->Extensions->Language Server](../preferences/extensions#language-server).

Though you can use any language server program you like, here are some suggestions if you are not sure which to use.

### C++ Server

If you have installed LLVM, you already have `clangd`, because it comes with the clang compiler. If you haven't, please install [LLVM](https://releases.llvm.org/download.html) prebuild binaries for Windows. On Linux and macOS you can install it from your package manager. You need to set the start command of `clangd` in Preferences -> Extensions -> Language Server -> C++ Server -> Path, where the command can be the path to the executable file or just `clangd` if it's in the PATH.

### Java Server

You need to have `java` installed and added to `PATH`. Download [Eclipse.JDT.ls](http://download.eclipse.org/jdtls/snapshots/jdt-language-server-latest.tar.gz), extract it to any location (in a new directory), We call the path to that directory `<INSTALL_PATH>` (Something like `C://Users/Myname/Desktop/EclipseJDT.ls/`). In CP Editor, go to Preferences -> Extensions -> Language Server -> Java Server. Set "Path" to `java` and set "Arguments" to something like `-jar $INSTALL_PATH/plugins/org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar -configuration <INSTALL_PATH>/config_(linux|win|mac)`. For example, on Windows, the arguments should be something like `-configuration C://Users/Myname/Desktop/Eclipse.JDT.ls/config_win`.

The full name of the jar file above, `org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar`, may change incrementally as the project version of JDT changes. If java complains about "jar not found", then look for the latest version of the `org.eclipse.equinox.launcher_*` jar in `<INSTALL_PATH>/plugins` and replace it in the command after `-jar`.

### Python Server

You need to have `python` and `pip` installed and added to `PATH`. Install `python-language-server` pip module by running `pip install 'python-language-server[all]'`. After the installation is done, open CP Editor settings, go to Preferences -> Extensions -> Language Server -> Python Server. Set "Path" to `python` and set "Arguments" to `-m pyls`. Save the changes and you will have linting for Python.
