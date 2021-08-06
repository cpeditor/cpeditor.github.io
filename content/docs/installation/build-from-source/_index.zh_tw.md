---
title: "編譯原始碼"
linkTitle: "編譯原始碼"
weight: 20
description: 此方式適合想要嘗鮮最新功能的使用者、協助進行開發的貢獻者使用。它的步驟較多，但若您使用不被支援的作業系統，這是使用 CP Editor 的唯一作法。
---

1.  Clone 儲存庫及 submodules：

    ```sh
    git clone --recurse-submodules https://github.com/cpeditor/cpeditor.git
    cd cpeditor
    ```

2.  安裝 [Qt](https://www.qt.io/download) (5.15 or higher), [CMake](https://cmake.org/download/) (3.12 or higher) 及 [Python3](https://www.python.org/downloads/)。
    -   在 macOS 及某些 Linux 發行版，您可以透過套件管理系統來安裝。例如在 Arch Linux 上使用 `sudo pacman -S qt5`，在 macOS 上使用`brew install qt5`。
    -   您也可以用 [aqtinstall](https://github.com/miurahr/aqtinstall) 安裝 Qt。

3.  若 CMake 找不到 Qt 的安裝路徑，需要設定環境變數：`CMAKE_PREFIX_PATH=%QtPath%/%QtVersion%/%Compiler%/lib/cmake`。以 macOS 而言，執行這個命令 `export CMAKE_PREFIX_PATH="/usr/local/Cellar/qt/5.15.1"`。

4.  執行下列命令。

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

依據不同的系統，建置的檔案位於

Linux：`build/cpeditor`

macOS：`build/cpeditor.app`

Windows：`build\cpeditor.exe` 或 `build\Release\cpeditor.exe`
若執行時發生缺少 DLL 的錯誤，您可以在 PATH 環境變數加上`%QtPath%\%QtVersion%\%Compiler%\bin` (例如： `D:\Qt\5.15.1\msvc2019_64\bin`)。
