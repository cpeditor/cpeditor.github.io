---
title: "动作"
weight: 40
---

## 保存

### 更快地保存文件

使用 [`QFile`](https://doc.qt.io/qt-5/qfile.html) 而非 [`QSaveFile`](https://doc.qt.io/qt-5/qsavefile.html) 来保存文件。

启用该选项可能有较小的风险，但会提升保存的速度。

### 编译时保存文件

在编译前保存你的代码。

### 执行时保存文件

在运行前保存你的代码。

### 保存文件前保存测试用例

在保存代码前将测试用例一并保存。

你可以在 [文件路径/测试点](../file-path/_index.zh.md#测试点) 中设置测试用例保存的位置。

## 自动保存

### 自动保存间隔类型

It is easier to describe if we explain a little bit about the internal implementation: There is a countdown timer. When we "reset" it, it will be "running" in the next _Auto Save Interval_ milliseconds, and after _Auto Save Interval_ milliseconds, the timer will "timeout" and the code is auto-saved.

#### After the last modification

The timer is reset every time when you modify the code. i.e. Your codes will be saved if you haven't modified it for _Auto Save Interval_ milliseconds.

This mode is suitable for a small _Auto Save Interval_, so that your codes will be auto-saved every time you take a short break from typing. If the interval is too long, it's likely that your codes will never be auto-saved.

#### After the first modification

The timer is reset when you modify the code if the timer is not running. i.e. Your codes will be saved if you modified it _Auto Save Interval_ milliseconds ago.

This mode is suitable for a long _Auto Save Interval_, otherwise it's likely that the save happens when you are typing, which could affect your typing experience.

#### Without modification

The timer is reset every time when it timeouts. i.e. Your codes will be saved every _Auto Save Interval_ milliseconds, no matter you have modified it or not.

This mode is suitable for saving test cases, etc. In the other modes, the test cases are not auto-saved if you don't modify the codes.

## Detached Execution

### Terminal Program

### Terminal Arguments

This setting is only available on Linux.

The terminal program is the name/path of the terminal emulator you want to use.

The arguments are used to execute a given command. i.e. `<Terminal Program> <Terminal Arguments> <command>` can be used to execute `<command>` in the terminal emulator.

In most terminal emulators including `konsole`, `xterm` and `xfce-terminal`, the argument is `-e`.

In `gnome-terminal`, it is `--`.

You can read the manual of your terminal emulator to get the suitable arguments.

## Save Session

### Restore last session at startup

Save the status of the editor, and restore most status from the last session when you start CP Editor.

You can use the `--no-hot-exit` command line option to temporarily disable this, in case that the last session is too big and the application hangs.

### Auto-save the current session periodically

Save the current session periodically instead of only when exiting the application.

This is useful if you don't want to lose your codes after abnormal terminations, such as power outage, forced shutdown, killing CP Editor, etc. However, if the files and test cases are too large, the editor hangs each time the auto-save happens.

## Bind file and problem

### Restore the problem URL when opening a file

If a problem URL was set for a file, when you open that file again, the problem URL will be restored.

### Open the old file when parsing an old problem URL

If a problem URL was set for a file, when parsing that problem from Competitive Companion again, the old file will be opened.

## Empty Test Cases

### Run your codes on empty test cases

Run your code on all non-hidden test cases even if the input is empty.

### Check your answer on test cases with empty output

Check your answer even if your output or the expected output is empty.

## Load External File Changes

### Auto-load external file changes if there's no unsaved modification

If the file on the disk and the code in CP Editor was the same, and then the file is changed outside of CP Editor, load the external change without confirmation.

### Ask whether to load external file changes

If the file is changed outside of CP Editor, ask whether to load the change or not.

If this setting is disabled, external changes won't be loaded.

[Auto-load external file changes if there's no unsaved modification](#auto-load-external-file-changes-if-theres-no-unsaved-modification) overrides this setting. i.e. if [Auto-load external file changes if there's no unsaved modification](#auto-load-external-file-changes-if-theres-no-unsaved-modification) is enabled, external file changes will be loaded without confrimation regardless of [Ask whether to load external file changes](#ask-whether-to-load-external-file-changes) ; if [Auto-load external file changes if there's no unsaved modification](#auto-load-external-file-changes-if-theres-no-unsaved-modification) is disabled, the user will be asked whether to load the changes only when [Ask whether to load external file changes](#ask-whether-to-load-external-file-changes) is enabled, otherwise the changes won't be loaded.
