---
title: "General"
weight: 1000
---

### Temporary Directory

In CP Editor, each file has a temporary directory, it can be used to save the executable files, etc.

You can treat it as a place to safely save something for each tab (i.e. each file) without affecting other files on your disk, and it will be automatically deleted when the tab is closed.

On Linux, it's `/tmp/CP Editor-XXXXXX`. On Windows, it's `C:\Users\<username>\AppData\Local\Temp\CP Editor-XXXXXX`.

### Regular Expression

The [regular expression](https://en.wikipedia.org/wiki/Regular_expression) is used to match patterns in a string and find and replace substrings.

You can find many online regex cources, for example: <https://regexone.com/>.

In CP Editor, you can use `\1`, `\2`, etc. for the content of the first/second capture group in the replacement patterns.

### Custom vim commands

In this section we present a list of all custom vim commands that are supported to perform different operation in CP Editor.

|    Command   | Shorthand |                                                        Description                                                        |                         Usage                         |
| :----------: | :-------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------: |
|     `new`    |   `new`   |                  Opens a new tab, if no langauge is specified, a tab in default editor langauge will open                 |                   `new cpp` or `new`                  |
|    `open`    |   `opn`   |  Opens a new file, Only C++/Java/Python files will be opened. The opened tab will use the language as per file extension. | `open /absolute/path/of/file.cpp` or `opn ~/cf/a.cpp` |
|   `compile`  |   `cmp`   |                             Compiles the code, It is like clicking "Compile" button in a tab.                             |                   `compile` or `cmp`                  |
|    `crun`    |   `crn`   |                          Compiles and run, It is like clicking "Compile and Run" button in a tab.                         |                    `crun` or `crn`                    |
|     `run`    |   `run`   | Run, if no argument is provided all testcases are ran, otherwise nth testcase is ran. Counting includes hidden testcases. |                    `run` or `run 2`                   |
|    `drun`    |   `drn`   |                                Detached run, It is same as clicking "Detached Run" in menu.                               |                    `drun` or `drn`                    |
|   `killall`  |   `kap`   |                              Kill all process, It is same as clicking "Kill Process" in menu                              |                   `killall` or `kap`                  |
|   `format`   |   `fmt`   |                                 Format Code, It is same as clicking "Format Code" in menu                                 |                   `format` or `fmt`                   |
|   `snippet`  |   `snp`   |                             Open snippet dialog, It is same as clicking "Use Snippets" in menu                            |                   `snippet` or `snp`                  |
|    `vmode`   |   `vmd`   |                      View mode, Changes the view mode. It can only toggle to "edit" and "split" mode                      |              `vmode edit` or `vmd split`              |
| `preference` |   `prf`   |                                  Preferences, It is same as clicking "Preference" in menu                                 |                 `preference` or `prf`                 |
|    `lang`    |   `lng`   |                                 Language, It can be used to change the language of a tab.                                 |                `lang cpp` or `lng java`               |
|    `clear`   |   `clr`   |                                                 Clear Message logger text                                                 |                    `clear` or `clr`                   |
|    `exit`    |   `ext`   |                                        Exit, It is same as pressing "Quit" in menu.                                       |                    `exit` or `ext`                    |
