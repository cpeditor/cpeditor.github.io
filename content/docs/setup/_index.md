---
title: "Setup"
linkTitle: "Setup"
weight: 30
description: Setup CP Editor to prepare for using it
---

## Change UI Language

Now CP Editor is available in multiple languages, including English and Chinese.

You can change the UI language in [Preferences->Appearance->General->UI Language](../preferences/appearance/\_index.md#ui-language). Note that you need to restart CP Editor to apply the change.

## Set Compile and Run Commands

You need to install `g++` / `python` / `java` depending on which language you are using. You need to add them to system PATH to have them found by CP Editor.

Then you can set the Compile and Run Commands in the preferences. For example, you can set C++ Commands in [Preferences->Languages->C++->C++ Commands](../preferences/language/\_index.md#c-commands).

## Setup CF Tool

To submit Codeforces problems in CP Editor, you need to install [CF Tool](https://github.com/xalanq/cf-tool).

You can add it to your system PATH to use it directly, or you can set the path to it in [Preferences->Extensions->CF Tool](../preferences/extensions/\_index.md#cf-tool).

You need to configure the tool by running the command `cf config` in the command line before using it.

## Setup Competitive Companion

[Competitive Companion](https://github.com/jmerle/competitive-companion) is used to parse problems/contests from online judges. After you install it, you can parse sample test cases with a single click, instead of copying them manually.

You can install it from the addon/extension markets:

-   [Chrome Extension](https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl)
-   [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/competitive-companion/)

## Setup Code Formatter

### Setup Clang Format

CP Editor uses [Clang Format](http://releases.llvm.org/download.html) to format your C/C++ and Java code.

You need to add it to your system PATH, or set the path to it at [Preferences->Extensions->Clang Format](../preferences/extensions/\_index.md#clang-format).

### Setup YAPF

CP Editor uses [YAPF](https://github.com/google/yapf) to format your Python code.

It should work after [installation](https://github.com/google/yapf#installation). If not, set the program and arguments in [Preferences->Extensions->Code Formatting->YAPF](../preferences/extensions/\_index.md#yapf).

## Setup Language Server

You can use [Language Server](https://microsoft.github.io/language-server-protocol/) to lint your codes and get errors, warnings, etc.

You can install [any language server program](https://microsoft.github.io/language-server-protocol/implementors/servers/) and set suitable settings in [Preferences->Extensions->Language Server](../preferences/extensions/\_index.md#language-server).

Though you can use any language server program you like, here are some suggestions if you are not sure which to use.

### C++ Server

If you have installed LLVM, you already have `clangd`, because it comes with the clang compiler. If you haven't, please install [LLVM](https://releases.llvm.org/download.html) prebuild binaries for Windows. On Linux and macOS you can install it from your package manager. You need to set the start command of `clangd` in Preferences -> Extensions -> Language Server -> C++ Server -> Path, where the command can be the path to the executable file or just `clangd` if it's in the PATH.

### Java Server

You need to have `java` installed and added to `PATH`. Download [Eclipse.JDT.ls](http://download.eclipse.org/jdtls/snapshots/jdt-language-server-latest.tar.gz), extract it to any location (in a new directory), We call the path to that directory `<INSTALL_PATH>` (Something like `C://Users/Myname/Desktop/EclipseJDT.ls/`). In CP Editor, go to Preferences -> Extensions -> Language Server -> Java Server. Set "Path" to `java` and set "Arguments" to something like `-jar $INSTALL_PATH/plugins/org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar -configuration <INSTALL_PATH>/config_(linux|win|mac)`. For example, on Windows, the arguments should be something like `-configuration C://Users/Myname/Desktop/Eclipse.JDT.ls/config_win`.

The full name of the jar file above, `org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar`, may change incrementally as the project version of JDT changes. If java complains about "jar not found", then look for the latest version of the `org.eclipse.equinox.launcher_*` jar in `<INSTALL_PATH>/plugins` and replace it in the command after `-jar`.

### Python Server

You need to have `python` and `pip` installed and added to `PATH`. Install `python-language-server` pip module by running `pip install 'python-language-server[all]'`. After the installation is done, open CP Editor settings, go to Preferences -> Extensions -> Language Server -> Python Server. Set "Path" to `python` and set "Arguments" to `-m pyls`. Save the changes and you will have linting for Python.
