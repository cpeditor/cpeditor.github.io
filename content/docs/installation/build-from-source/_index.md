---
title: "Build from source"
linkTitle: "Build from source"
weight: 20
description: In this way, you can get the latest unreleased features and get ready for contributing. It needs more steps but is the only choice if your OS is not officially supported.
---

### Preparation

1.  Clone this repo and submodules:

    ```sh
    git clone --recurse-submodules https://github.com/cpeditor/cpeditor.git
    # or alternatively in two separate commands
    # git clone https://github.com/cpeditor/cpeditor.git
    # git submodule update --init --recursive
    cd cpeditor
    ```

2.  Install [Qt](https://www.qt.io/download) (6.5 or higher), [CMake](https://cmake.org/download/) (3.16 or higher) and [Python3](https://www.python.org/downloads/).

    -   On some Linux distributions and macOS, you can install from your package manager. For example, `sudo pacman -S qt6-base` on Arch Linux, `brew install qt` on macOS.
    -   You can also use [aqtinstall](https://github.com/miurahr/aqtinstall) to install Qt.

3.  If CMake can't find the Qt installation path, you should set the environment variable: `CMAKE_PREFIX_PATH=%QtPath%/%QtVersion%/%Compiler%/lib/cmake`. For example, on macOS, you can run something like `export CMAKE_PREFIX_PATH="/usr/local/Cellar/qt/5.15.2"`.

4.  Install [Extra CMake Modules](https://github.com/KDE/extra-cmake-modules) and [KDE (kf6) Syntax Highlighting](https://github.com/KDE/syntax-highlighting). These are **not** bundled as submodules and must be installed on the host system before building.

    -   On some Linux distributions, you can install from your package manager. For example, `sudo pacman -S syntax-highlighting` on Arch Linux.

    -   On macOS, you will need to build them from source as KF6 formulas are not yet available in package managers.

    -   Otherwise, you can clone and build them manually:

        ```sh
        git clone https://github.com/KDE/extra-cmake-modules.git
        cd extra-cmake-modules
        cmake -B build -S . -DBUILD_HTML_DOCS=OFF -DBUILD_MAN_DOCS=OFF -DBUILD_QTHELP_DOCS=OFF -DBUILD_TESTING=OFF
        cmake --build build --config Release --target install # may require sudo
        cd ..

        git clone https://github.com/KDE/syntax-highlighting.git
        cd syntax-highlighting
        cmake -B build -S . -DBUILD_HTML_DOCS=OFF -DBUILD_MAN_DOCS=OFF -DBUILD_QTHELP_DOCS=OFF -DBUILD_TESTING=OFF
        cmake --build build --config Release --target install # may require sudo
        cd ..
        ```

### Build

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

On Linux, you will get `build/cpeditor`.

On macOS, you will get `build/cpeditor.app`.

On Windows, you will get `build\cpeditor.exe`, or `build\Release\cpeditor.exe`. If DLLs are missing, you can add `%QtPath%\%QtVersion%\%Compiler%\bin` (for example, `D:\Qt\5.15.2\msvc2019_64\bin`) to the PATH environmental variable.
