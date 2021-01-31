---
title: "Build from source"
linkTitle: "Build from source"
weight: 20
description: In this way, you can get the latest unreleased features and get ready for contributing. It needs more steps but is the only choice if your OS is not officially supported.
---

1.  Clone this repo and submodules:

    ```sh
    git clone --recurse-submodules https://github.com/cpeditor/cpeditor.git
    cd cpeditor
    ```

2.  Install [Qt](https://www.qt.io/download) (5.15 or higher), [CMake](https://cmake.org/download/) (3.12 or higher) and [Python3](https://www.python.org/downloads/).
    -   On some Linux distributions and macOS, you can install from your package manager. For example, `sudo pacman -S qt5` on Arch Linux, `brew install qt5` on macOS.
    -   You can also use [aqtinstall](https://github.com/miurahr/aqtinstall) to install Qt.

3.  If CMake can't find the Qt installation path, you should set the environment variable: `CMAKE_PREFIX_PATH=%QtPath%/%QtVersion%/%Compiler%/lib/cmake`. For example, on macOS, you can run something like `export CMAKE_PREFIX_PATH="/usr/local/Cellar/qt/5.15.1"`.

4.  Run the following commands:

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

On Linux, you will get `build/cpeditor`.

On macOS, you will get `build/cpeditor.app`.

On Windows, you will get `build\cpeditor.exe`, or `build\Release\cpeditor.exe`. If DLLs are missing, you can add `%QtPath%\%QtVersion%\%Compiler%\bin` (for example, `D:\Qt\5.15.1\msvc2019_64\bin`) to the PATH environmental variable.
