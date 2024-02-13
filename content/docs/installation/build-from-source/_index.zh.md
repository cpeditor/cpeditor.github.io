---
title: "从源代码构建"
linkTitle: "从源代码构建"
weight: 20
description: 通过这种方式，你可以使用最新的还未发布的特性，同时为参与开发做好准备。这需要更多的步骤，也是在你的操作系统不被支持时的唯一方案。
---

### 准备工作

1.  克隆源代码仓库以及子组件：

    ```sh
    git clone --recurse-submodules https://github.com/cpeditor/cpeditor.git
    # 或者分成两条命令
    # git clone https://github.com/cpeditor/cpeditor.git
    # git submodule update --init --recursive
    cd cpeditor
    ```

2.  安装 [Qt](https://www.qt.io/download)（5.15）, [CMake](https://cmake.org/download/)（3.12 或更高版本）以及 [Python3](https://www.python.org/downloads/)。
    -   在一些 Linux 发行版和 macOS 系统上，你可以直接使用包管理器安装 Qt。例如，在 Arch Linux 上可以使用 `sudo pacman -S qt5-base`，在 macOS 上可以使用 `brew install qt@5`。
    -   你还可以使用 [aqtinstall](https://github.com/miurahr/aqtinstall) 来下载并安装。

3.  如果 CMake 提示找不到 Qt 路径，你应该设置环境变量：`CMAKE_PREFIX_PATH=%QtPath%/%QtVersion%/%Compiler%/lib/cmake`。例如，在 macOS 上，你可以运行 `export CMAKE_PREFIX_PATH="/usr/local/Cellar/qt/5.15.2"`。

4.  安装 KDE (kf5) Extra CMake Modules 以及 Syntax Highlighting.

    -   在一些 Linux 发行版和 macOS 系统上，你可以直接使用包管理器安装它们。例如，在 Arch Linux 上可以使用 `sudo pacman -S extra-cmake-modules syntax-highlighting5`，在 macOS 上可以使用 [Homebrew KDE](https://github.com/KDE/homebrew-kde) 然后 `brew install extra-cmake-modules kde-mac/kde/kf5-syntax-highlighting`。

    -   否则，你需要使用 CMake 构建并安装它们：

        ```sh
        cd third_party/extra-cmake-modules # cd third_party/syntax-highlighting
        cmake -B build -S . -DBUILD_HTML_DOCS=OFF -DBUILD_MAN_DOCS=OFF -DBUILD_QTHELP_DOCS=OFF -DBUILD_TESTING=OFF
        cmake --build build --config Release --target install # 可能需要 sudo
        ```

### 构建

-   Linux/macOS:

    ```sh
    cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build
    ```

-   Windows:

    ```bat
    cmake -S . -B build
    cmake --build build --config Release
    ```

在 Linux 上，你会得到 `build/cpeditor`。

在 macOS 上，你会得到 `build/cpeditor.app`。

在 Windows 上，你会得到 `build/cpeditor.exe` 或 `build/Release/cpeditor.exe`。如果打开时提示 DLL 缺失，你可以将 `%QtPath%\%QtVersion%\%Compiler%\bin`（例如：`D:\Qt\5.15.2\msvc2019_64\bin`）加入 PATH 环境变量。
