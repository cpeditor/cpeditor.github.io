---
title: "一般"
weight: 1000
---

### 暫存目錄

CP Editor 中，每個檔案都位於各自的臨時目錄，用來存放可執行檔及其它檔案。

您可以將其看做每個分頁（每個檔案）都有一個安全存放資料的地方，以避免影響硬碟上的其他檔案。暫存目錄會在分頁關閉時被自動刪除。

暫存目錄的位置因不同系統而異：

-   Linux：`/tmp/CP Editor-XXXXXX`
-   Windows：`C:\Users\<您的使用者名稱>\AppData\Local\Temp\CP Editor-XXXXXX`

### 正規表達式

[正規表達式](https://en.wikipedia.org/wiki/Regular_expression)可以用來比對字串中符合給定規則的內容，並用來尋找及取代它們。

您可以在網路上找到許多關於正規表達式的課程，例如 <https://regexone.com/>。

在 CP Editor 中，您可以使用 `\<數字>` 來表示符合取代規則的第幾個組別。例如：`\1`、`\2` 表示符合取代規則的第一、第二個組別。
