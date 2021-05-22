---
title: "Extensions"
weight: 50
---

## Code Formatting

### Clang Format

Clang Format is used to format the C/C++ and Java codes. You can click Actions->Format Code or press the shortcut <kbd>Ctrl+Shift+I</kbd> to format the codes. If you have selected a part of the code, only the selection (and its necessary adjacent codes) will be formatted.

**See also** [Setup Clang Format](../../setup/\_index.md#setup-clang-format).

#### Program

The path to the `clang-format` executable, or simply `clang-format` if it's in the `PATH` environment variable.

#### Arguments

The arguments passed to `clang-format`. It should NOT contain `-i` (the in-place modification option).

#### Style

The Clang Format style. The content here is the same as the content of a `.clang-format` file.

You can read [Clang-Format Style Options documentation](https://clang.llvm.org/docs/ClangFormatStyleOptions.html) or search for other materials to learn how to write the styles.

### YAPF

YAPF is used to format the Python codes. You can click Actions->Format Code or press the shortcut <kbd>Ctrl+Shift+I</kbd> to format the codes. If you have selected a part of the code, only these lines will be formatted.

**See also** [Setup YAPF](../../setup/\_index.md#setup-yapf).

#### Program

The program of YAPF. It could be one of:

-   `yapf`: You should be able to run `yapf` in the command line. The arguments can be empty.
-   A Python interpreter, i.e. `python`, `python2`, etc. or the path to an interpreter. The arguments should be `-m yapf`.

Note that [you need to use Python 2 to format Python 2, use Python 3 to format Python 3](https://github.com/google/yapf#python-versions). So you may need to choose the correct Python interpreter.

#### Arguments

The arguments passed to the YAPF program. This should be `-m yapf` if the program is a Python interpreter. It should NOT contain `-i` (the in-place modification option).

#### Style

The YAPF Format style. The content here is the same as the content of a `.style.yapf` file. You can check all possible configurations by running `yapf --style-help`, read the [documentation](https://github.com/google/yapf#formatting-style) or search for other materials to learn how to write the styles.

## Language Server

**See also** [Setup Language Server](../../setup/\_index.md#setup-language-server).

### Use Linting with Language Server

Use language server to lint errors, warnings, hints, etc.

You can hover over the squiggles to see the tooltips for the explanation of the errors/warnings.

### Delay in Linting

Update linting if you haven't been typing for *delay* milliseconds.

### Path to LSP executable

The path to the language server program, or the name if it's in the `PATH` environment variable.

### Arguments for Language Server

Additional arguments for the language server program. See the documentation of the language server program you are using for more information.

For example, if you are using `pyls` for Python, you probably want to use `python` as the language server program, and use `-m pyls` as the arguments.

## Competitive Companion

**See also** [Setup Competitive Companion](../../setup/\_index.md#setup-competitive-companion).

### Open New Tabs

Open a new tab when a problem is parsed.

If this is disabled, when parsing a problem, the test cases in the current tab will be replaced by the new test cases.

### Connection Port

Usually, you don't have to modify this setting. The default port `10045` is supported by Competitive Companion, so if you are using the default port, you don't have to add custom ports in Competitive Companion. However, in case of port conflicts, etc., you can change the port and add custom ports in Competitive Companion.

### Use the time limit from Competitive Companion

Use the time limit parsed by Competitive Companion as the time limit of the corresponding tab.

### Head Comments

The head comments are added at the head of the code when parsing a problem.

#### Content of the head comments

The content of the head comments. You can use the following place holders:

-   `${time}`: The time when the problem was parsed. The time format can be set in [Time format for the head comments](#time-format-for-the-head-comments).
-   `${json.X.Y}`: An attribute of the data provided by Competitive Companion. You can read more about the attributes in [the documentation of Competitive Companion](https://github.com/jmerle/competitive-companion#explanation). For example, `${json.name}` is the name of the problem.

#### Time format for the head comments

The format of the `${time}` place holder in the head comments. You can read the Qt documentation for available expressions:

-   [Date Format](https://doc.qt.io/qt-5/qdate.html#toString-3)
-   [Time Format](https://doc.qt.io/qt-5/qtime.html#toString)

## CF Tool

You can use [CF Tool](https://github.com/xalanq/cf-tool/) to submit your solutions to [Codeforces](https://codeforces.com).

To submit a solution, you have to either parse a problem by [Competitive Companion](#competitive-companion) from Codeforces or manually set the problem URL of a tab in the context menu of it.

**See also** [Setup CF Tool](../../setup/\_index.md#setup-cf-tool).

### Path

The path to the `cf` executable file, or simply `cf` if it's in the `PATH` environment variable.

### Show toast messages for submission verdicts

Show a toast message when the verdict of a submission is determined.

A toast message is a "system notification", which is visible outside of CP Editor.

This is useful if you want to get the verdict of the previous problem when reading/solving the next problem.
