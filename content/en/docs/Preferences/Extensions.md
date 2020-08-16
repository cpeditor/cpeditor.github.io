---
title: "Extensions"
weight: 50
---

## Clang Format

Clang Format is used to format the C++ codes. You can click Actions->Format Code or press the shortcut `Ctrl+Shift+I` to format the codes. If you have selected a part of the code, only the selection (and its necessary adjacent codes) will be formatted.

### Path

The path to the `clang-format` executable, or simply `clang-format` if it's in the `PATH` environment variable.

### Style

The Clang Format style. The content here is the same as the content of a `.clang-format` file.

You can read [Clang-Format Style Options documentation](https://clang.llvm.org/docs/ClangFormatStyleOptions.html) or search for other materials to learn how to write the styles.

## Language Server

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

### Language Server Program Suggestions

Though you can use any language server program you like, here are some suggestions if you are not sure which to use.

#### C++ Server

If you have installed LLVM, you already have `clangd`, because it comes with the clang compiler. If you haven't, please install [LLVM](https://releases.llvm.org/download.html) prebuild binaries for Windows. On Linux and mac you can install it from your package manager. You need to set the start command of `clangd` in Preferences -> Extensions -> Language Server -> C++ Server -> Path, where the command can be the path to the executable file or just `clangd` if it's in the PATH.

#### Java Server

You need to have `java` installed and added to `PATH`. Download [Eclipse.JDT.ls](http://download.eclipse.org/jdtls/snapshots/jdt-language-server-latest.tar.gz), extract it to any location (in a new directory), We call the path to that directory `<INSTALL_PATH>` (Something like `C://Users/Myname/Desktop/EclipseJDT.ls/`). In CP Editor, go to Preferences -> Extensions -> Language Server -> Java Server. Set "Path" to `java` and set "Arguments" to something like `-jar $INSTALL_PATH/plugins/org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar -configuration <INSTALL_PATH>/config_(linux|win|mac)`. For example, on Windows, the arguments should be something like `-configuration C://Users/Myname/Desktop/Eclipse.JDT.ls/config_win`.

The full name of the jar file above, `org.eclipse.equinox.launcher_1.5.200.v20180922-1751.jar`, may change incrementally as the project version of JDT changes. If java complains about "jar not found", then look for the latest version of the `org.eclipse.equinox.launcher_*` jar in `<INSTALL_PATH>/plugins` and replace it in the command after `-jar`.

#### Python Server

You need to have `python` and `pip` installed and added to `PATH`. Install `python-language-server` pip module by running `pip install 'python-language-server[all]'`. After the installation is done, open CP Editor settings, go to Preferences -> Extensions -> Language Server -> Python Server. Set "Path" to `python` and set "Arguments" to `-m pyls`. Save the changes and you will have linting for Python.

## Competitive Companion

### Setup Competitive Companion

[Competitive Companion](https://github.com/jmerle/competitive-companion) is used to parse problems/contests from online judges.

You can install it from the addon/extension markets:

-   [Chrome Extension](https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl)
-   [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/competitive-companion/)

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

### Path

The path to the `cf` executable file, or simply `cf` if it's in the `PATH` environment variable.

### Show toast messages for submission verdicts

Show a toast message when the verdict of a submission is determined.

A toast message is a "system notification", which is visible outside of CP Editor.

This is useful if you want to get the verdict of the previous problem when reading/solving the next problem.
