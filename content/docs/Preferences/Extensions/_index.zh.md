---
title: "Extensions"
weight: 50
---

## Clang Format

Clang Format is used to format the C++ codes. You can click Actions->Format Code or press the shortcut <kbd>Ctrl+Shift+I</kbd> to format the codes. If you have selected a part of the code, only the selection (and its necessary adjacent codes) will be formatted.

**See also** [Setup Clang Format](../../Setup/_index.zh.md#setup-clang-format).

### Path

The path to the `clang-format` executable, or simply `clang-format` if it's in the `PATH` environment variable.

### Style

The Clang Format style. The content here is the same as the content of a `.clang-format` file.

You can read [Clang-Format Style Options documentation](https://clang.llvm.org/docs/ClangFormatStyleOptions.html) or search for other materials to learn how to write the styles.

## Language Server

**See also** [Setup Language Server](../../Setup/_index.zh.md#setup-language-server).

### Use Linting with Language Server

Use language server to lint errors, warnings, hints, etc.

You can hover over the squiggles to see the tooltips for the explaination of the errors/warnings.

### Delay in Linting

Update linting if you haven't been typing for _delay_ milliseconds.

### Path to LSP executable

The path to the language server program, or the name if it's in the `PATH` environment variable.

### Arguments for Language Server

Additional arguments for the language server program. See the documentation of the language server program you are using for more information.

For example, if you are using `pyls` for Python, you probably want to use `python` as the language server program, and use `-m pyls` as the arguments.

## Competitive Companion

**See also** [Setup Competitive Companion](../../Setup/_index.zh.md#setup-competitive-companion).

### Open New Tabs

Open a new tab when a problem is parsed.

If this is disabled, when parsing a problem, the test cases in the current tab will be replaced by the new test cases.

### Connection Port

Usually, you don't have to modify this setting. The default port `10045` is supported by Competitive Companion, so if you are using the default port, you don't have to add custom ports in Competitive Companion. However, in case of port conflicts, etc., you can change the port and add custom ports in Competitive Companion.

### Use the time limit from Competitive Companion

Use the time limit parsed by Competitive Companion as the time limit of the corresponding tab.

### Head Comments

The head comments are added at the head of the code when parsing a problem.

#### Content

The content of the head comments. You can use the following place holders:

-   `${time}`: The time when the problem was parsed. The time format can be set in [Time format for the head comments](#time-format).
-   `${json.X.Y}`: An attribute of the data provided by Competitive Companion. You can read more about the attributes in [the documentation of Competitive Companion](https://github.com/jmerle/competitive-companion#explanation). For example, `${json.name}` is the name of the problem.

#### Time Format

The format of the `${time}` place holder in the head comments. You can read the Qt documentation for available expressions:

-   [Date Format](https://doc.qt.io/qt-5/qdate.html#toString)
-   [Time Format](https://doc.qt.io/qt-5/qtime.html#toString)

## CF Tool

You can use [CF Tool](https://github.com/xalanq/cf-tool/) to submit your solutions to [Codeforces](https://codeforces.com).

To submit a solution, you have to either parse a problem by [Competitive Companion](#competitive-companion) from Codeforces, or manually set the problem URL of a tab in the context menu of it.

**See also** [Setup CF Tool](../../Setup/_index.zh.md#setup-cf-tool).

### Path

The path to the `cf` executable file, or simply `cf` if it's in the `PATH` environment variable.

### Show toast messages for submission verdicts

Show a toast message when the verdict of a submission is determined.

A toast message is a "system notification", which is visible outside of CP Editor.

This is useful if you want to get the verdict of the previous problem when reading/solving the next problem.
