---
title: "Advanced"
weight: 80
---

## Update

### Check for updates on startup

When CP Editor starts, checks whether there are new versions of CP Editor.

If there are new versions, a pop-up window will ask you whether to update or not.

### Use the beta version

When checking for updates, check for beta versions. The beta versions usually have more features and improvements, but they are not as stable as the stable versions.

## Limits

### Default Time Limit

The default time limit when executing programs.

The program will be killed if it doesn't terminate within the time limit.

### Output Length Limit

The maximum number of characters in the output of the program.

The program will be killed if either of its stdout or stderr is too long.

### Output Display Length Limit

The maximum number of characters to be displayed for the output of the program.

If the output is too long, it will be elided.

### Message Length Limit

The maximum number of characters in each message in the top-right corner of the main window.

The message will be elided if it's too long.

### HTML Diff Viewer Length Limit

The maximum number of characters in the HTML Diff Viewer.

The Diff Viewer will fall back to plain text if either of the output or the expected output is too long.

### Open File Length Limit

The maximum number of characters in a source file to open.

A source file won't be opened if it's too long.

### Display Test Case Length Limit

The maximum number of characters in a test case to be displayed.

A test case will be elided and read-only if it's too long.

## Network Proxy

The proxy server used to check for updates.
