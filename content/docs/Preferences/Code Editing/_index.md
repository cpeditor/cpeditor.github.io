---
title: "Code Editing"
weight: 10
---

### Tab Width

The width (number of characters) of an indent. It is used when displaying the tab characters. It is also used in [Auto Indent](#auto-indent) and [Replace tabs by spaces](#replace-tabs-by-spaces).

### Auto Indent

1.  When you start a new line, the new line will have the same indent (i.e. white spaces at the beginning of the line) as the old line.
2.  If the old line ends with `{`, an extra indent (a tab character or [Tab Width](#tab-width) spaces, depending on whether [Replace tabs by spaces](#replace-tabs-by-spaces) is enabled) will be inserted at the beginning of the new line.

### Wrap Text

If a line is too long to fit in a single line, the line will be separated into several lines.

### Auto Complete Parentheses

Automatically add the right parenthesis when you type the left one. For example, when you type `(`, `)` will be added.

When the character next to the cursor is a right parenthesis and you type this parenthesis, instead of typing this parenthesis, the cursor will jump out of the parenthesis.

You can choose the parentheses to auto-complete in the [Parentheses](../language#parentheses) settings.

### Auto Remove Parentheses

When you delete a left parenthesis, if a corresponding right parenthesis is next to it, the right parenthesis will also be deleted.

You can choose the parentheses to auto-remove in the [Parentheses](../language#parentheses) settings.

### Jump out of a parenthesis by pressing Tab

When the cursor is next to a right parenthesis, you can use the Tab key to jump out of it. If [Auto Complete Parentheses](#auto-complete-parentheses) is enabled, this is an alternative of typing the right parenthesis.

You can choose the parentheses to jump out by Tab in the [Parentheses](../language#parentheses) settings.

### Replace tabs by spaces

When you insert an indent, insert spaces instead of a tab character. The number of spaces is equal to the [Tab Width](#tab-width).

Note that this won't replace the existing tab characters. In [Auto Indent](#auto-indent), the tab characters in the old line will remain in the new line (however, the new indent inserted after `{` will be spaces).

### Default cursor overwrites

There are two modes in text editing, Insert and Replace mode. Insert mode is common and most widely used, this is CP Editor and other editor’s default mode. In Replace mode, the cursor replaces the next character with the pressed character. If this option is enabled the cursor for newly opened tab will be in Replace mode. It can be toggled for individual tabs by pressig <kbd>INS</kbd> or <kbd>Insert</kbd> on your keyboard.

### Highlight Current Line

If enabled the current line number is highlighted from the rest of the lines. In Vim mode, current line is never highlighted.

### Enable Vim emulation

If enabled code editor uses vim emulation. In Vim emulation, Control Key such as <kbd>Ctrl+N</kbd> will not be intercepted by CP Editor but by Code Editor. We provide some custom commands that can perform most of these tasks. You can check a list of all supported custom commands and its usage [here](../../general/vim-commands/#custom-vim-commands)

### Vim Configuration

The configuration to use in vim mode. The list of all supported vim commands are listed [here](../../general/vim-commands/#vim-commands)