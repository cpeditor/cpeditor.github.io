---
title: "Tips"
weight: 50
description: Some tips that may help
---

## Use stderr to debug

Currently, CP Editor doesn't have a built-in GUI debugger, but this doesn't mean it's hard to debug codes using CP Editor.

Besides single-stepping, the most used debugging approach is to output some variables. Do you remember the times you tried hard to distinguish the debugged variables from the normal outputs? You don't have to do this in CP Editor.

The key is: Use stderr to output debug information. In C++, this means to use `cerr` instead of `cout` to output. CP Editor will show the stderr of your program in the Messages section.

## Run on only selected test cases

In CP Editor, you don't have to always run on all test cases.

To tell CP Editor not to run on a certain test case, just uncheck the checkbox of that test case. You can also use the "More" menu to manage the checks: you can Check All, Uncheck All, Uncheck Accepted (very useful when you passed most test cases and want to debug on the unaccepted ones) and Invert.

If you want to run on a single test case, you can simply click the "Run" button of that test case.

## Copy output to expected for problems with multiple correct answers

Sometimes you are solving a problem that has more than one correct answer. The online judge has a checker, but you don't, and you don't have the time to write one. Leaving them in the "WA" verdict could be annoying, or even inconvenient because you have to manually check again after modifying your codes.

CP Editor provides a solution: Copy Output to Expected. This could be done in either the right-click menu of the Expected section for a single test case or in the "More" menu for all selected test cases. With this function, you can easily copy the accepted outputs to expected, and they will be in the AC verdict as long as their outputs are not changed.

## Load, edit and save test cases

You can load test cases from files, edit test cases in bigger windows and save a test case in a file in the right-click menu of the test cases.

## Testlib checkers are compiled at runtime

Testlib checkers are compiled when changing the checker or changing the preferences, so you may have to wait for it after the execution is finished.

## Drag and drop files

You can drag files and drop them into the main editor or the input/expected part of test cases.

## Shortcuts in the code editor

Besides the shortcuts in the menu, you can use the [Read-only Key Bindings](https://doc.qt.io/qt-5/qtextedit.html#read-only-key-bindings) and the [Editing Key Bindings](https://doc.qt.io/qt-5/qtextedit.html#editing-key-bindings). There are also some hidden shortcuts: <kbd>Tab</kbd> (when there's a selection) and <kbd>Shift+Tab</kbd> for indent and unindent, <kbd>Ctrl+Enter</kbd> and <kbd>Ctrl+Shift+Enter</kbd> for inserting line after and before, <kbd>Shift+Delete</kbd> for deleting the current line.

## Switching between tabs

You can use <kbd>Ctrl+Tab</kbd> and <kbd>Ctrl+Shift+Tab</kbd> to switch to the next/previous tab.

## The right-click menu of the tabs

You can right-click on the tabs to get a useful context menu, including:

-   Manage tabs: Close Others, Close to the Right, etc.
-   Duplicate tab. Very useful when you want to make experimental changes with the original code untouched or use different approaches to solve a problem without parsing it twice.
-   Set compile command/time limit for a single tab. If you are solving a special problem.
-   Reveal source/executable file. To easily find your code and the executable file.
-   Manage the problem URL: Open Problem in Browser, Set Codeforces URL, etc.

## Shortcuts in the preferences window

You can use <kbd>Ctlr+D</kbd>, <kbd>Ctrl+R</kbd> and <kbd>Ctrl+S</kbd> for "Default", "Reset" and "Apply" respectively.

You can use <kbd>Ctlr+Tab</kbd> and <kbd>Ctlr+Shift+Tab</kbd> to go through the preferences pages.

## Change the view mode

-   Editor mode: You can focus on your codes.
-   IO mode: You can investigate the outputs and errors.
-   Split mode: You can see both the codes and the test cases.

You can set a hotkey for switching view modes in [Preferences](../preferences/key-bindings/\_index.md).

## Launch CP Editor in the command line

CP Editor supports some command-line options, run `cpeditor --help` for more information.

On Windows, it's better to use UNIX-like shells like git bash.

In the command line, you can open a non-existing file as a tab by `cpeditor <path>` (and you can save to this path later), open all C++ files in a directory recursively by `cpeditor --cpp <directory>` or temporarily disable [Restore last session at startup](../preferences/actions/\_index.md#restore-last-session-at-startup) by `cpeditor --no-hot-exit`.

CP Editor normally closes when receiving SIGINT and SIGHUP, so if you start CP Editor in the command line, you can safely press <kbd>Ctrl+C</kbd> to quit.
