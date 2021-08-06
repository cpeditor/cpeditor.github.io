---
title: "安裝程式"
linkTitle: "安裝程式"
weight: 10
description: 安裝 CP Editor 最簡易的方法，適合大多數使用者。
---

從[檔案列表](https://github.com/cpeditor/cpeditor/releases)中選擇版本，並下載程式。

### Windows

#### 安裝版

> The setup version needs to be installed on your machine. The setting files will be stored in the config directory on your system, and it will be visible in the list of installed programs on your system.

下載檔案列表中的 `setup.exe` 並安裝它。

#### 免安裝版

> The portable version can be executed without installation. The setting files will be stored in the same directory as the executable file, and you won't see it in the list of installed programs on your system.

下載檔案列表中的 `portable.zip` 並解壓縮到您喜歡的地方。

### 大多數 Linux 發行版

下載檔案列表中的 `AppImage`，並賦予其執行權限（`chmod +x <AppImagePath>`），再執行它。

### Debian 衍生的 Linux 發行版

在一些由 Debian 衍生的 Linux 發行版（如 Ubuntu, Linux Mint）您可以下載 `.deb` 套件並在終端機執行這行命令：

```sh
sudo apt install <path to .deb package>
```

接著輸入 root 使用者的密碼並同意安裝。如果您習慣操作圖形介面，亦可使用像 `Gdebi` 這樣的工具來安裝 `deb` 套件。

支援的發行版：Debian 10 Buster、Ubuntu 18.04 Bionic Beaver、Linux Mint 19 Tara 以及更新的版本（或其他由前述版本再衍生的發行版）。

### macOS

下載檔案列表中的 `.dmg` 檔案並安裝它。

在安裝過程中，您可能需要按幾次「好」以存取檔案系統。Apple 可能會警告您這個應用程式是來自未識別開發者的 Mac App。參考[Apple 的 macOS 使用手冊](https://support.apple.com/zh-tw/guide/mac-help/mh40616/mac)將 CP Editor 授予例外。