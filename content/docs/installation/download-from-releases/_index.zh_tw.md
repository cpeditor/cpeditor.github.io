---
title: "在 Releases 中下載"
weight: 10
description: 安裝 CP Editor 最簡易的方法，適合大多數使用者。
---

你需要在 [Releases](https://github.com/cpeditor/cpeditor/releases) 頁面找到你需要的版本，然後根據你的作業系統選擇相應的檔案並下載安裝。

### Windows

#### 安裝版

安裝版需要在您的電腦上安裝。設定檔案將存儲在系統的設定目錄中，並且在系統上已安裝程式的清單中可見。

下載檔案列表中的 `setup.exe` 並安裝它。

#### 免安裝版

免安裝版無需安裝即可執行。設定檔案將存儲在與可執行文件相同的目錄中，並且您不會在系統上已安裝程式的清單中看到它。

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
