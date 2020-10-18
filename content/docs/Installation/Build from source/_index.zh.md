---
title: "从源代码构建"
linkTitle: "从源代码构建"
weight: 20
description: 通过这种方式，你可以使用最新的还未发布的特性，同时为参与开发做好准备。这需要更多的步骤，也是在你的操作系统不被支持时的唯一方案。
---

1.  克隆源代码仓库以及子组件：

    ```sh
    git clone --recurse-submodules https://github.com/cpeditor/cpeditor.git
    cd cpeditor
    ```

2.  安装 [Qt](https://www.qt.io/download)（5.15 或更高版本）, [CMake](https://cmake.org/download/)（3.12 或更高版本）以及 [Python3](https://www.python.org/downloads/)。
    -   在一些 Linux 发行版和 macOS 系统上，你可以直接使用包管理器安装 Qt。例如，在 Arch Linux 上可以使用 `sudo pacman -S qt5-base`，在 macOS 上可以使用 `brew install qt5`。
    -   你还可以使用 [aqtinstall](https://github.com/miurahr/aqtinstall) 来下载并安装。

3.  如果 CMake 提示找不到 Qt 路径，你应该设置环境变量：`CMAKE_PREFIX_PATH=%QtPath%/%QtVersion%/%Compiler%/lib/cmake`。例如，在 macOS 上，你可以运行 `export CMAKE_PREFIX_PATH="/usr/local/Cellar/qt/5.15.1"`。

4.  执行如下命令完成构建过程。

    -   Linux/macOS:

        ```sh
        mkdir build
        cd build
        cmake .. -DCMAKE_BUILD_TYPE=Release
        cmake --build .
        ```

    -   Windows:

        ```bat
         mkdir build
         cd build
         cmake ..
         cmake --build . --config Release
        ```

在 Linux 上，你会得到 `build/cpeditor`。

在 macOS 上，你会得到 `build/cpeditor.app`。

在 Windows 上，你会得到 `build/cpeditor.exe` 或 `build/Release/cpeditor.exe`。如果打开时提示 DLL 缺失，你可以将 `%QtPath%\%QtVersion%\%Compiler%\bin`（例如：`D:\Qt\5.15.1\msvc2019_64\bin`）加入 PATH 环境变量。
