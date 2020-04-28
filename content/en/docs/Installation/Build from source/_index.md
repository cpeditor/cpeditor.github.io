---
title: "Build from source"
linkTitle: "Build from source"
weight: 20
description: In this way, you can get the latest unreleased features and get ready for contributing. It needs more steps, and is the only choice if your OS is not officially supported.
---

1.  Clone this repo and submodules:

    ```sh
    git clone --recurse-submodules https://github.com/cpeditor/cpeditor.git
    cd cpeditor
    ```

2.  Install [Qt](https://www.qt.io/download) (5.12 or higher), [CMake](https://cmake.org/download/) (3.12 or higher) and [Python3](https://www.python.org/downloads/).
    -   On some Linux distributions and MacOS, you can install from your package manager. For example, `sudo pacman -S qt5` on Arch Linux, `brew install qt5` on Mac OS.
    -   You can also download the [offline installer](https://www.qt.io/offline-installers), or download from the [mirrors](https://download.qt.io/static/mirrorlist/). The path from the root of the mirror should be like `/qt/official_releases/qt/5.14/5.14.2/qt-opensource-<platform>-5.14.2.<suffix>` (or other versions).
    -   You can also use [aqtinstall](https://github.com/miurahr/aqtinstall) to install Qt.

3.  If CMake can't find the Qt installation path, you should set environment variable: `CMAKE_PREFIX_PATH=%QtPath%/%QtVersion%/%Compiler%/lib/cmake`. For example, on Mac, you can run something like `export CMAKE_PREFIX_PATH="/usr/local/Cellar/qt/5.14.2"`.

4.  Run the following commands:

    -   Linux/MacOS:

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

On Mac, you will get `build/cpeditor.app`.

On Windows, you will get `build/cpeditor.exe`, or `build/Release/cpeditor.exe`. You may need to gather the necessary DLLs. If you have installed CP Editor by a `setup.exe`, you can copy the DLLs from where CP Editor is installed (or copy the executable file to the installation path).
