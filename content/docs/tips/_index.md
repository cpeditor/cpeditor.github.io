---
title: "Tips"
weight: 50
description: Some tips that may help
---

## Shortcuts in the Preferences Window

You can use <kbd>Ctlr+D</kbd>, <kbd>Ctrl+R</kbd> and <kbd>Ctrl+S</kbd> for "Default", "Reset" and "Apply" respectively.

You can use <kbd>Ctlr+Tab</kbd> and <kbd>Ctlr+Shift+Tab</kbd> to go through the preferences pages.

## Editor Shortcuts

Besides the shortcuts in the menu, you can use the [Read-only Key Bindings](https://doc.qt.io/qt-5/qtextedit.html#read-only-key-bindings) and the [Editing Key Bindings](https://doc.qt.io/qt-5/qtextedit.html#editing-key-bindings). There are also some hidden shortcuts: <kbd>Tab</kbd> (when there's a selection) and <kbd>Shift+Tab</kbd> for indent and unindent, <kbd>Ctrl+Enter</kbd> and <kbd>Ctrl+Shift+Enter</kbd> for inserting line after and before, <kbd>Shift+Delete</kbd> for deleting the current line.

## Vim Emulation

You can enable vim emulation in code editor. Most [basic vim commands](../preferences/general/_index.md#vim-commands) and some [custom vim commands](../preferences/general/_index.md#custom-vim-commands) to perform various actions are supported. Many code editor settings like Tab width, Indentation, Current Line Highlight etc are disabled when using vim mode, you have to customize them from [Vim Configuration](../preferences/code-editing/_index.md#vim-configuration).

You can switch to next or previous tab using `tabn` and `tabp` respectively.

## Drag and Drop

You can drag files and drop them into the main editor or the input/expected part of test cases.

## Tabs

You can use <kbd>Ctrl+Tab</kbd> and <kbd>Ctrl+Shift+Tab</kbd> to switch to the next/previous tab.

You can right-click on the tabs to get a useful context menu. The content of the menu is based on whether this tab is untitled or not, has problem URL or not, etc.

## Test Cases

Testlib checkers are compiled when changing the checker or changing the preferences, so you may have to wait for it after the execution is finished.

You can load test cases from files, edit testcases in bigger windows and save a test case in a file in the right-click menu of the test cases.

You can click the verdict to open the diff viewer.

## View mode

The view mode is helpful to focus on your codes, investigate the outputs and errors, or make the editor narrower so that you can split your screen into two parts.

You can set a hotkey for switching view modes in Preferences.

## Launch CP Editor in the command line

CP Editor supports some command-line options, run `cpeditor --help` for more information.

On Windows, it's better to use UNIX-like shells like git bash.

In the command line, you can open a non-existing file as a tab by `cpeditor <path>` (and you can save to this path later), open all C++ files in a directory recursively by `cpeditor --cpp <directory>` or temporarily disable [Restore last session at startup](../preferences/actions/_index.md#restore-last-session-at-startup) by `cpeditor --no-hot-exit`.

CP Editor normally closes when receiving SIGINT and SIGHUP, so if you start CP Editor in the command line, you can safely press <kbd>Ctrl+C</kbd> to quit.
