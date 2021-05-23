---
title: "File Path"
weight: 60
---

## Testcases

### Input File Save Path

### Answer File Save Path

The path where the test cases are [saved](../actions/\_index.ru.md#save-testcases-on-save). If it is a relative path, it is relative to the source file.

You can use the following place holders:

-   `${filename}`: the complete filename
-   `${basename}`: the base file name without the suffix
-   `${0-index}`: the index of the test case started from 0
-   `${1-index}`: the index of the test case started from 1

For example, a test case is the 3-rd test case of the source file `/a/b/c.cpp`, the place holders are:

-   `${filename}`: `c.cpp`
-   `${basename}`: `c`
-   `${0-index}`: `2`
-   `${1-index}`: `3`

If the path is `testcases/${basename}-${1-index}.in`, the input of this test case will be saved in `/a/b/testcases/c-3.in`.

### Testcases Matching Rules

The rules used to match test cases when loading pairs of test cases.

Each rule is a pair of [regular expression patterns](../general/\_index.ru.md#regular-expression). The first regex matches the whole input file name, and the second pattern is a replacement pattern which is the name of the answer file.

For example, you can use `(.+)\.in` and `\1.out` to match `test-1.in` and `test-1.out`, or use `(.+)\.in\.(\d+)` and `\1.ans.\2` to match `test.in.3` and `test.ans.3`.

When loading pairs of test cases, each rule which matches an input file will be used to try to find the corresponding answer file to the input file.

## Problem URL

### Default File Path For Problem URLs

The default path when choosing where to save an untitled tab with problem URL.

Each rule is a pair of [regular expression patterns](../general/\_index.ru.md#regular-expression). The first regex matches a part of the problem URL, and the second pattern is a replacement pattern which is the default save path.

When saving a file with a problem URL, if the problem URL matches at least one regex in the rules, the default save path will be the replacement of the first matching regex.

Here's an example of a rule:

The problem URL regex: `codeforces.com/contest/([1-9]\d*)/problem/([A-Z][1-9]?)`

The file path: `/home/username/Codeforces/\1/\2`

## Default Paths

The default path used when the user is asked for a file path.

There are several actions, different actions can use different default paths.

The user can set multiple default paths, each default path has a name. A default path can be used as a place holder in the default path of an action. When the user chooses a path for an action, several default paths can be set to this path.

For example:

-   The default path for the action "Save File" is `${file}`, and "Save File" changes `file` and `testcase`.
-   The default path for the action "Load Single Test Case" is `${testcase}`, and "Load Single Test Case" only changes `testcase`.
-   At the beginning, `file` is `/a/b` and `testcase` is `/a/c`.

1.  You are asked to choose the path for "Load Single Test Case". The default path is `/a/c`, and you choose `/a/d` as the path. Now `file` is still `/a/b`, but `testcase` is changed to `/a/d`.
2.  You are asked to choose the path for "Save File". The default path is `/a/b`, and you choose `/a/e` as the path. Now both `file` and `testcase` are `/a/e`.
3.  You are asked to choose the path for "Load Single Test Case". The default path is `/a/e` because `testcase` was modified by choosing `/a/e` for "Save File".

In the preferences window, the default paths changed by an action is a comma-separated list.
