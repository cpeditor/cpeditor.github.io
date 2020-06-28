---
title: "Setup"
linkTitle: "Setup"
weight: 30
description: Setup CP Editor to prepare for using it
---

## Set Compile and Run Commands

You need to install `g++` / `python` / `java` depending on which language you are using. You need to add them to system PATH to have them found by the editor.

Then you can set the Compile and Run Commands in the preferences. For example, you can set C++ Commands in Preferences->Languages->C++->C++ Commands.

## Setup CF Tool

In order to submit Codeforces problems in CP Editor, you need to install [CF Tool](https://github.com/xalanq/cf-tool).

You can add it to your system PATH to use it directly, or you can set the path to it in Preferences->Extensions->CF Tool.

You need to configure the tool by the command `cf config` before using it.

## Install Competitive Companion

[Competitive Companion](https://github.com/jmerle/competitive-companion) is a web extension that can parse sample test cases from Online Judges.

After you install it, you can parse sample test cases just by a click, instead of copying them manually.

## Change UI Language

Now CP Editor is available in multiple languages, including English and Chinese.

You can change the UI language in Preferences->Appearance. Note that you need to restart the editor to apply the change.

## Setup Clang Format

The editor uses [Clang Format](http://releases.llvm.org/download.html) to format your C++ code.

You need to add it to your system PATH, or set the path to it at Preferences->Extensions->Clang Format.
