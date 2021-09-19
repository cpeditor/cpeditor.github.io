---
title: "Code Edit"
weight: 10
---

### Tab 寬度

The width (number of characters) of an indent. It is used when displaying the tab characters. It is also used in [自動縮排](#自動縮排) and [以空白代替 Tab](#以空白代替-tab).

### 游標寬度

游標的像素寬度。

### 自動縮排

1.  When you start a new line, the new line will have the same indent (i.e. white spaces at the beginning of the line) as the old line.
2.  If the old line ends with `{`, an extra indent (a tab character or [Tab 寬度](#tab-寬度) spaces, depending on whether [以空白代替 Tab](#以空白代替-tab) is enabled) will be inserted at the beginning of the new line.

### 自動換行

一行文字過長時，將其換行顯示。

### 自動完成括號

Automatically add the right parenthesis when you type the left one. For example, when you type `(`, `)` will be added.

When the character next to the cursor is a right parenthesis and you type this parenthesis, instead of typing this parenthesis, the cursor will jump out of the parenthesis.

You can choose the parentheses to auto-complete in the [Parentheses](../language/\_index.zh_tw.md#parentheses) settings.

### 自動刪除括號

When you delete a left parenthesis, if a corresponding right parenthesis is next to it, the right parenthesis will also be deleted.

You can choose the parentheses to auto-remove in the [Parentheses](../language/\_index.zh_tw.md#parentheses) settings.

### 按下 Tab 時從一對括號跳出

When the cursor is next to a right parenthesis, you can use the Tab key to jump out of it. If [自動完成括號](#自動完成括號) is enabled, this is an alternative of typing the right parenthesis.

You can choose the parentheses to jump out by Tab in the [Parentheses](../language/\_index.zh_tw.md#parentheses) settings.

### 以空白代替 Tab

縮排時使用空白字元（`' '`）代替 Tab 字元（`'\t'`）。啟用時，縮排的寬度同為[Tab 寬度](#tab-寬度)。

請注意，開啟此選項並不會替換已有的 Tab 字元。此設定對於[自動縮排](#自動縮排)需換行後才會生效。
