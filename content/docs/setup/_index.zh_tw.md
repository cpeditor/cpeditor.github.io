---
title: "首次設定"
linkTitle: "首次設定"
weight: 30
description: 調整 CP Editor 並準備使用
---

## 調整 UI 語言

CP Editor 支援多種語言，包括英文及俄文。

您可以在 [偏好設定->介面->一般->UI 語言](../preferences/appearance/\_index.zh_tw.md#ui-language) 調整介面的顯示語言。需要重開 CP Editor 以生效。

## 設定編譯及執行指令

依據您使用的程式語言，需要安裝 `g++`、`python`、`java` 等軟體。為了讓 CP Editor 可以順利找到它們，可能需要將其加到系統的 PATH 環境變數。

接下來可以在偏好設定畫面中設定輸入編譯及執行的指令。例如在[偏好設定->程式語言->C++->C++ 指令](../preferences/language/\_index.zh_tw.md#c-commands)設定 C++ 指令。

## 安裝 CF Tool

需要安裝[CF Tool](https://github.com/xalanq/cf-tool)才能在 CP Editor 裡繳交答案至 Codeforces。

接著將 CF Tool 加入系統 PATH 環境變數，或者在[偏好設定->擴充功能->CF Tool](../preferences/extensions/\_index.zh_tw.md#cf-tool)設定其路徑。

此外在使用之前，還需要在命令列中輸入 `cf config` 以調整其組態。

## 安裝 Competitive Companion

[Competitive Companion](https://github.com/jmerle/competitive-companion) 是用來剖析線上評測系統（Online Judge）的題目。安裝了它，您就可以單鍵取得範例測資，跟手動複製貼上說掰掰。

您可以在這些瀏覽器外掛元件商店安裝：

-   [Firefox 附加元件](https://addons.mozilla.org/en-US/firefox/addon/competitive-companion/)
-   [Chrome 擴充功能](https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl)

## 安裝程式碼排版工具

### 安裝 Clang Format

CP Editor 使用[Clang Format](http://releases.llvm.org/download.html)排版 C/C++、Java 程式碼。

您需要將 Clang Format 加入系統 PATH 環境變數，或者在[偏好設定->擴充功能->Clang Format](../preferences/extensions/\_index.zh_tw.md#clang-format)設定其路徑。

### 安裝 YAPF

CP Editor 使用[YAPF](https://github.com/google/yapf)排版 Python 程式碼。

請依照[安裝指示](https://github.com/google/yapf#installation)操作，在完成之後應該就能運作。若沒有，請在[偏好設定->擴充功能->程式碼排版->YAPF](../preferences/extensions/\_index.zh_tw.md#yapf)中設定其路徑及引數。

## 安裝 Language Server

[Language Server](https://microsoft.github.io/language-server-protocol/) 可以來梳理（Lint）程式碼，並顯示錯誤、警告訊息。

您可以安裝[Language Server 程式](https://microsoft.github.io/language-server-protocol/implementors/servers/)並在[偏好設定->擴充功能->Language Server](../preferences/extensions/\_index.zh_tw.md#language-server)調整設定值。

若您不知道該安裝哪個，以下是一些建議。

### C++ Server

如果您已經安裝了 LLVM，那麼 `clangd` 就會與 `clang` 編譯器一同安裝。

根據不同作業系統，安裝方法如下：

-   Windows：到[LLVM 的網站](https://releases.llvm.org/download.html) 下載並安裝編譯好的檔案
-   Linux/macOS：使用套件管理系統安裝

接著必須讓 CP Editor 找到 Language Server 程式，在 **偏好設定->擴充功能->Language Server->C++ Server->路徑** 中設定 `clangd` 的命令，視情況為：

-   `clangd` 已在 PATH 環境變數中時，值為 `clangd`
-   `clangd` 的可執行檔路徑

### Java Server

首先，您的電腦需要安裝 `java` 並將其加入 `PATH` 環境變數。接著下載[Eclipse.JDT.ls](http://download.eclipse.org/jdtls/snapshots/jdt-language-server-latest.tar.gz)並將其解壓縮到您喜歡的位置，此小節將以 `<INSTALL_PATH>` 來稱呼該位置。在 Windows 上 `<INSTALL_PATH>` 可能會長這樣：`C://Users/Myname/Desktop/EclipseJDT.ls/`）。

接著進到 CP Editor，在 **偏好設定->擴充功能->Language Server->Java Server** 將「路徑」的值填入 `java` 並在「引數」填入像這樣的值：

`-jar $INSTALL_PATH/plugins/org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar -configuration <INSTALL_PATH>/config_(linux|win|mac)`。

以 Windows 而言，引數的值類似：

`-configuration C://Users/Myname/Desktop/Eclipse.JDT.ls/config_win`。

請注意，您的 `jar` 檔案名稱可能不會與此處的例子相同，會隨著 JDT 版本更迭而變。若 java 出現「jar not found」的錯誤，請在 `<INSTALL_PATH>/plugins` 中找到 `org.eclipse.equinox.launcher_*` jar 檔案的最新版本，並將該檔名替代引數中 `-jar` 後面的內容。

### Python Server

首先，您的系統需有 `python` 及 `pip`，且將其加入 `PATH` 環境變數。接著以 `pip install 'python-language-server[all]'` 命令安裝 `python-language-server` pip 模組，在安裝完成後開啟 CP Editor 進到 **偏好設定->擴充功能->Language Server->Python Server**。

在「路徑」填入 `python`，並將「引數」設為`-m pyls`。儲存設定後，您就可以使用 Python 的 Linting 功能了。
