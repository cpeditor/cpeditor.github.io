---
title: "FAQ"
linkTitle: "FAQ"
weight: 70
description: CP Editor 用户常问的一些问题
---

-  如何从网站上抓取测试数据？
    -  你需要在浏览器上安装 [Competitive Companion](https://github.com/jmerle/competitive-companion)，并在 CP Editor 运行时使用它。[这个 youtube 视频](https://youtu.be/IVx1rSqYz7c) 演示了安装过程。
-  如何在 CP Editor 里将代码提交到 CF？
    -  你需要使用 Competitive Companion 抓取问题，或是右击标签后在菜单中设置问题链接。之后你就可以看到提交按钮了。
-  我已经完成了上面的设置，但提交按钮不能点击。
    -  这是因为 CP Editor 无法执行 `cf` 命令。请确保它在 PATH 环境变量中，或是在设置中设置了它的路径。
-  当我点击提交按钮时，提示需要模板。
    -  因为 cf tool 需要在使用前进行配置。请在终端下执行 `cf config` 以完成用户名和密码设置，并添加模板。
-  如何在代码编辑框中启动错误提示？
    -  你需要安装 [Language Server 程序](https://microsoft.github.io/language-server-protocol/implementors/servers/) 并在 [设置->扩展->Language Server](../preferences/extensions/_index.zh.md#language-server) 中完成有关配置。更多细节详见 [初始化](../setup/_index.zh.md) 页面。
