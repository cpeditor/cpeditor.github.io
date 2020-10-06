---
title: "通用"
weight: 1000
---

### 临时文件夹

在 CP Editor 中，每个文件都有一个临时目录，可用于保存可执行文件等等。

你可以将其视为安全地为每个选项卡（即每个文件）保存内容而不影响磁盘上其他文件的地方，并且在关闭选项卡时它会被自动删除。

在 Linux，它位于 `/tmp/CP Editor-XXXXXX`。在 Windows，它位于 `C:\Users\<username>\AppData\Local\Temp\CP Editor-XXXXXX`。

### 正则表达式

[正则表达式](https://en.wikipedia.org/wiki/Regular_expression) 用于匹配字符串中的模式以及查找和替换子字符串。

你可以找到许多在线正则表达式课程，例如: <https://regexone.com/>.

在 CP Editor，你可以使用 `\1`, `\2` 等用于替换模式中的第一个/第二个捕获组的内容。
