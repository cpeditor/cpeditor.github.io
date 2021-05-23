---
title: "扩展"
weight: 50
---

## 代码格式化

### Clang Format

Clang Format 是格式化 C/C++ 和 Java 代码的工具。你可以点击 动作->格式化代码 或按快捷键 <kbd>Ctrl+Shift+I</kbd> 来格式化代码。如果你选择了代码的一部分，只有被选择的部分（以及必要的相邻部分）会被格式化。

**参见** [安装 Clang Format](../../setup/\_index.zh.md#安装-clang-format)。

#### 程序

`clang-format` 可执行文件的路径。如果它已经在 `PATH` 环境变量中，只需填写 `clang-format` 即可。

#### 参数

向 `clang-format` 传递的参数。它不应包含 `-i`（就地修改选项）。

#### 风格

Clang Format 格式化代码的风格。这里的内容和 `.clang-format` 的内容一致。

你可以查看 [Clang-Format Style Options](https://clang.llvm.org/docs/ClangFormatStyleOptions.html) 或其他资料以获取关于代码格式化风格的相关信息。

### YAPF

YAPF 是格式化 Python 代码的工具。你可以点击 动作->格式化代码 或按快捷键 <kbd>Ctrl+Shift+I</kbd> 来格式化代码。如果你选择了代码的一部分，只有被选择的行会被格式化。

**参见** [安装 YAPF](../../setup/\_index.zh.md#安装-yapf)。

#### 程序

YAPF 的程序，它可以是如下两项之一：

-   `yapf`：需要能在命令行下执行 `yapf` 命令。参数可以为空。
-   Python 解释器的程序名，如 `python`，`python2` 等。参数应该为 `-m yapf`。

注意，你需要 [使用 Python 2 来格式化 Python 2 代码，使用 Python 3 来格式化 Python 3 代码](https://github.com/google/yapf#python-versions)。因此你需要选择正确的 Python 解释器程序。

#### 参数

传递给 YAPF 程序的参数。如果在程序一栏里填写的是 Python 解释器，这里的参数应该是 `-m yapf`。参数中不应包含 `-i`（就地修改选项）。

#### 风格

YAPF 格式化代码的风格，这里的内容和 `.style.yapf` 的内容一致。你可以运行 `yapf --style-help`，查看 [文档](https://github.com/google/yapf#formatting-style) 或其他资料以获取关于代码格式化风格的相关信息。

## Language Server

**参见** [安装 Language Server](../../setup/\_index.zh.md#安装-language-server).

### 利用 Language Server 获取提示信息

使用 Language Server 以获取错误，警告，提示等信息。

你可以将鼠标移动到提示错误的下划线上以获取错误或警告的相关信息。

### 提示延迟

若距离最近一次修改的时间达到了 *延迟* 毫秒，更新提示信息。

### Language Server 可执行文件路径

Language Server 可执行文件的路径。如果它已经在 `PATH` 环境变量中，只需填写相应的可执行文件的文件名即可。

### Language Server 参数

为 Language Server 程序传递的额外参数。你可以阅读相应的 Language Server 程序的文档以了解更多信息。

例如，如果你使用 `pyls` 作为 Python 的 Language Server 程序，你可以填写 `python` 作为 Language Server 程序，`-m pyls` 作为参数。

## Competitive Companion

**参见** [安装 Competitive Companion](../../setup/\_index.zh.md#安装-competitive-companion).

### 打开新标签页

当一个问题被解析时，打开一个新标签页。

如果该选项被禁用，当一个问题被解析时，当前页面的测试用例将会被新的测试用例覆盖。

### 连接端口

从 Competitive Companion 接收数据使用的端口。

默认情况下该端口为 10045，在大多数情况下不用更改。在遇到端口冲突等情况时，你可以在 Competitive Companion 里设置自定义端口，并在这里更改数据接收端口。

### 使用从 Competitive Companion 处获取的时间限制

在解析一道题目后，为对应的标签页使用从 Competitive Companion 获取的时间限制。

### 头部注释

在获取一道题目后在代码开头添加的注释。

#### 头部注释的内容

你可以在头部注释中使用如下占位符：

-   `${time}`：题目被解析的时间，相应的时间格式可以在 [头部注释的时间格式](#头部注释的时间格式) 中设置。
-   `${json.X.Y}`：由 Competitive Companion 提供的数据的一个属性。你可以在 [Competitive Companion 的文档](https://github.com/jmerle/competitive-companion#explanation) 中获得更多信息。例如，`${json.name}` 代表题目名。

#### 头部注释的时间格式

`${time}` 占位符对应的时间的格式。你可以阅读如下 Qt 文档以获得更多信息：

-   [Date Format](https://doc.qt.io/qt-5/qdate.html#toString-3)
-   [Time Format](https://doc.qt.io/qt-5/qtime.html#toString)

## CF Tool

你可以使用 [CF Tool](https://github.com/xalanq/cf-tool/) 向 [Codeforces](https://codeforces.com) 提交你的代码。

为了提交你的代码，你需要使用 [Competitive Companion](#competitive-companion) 解析题目，或是手动设置标签页的题目链接。

**参见** [安装 CF Tool](../../setup/\_index.zh.md#安装-cf-tool).

### 路径

CF Tool 可执行文件的路径。如果它已经在 `PATH` 环境变量中，只需填写 `cf` 即可。

### 为评测结果显示气泡信息

在收到一次提交的结果后，显示一条气泡信息。

气泡信息是系统通知，在 CP Editor 外仍然可见。在你忙于解决下一个问题时，气泡信息可以让你得知前一个问题的解决情况。
