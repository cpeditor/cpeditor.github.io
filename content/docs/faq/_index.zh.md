---
title: "FAQ"
linkTitle: "FAQ"
weight: 70
translated: true
description: CP Editor 用户常问的一些问题
---

### 如何从网站上抓取测试数据？

你需要在浏览器上安装 [Competitive Companion](https://github.com/jmerle/competitive-companion)，并在 CP Editor 运行时使用它。[这个 youtube 视频](https://youtu.be/IVx1rSqYz7c) 演示了安装过程。

### 如何在 CP Editor 里将代码提交到 CF？

你需要使用 Competitive Companion 获取题目，或是右击标签栏后在右键菜单中设置题目链接。之后你就可以看到提交按钮了。

### 我不能点击提交按钮。

这是因为 CP Editor 无法执行 `cf` 命令。请确保它在 PATH 环境变量中，或是在设置中设置了它的路径。

### 当我点击提交按钮时，提示“template is required”。

CF Tool 需要在使用前进行配置。请在终端中执行 `cf config` 以完成用户名和密码设置，并添加模板。

### 如何在代码编辑框中启用错误提示？

你需要安装 [Language Server 程序](https://microsoft.github.io/language-server-protocol/implementors/servers/) 并在 [设置->扩展->Language Server](../preferences/extensions/\_index.zh.md#language-server) 中完成有关配置。更多细节详见 [初始化](../setup/\_index.zh.md) 页面。

### 我的代码每次首次运行时都超时。

这很可能是因为你的杀毒软件在扫描你的程序。一个可能的解决方法是，[设置可执行文件的输出目录](../preferences/language/\_index.zh.md#c-可执行文件路径)（例如，你可以将其设置为 `D:/cpeditor-executables/${basename}`），然后将这个目录（在上面的例子中，即 `D:/cpeditor-executables`）加到杀毒软件的白名单中。
