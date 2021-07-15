---
title: "Actions"
weight: 40
---

## Save

### Save Files Faster

Use [`QFile`](https://doc.qt.io/qt-5/qfile.html) instead of [`QSaveFile`](https://doc.qt.io/qt-5/qsavefile.html) to save files.

This is slightly unsafer but notably faster.

### Save File On Compilation

Save your code when compiling it.

### Save File On Execution

Save your code when executing it.

### Save Testcases on Save

Save the test cases on the disk when saving the code.

You can choose where to save the test cases in [File Path/Testcases](../file-path/\_index.md#testcases).

## Auto Save

### Auto Save Interval Type

It is easier to describe if we explain a little bit about the internal implementation: There is a countdown timer. When we "reset" it, it will be "running" in the next *Auto Save Interval* milliseconds, and after *Auto Save Interval* milliseconds, the timer will "timeout" and the code is auto-saved.

#### After the last modification

The timer is reset whenever you modify the code. i.e. Your codes will be saved if you haven't modified it for *Auto Save Interval* milliseconds.

This mode is suitable for a small *Auto Save Interval* so that your codes will be auto-saved every time you take a short break from typing. If the interval is too long, likely, your codes will never be auto-saved.

#### After the first modification

The timer is reset when you modify the code if the timer is not running. i.e. Your codes will be saved if you modified it *Auto Save Interval* milliseconds ago.

This mode is suitable for a long *Auto Save Interval*, otherwise, it's likely that the save happens when you are typing, which could affect your typing experience.

#### Without modification

The timer is reset when it timeouts. i.e. Your codes will be saved every *Auto Save Interval* milliseconds, no matter you have modified it or not.

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

You can use the `--no-hot-exit` command-line option to temporarily disable this, in case that the last session is too big and the application hangs.

### Auto-save the current session periodically

Save the current session periodically instead of only when exiting the application.

This is useful if you don't want to lose your codes after abnormal terminations, such as power outage, forced shutdown, killing CP Editor, etc. However, if the files and test cases are too large, the editor hangs each time the auto-save happens.

## Bind file and problem

### Restore the problem URL when opening a file

If a problem URL was set for a file, when you open that file again, the problem URL will be restored.

### Open the old file when parsing an old problem URL

If a problem URL was set for a file, when parsing that problem from Competitive Companion again, the old file will be opened.

## Test Cases

### Run your codes on empty test cases

Run your code on all non-hidden test cases even if the input is empty.

### Check your answer on test cases with empty output

Check your answer even if your output or the expected output is empty.

### Auto Uncheck Accepted Testcases

After the code is executed, the accepted test cases will be automatically unchecked. When test cases are unchecked, they are collapsed and won't be tested on when you execute your code.

## Load External File Changes

### Auto-load external file changes if there's no unsaved modification

If the file on the disk and the code in CP Editor was the same, and then the file is changed outside of CP Editor, load the external change without confirmation.

### Ask whether to load external file changes

If the file is changed outside of CP Editor, ask whether to load the change or not.

If this setting is disabled, external changes won't be loaded.

[Auto-load external file changes if there's no unsaved modification](#auto-load-external-file-changes-if-theres-no-unsaved-modification) overrides this setting. i.e. if [Auto-load external file changes if there's no unsaved modification](#auto-load-external-file-changes-if-theres-no-unsaved-modification) is enabled, external file changes will be loaded without confirmation regardless of [Ask whether to load external file changes](#ask-whether-to-load-external-file-changes); if [Auto-load external file changes if there's no unsaved modification](#auto-load-external-file-changes-if-theres-no-unsaved-modification) is disabled, the user will be asked whether to load the changes only when [Ask whether to load external file changes](#ask-whether-to-load-external-file-changes) is enabled, otherwise the changes won't be loaded.
