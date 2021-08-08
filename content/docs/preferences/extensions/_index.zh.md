---
title: "扩展"
weight: 50

---

## 代码格式化

### Clang Format

Clang Format可以用于格式化C/C++和Java代码。您可以按照点击`动作->格式化代码`或者按下快捷键<kbd>Ctrl+Shift+I </kbd>来格式化代码。如果你已经选中了一部分代码，那么便会只格式化选中部分（以及与选中代码同一行的部分代码）

**更多请参照**[安装 Clang Format](../../setup/_index.zh.md#安装-clang-format)

#### 程序

填入`clang-format`可执行文件的路径，如果已经被添加进入了环境变量`PATH`那么只需要填入`clang-format`

#### 参数

即传递给`clang-format`的参数。参数里**不应该包含**`-i`（覆盖原文件选项）

#### 风格

Clang Format格式化代码的风格。此处的内容应该和`.clang-format`文件的内容相同。

你可以通过阅读 [Clang-Format代码风格选项文档](https://clang.llvm.org/docs/ClangFormatStyleOptions.html)或者借助搜索其他参考资料，来学习怎么书写此处的内容

### YAPF

YAPF是用于格式化Python代码的工具。你可以点击`动作->格式化代码`或者按下快捷键<kbd>Ctrl+Shift+I</kbd>来格式化代码。如果你只选中了部分代码，那么便会只格式化选中所有行的代码。

**更多请参考** [安装YAPF](../../setup/_index.zh.md#安装-yapf).

#### 程序

YAPF的程序栏内容，可以是以下其一：

-   `yapf`: 此项需要你能够在命令行终端运行`yapf`。此处的参数可以为不填
-   一个Python的解释器，比如`python`,`python2`及其他。或者是解释器的路径。此处的参数应该填为`-m yapf`

注意[你需要使用Python 2格式化Python 2，或者使用Python 3格式化Python 3](https://github.com/google/yapf#python-versions)，你需要选择正确的解释器

#### 参数

即传递给YAPF程序的参数。如果**程序**填入的是Python解释器，那么此处的内容可以是`-m -yapf`。参数中**不应该包含**`-i`（覆盖原文件选项）

#### 风格

即YAPF格式化风格。此处的内容和`.style.yapf`文件内容相同。你可以通过执行`yapf --style-help`命令来检查所有可能存在的冲突。你可以通过阅读[文档](https://github.com/google/yapf#formatting-style)，或者借助搜索其他参考资料，来学习怎么书写此处的内容

## Language Server

**更多请参照** [安装Language Server](../../setup/_index.zh.md#setup-language-server).

### 借助Language Server使用Linting

使用language server来检查错误、警告、提示等等

你可以将鼠标悬停在斜线上，查看错误/警告的解释的工具提示

### 提示延迟

如果你在 _delay_ 填入的时间内没有打字，便更新 linting

### LSP可执行文件路径

The path to the language server program, or the name if it's in the `PATH` environment variable.

language server程序的路径，如果已经将程序添加进了系统环境变量`PATH`，那么只填入程序名即可

### Language Server参数

可以向language server添加的参数。你可以通过查阅language server的文档获取更多信息

例如，如果你想使用`python`作为language server程序，你可以在Python中使用`pyls`，并添加参数`-m pyls`

## Competitive Companion插件

**更多请参照** [安装Competitive Companion](../../setup/_index.zh.md#安装-competitive-companion).

### 打开新的标签页

打开一个新的标签页来解析问题

如果禁用此选项，则在解析问题时，当前选项卡中的测试用例将被新的测试用例替换。

### 连接端口

通常情况下，你不必修改此设置。 Competitive Companion 支持默认端口`10045`，因此如果您使用默认端口，则不必在 Competitive Companion 中添加自定义端口。 但是，如果出现端口冲突等情况，您可以在 Competitive Companion 中更改端口，并添加自定义端口。

### 使用 Competitive Companion 的时间限制

使用 Competitive Companion 解析的时间限制，作为对应选项卡的时间限制。

### 头部注释

解析问题时，在代码的头部添加头部注释。

#### 头部注释的内容

在头部注释的内容中，你可以使用以下占位符：

-   `${time}`: 题目被解析是的时间. 可以在 [头部注释时间格式设置](#time-format-for-the-head-comments)中进行时间格式的设置
-   `${json.X.Y}`: 由Competitive Companion提供的一个数据属性。你可以在[Competitive Companion文档](https://github.com/jmerle/competitive-companion#explanation)获得更多有关此属性的信息. 例如， `${json.name}` 是此问题的名字

#### 用于头部注释的时间格式

头部注释中的`${time}`占位符的格式。你可以通过阅读Qt文档了解可用的表达式：

-   [日期格式](https://doc.qt.io/qt-5/qdate.html#toString-3)
-   [时间](https://doc.qt.io/qt-5/qtime.html#toString)

## CF工具

你可以使用[CF Tool](https://github.com/xalanq/cf-tool/)来提交你的代码到[[Codeforces](https://codeforces.com)

提交题解时，你必须通过Codeforces的[Competitive Companion](#competitive-companion)解析一个问题，或者在它的右键菜单中手动设置一个问题标签的URL。

**更多请参照** [安装CF Tool](../../setup/_index.zh.md#安装-cf-tool).

### 路径

`c`可执行文件的路径。如果已经将程序添加进了系统环境变量`PATH`，那么只填入`cf`即可

### 消息框显示判定结果

当结果判定完成时，弹出一个消息框

此消息框是一个可以在CP Editor外部显示”系统消息“

这可是你能够在阅读/解决下一个问题时，得到前一个问题的提交结果
