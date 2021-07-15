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

You can find many online regex courses, for example <https://regexone.com/>.

In CP Editor, you can use `\1`, `\2`, etc. for the content of the first/second capture group in the replacement patterns.
