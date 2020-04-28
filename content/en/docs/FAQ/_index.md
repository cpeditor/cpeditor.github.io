
---
title: "FAQ"
linkTitle: "FAQ"
weight: 70
description: Frequently asked questions by CP Editor users
---

- I am using Java and the editor can't run my codes.
   - You have to use a **non-public** class named **a** for your solution.
- I get **DLL Missing error** when launching the application?
   - Please download  [Microsoft Visual C++ Redistributable for Visual Studio 2015, 2017 and 2019](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads).
- How to use whole-application dark theme?
   - Now you can use whole-application dark theme on KDE, macOS and Windows 10. You need to set the system theme to dark theme, then CP Editor will use dark theme, too. However, on Windows 10, if you use the dark theme, you may need to restart the application after changing the theme of the code editor.
- How to fetch testcases from the websites?
   - You have to install [Competitive Companion](https://github.com/jmerle/competitive-companion) on your browser, and use it on the website while CP Editor is running.
- How to submit to CF inside the editor?
   - You have to either parse the problem from Competitive Companion, or set the problem URL in the right-click menu of the tabs. Then you'll see the submit button.
- I am using it on Codeforces but the submit button is not clickable.
   - It's because the editor can't run the `cf` command. Please make sure it's in the PATH or set the path to it in the Preferences.
- When I click the Submit button, I get some message saying template is required?
   - `cf` tool requires you to configure it before you use it. Please run `cf config` to set the username & password and add a template.
- I got an invalid payload when parsing sample testcases?
   - Please try restarting the browser and the editor. It's known that there are few people always fail on this even after restarting, and Firefox is more stable than Google Chrome. We're really sorry if it always fails, you can change a browser as for now, we will try our best to investigate it.
