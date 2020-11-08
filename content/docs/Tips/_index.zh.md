---
title: "提示"
weight: 50
description: 一些可能会有用的提示
---

## 设置页面中的快捷键

在设置页面中，你可以使用 <kbd>Ctlr+D</kbd>，<kbd>Ctrl+R</kbd> 和 <kbd>Ctrl+S</kbd> 作为 “默认”，“重置” 和 “应用” 的快捷键。

你还可以使用 <kbd>Ctlr+Tab</kbd> 和 <kbd>Ctlr+Shift+Tab</kbd> 以实现各设置页面间的快捷切换。

## 编辑器中的快捷键

除了菜单中提及的快捷键之外，你还可以使用 Qt 中的 [只读快捷键](https://doc.qt.io/qt-5/qtextedit.html#read-only-key-bindings) 和 [修改快捷键](https://doc.qt.io/qt-5/qtextedit.html#editing-key-bindings)。

CP Editor 还提供一些隐藏的快捷键：<kbd>Tab</kbd>（当有文本被选中时）和 <kbd>Shift+Tab</kbd> 用于缩进和取消缩进，<kbd>Ctrl+Enter</kbd> 和 <kbd>Ctrl+Shift+Enter</kbd> 分别用于在当前行之前和之后插入空行，<kbd>Shift+Delete</kbd> 用于删除当前行。

## 拖动文件

你可以直接将文件拖入编辑器或测试数据框中。

将文件拖入编辑器中会打开该文件，而将文件拖入测试数据框的输入/答案框中，会自动用该文件填充该框。

## 标签栏

你可以使用 <kbd>Ctrl+Tab</kbd> 和 <kbd>Ctrl+Shift+Tab</kbd> 以切换到下一个/上一个标签。

你还可以右键点击标签以调出菜单，菜单的内容与当前标签页是否保存，是否设置题目链接等有关。

## 测试数据

评测器在重新加载或设置变更时会重新编译，在编译评测器时，运行后未能及时反馈结果是正常现象。

你可以右键单击测试数据框，从而实现从文件中加载测试数据，在更大的窗口中编辑测试点，或是将测试点保存为文件。

你可以点击评测状态按钮来打开差异比较器。

## 编辑器模式

编辑器模式能让你专心编写代码，处理问题。你还可以通过分屏，做到一边阅读题目，一边使用 CP Editor 编写代码。

你可以设置一个快捷键来快速切换到编辑器模式。

## 从命令行启动 CP Editor

CP Editor 支持在命令行下启动，可以通过执行 `cpeditor --help` 命令获得更多详情。

在 Windows 下，更推荐使用类 UNIX 的终端（如 Git Bash）。

在命令行下，你可以通过 `cpeditor <path>` 来在指定的位置创建新文件，或是用 `cpeditor --cpp <directory>` 打开一个目录下的所有 C++ 源代码，还可以通过 `cpeditor --no-hot-exit` 暂时禁用 [在启动时恢复上一次会话](../Preferences/Actions/_index.zh.md#restore-last-session-at-startup)。

CP Editor 在接收到 SIGINT 和 SIGHUP 命令时会正常关闭，因此如果你在命令行下启动 CP Editor，你可以通过按下 <kbd>Ctrl+C</kbd> 退出，而不必担心丢失任何工作。
