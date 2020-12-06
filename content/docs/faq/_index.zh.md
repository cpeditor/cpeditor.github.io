---
title: "FAQ"
linkTitle: "FAQ"
weight: 70
description: Frequently asked questions by CP Editor users
---

-   How to fetch testcases from the websites?
    -   You have to install [Competitive Companion](https://github.com/jmerle/competitive-companion) on your browser, and use it on the website while CP Editor is running. [Here is a youtube video](https://youtu.be/IVx1rSqYz7c) demonstrating this setup.
-   How to submit to CF inside CP Editor?
    -   You have to either parse the problem from Competitive Companion, or set the problem URL in the right-click menu of the tabs. Then you'll see the submit button.
-   I am using it on Codeforces but the submit button is not clickable.
    -   It's because CP Editor can't run the `cf` command. Please make sure it's in the PATH or set the path to it in the Preferences.
-   When I click the Submit button, I get some message saying template is required?
    -   `cf` tool requires you to configure it before you use it. Please run `cf config` to set the username & password and add a template.
-   How to enable error linting in the code editor?
    -   You need to install a [Language Server program](https://microsoft.github.io/language-server-protocol/implementors/servers/) and set the settings in Preferences -> Extensions -> Language Server. You can learn about more details [here](../setup/_index.zh.md#setup-language-server).
