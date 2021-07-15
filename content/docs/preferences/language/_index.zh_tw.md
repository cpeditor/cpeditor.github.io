---
title: "Language"
weight: 20
---

## General

### Default Language

The default programming language. It's used when opening a new tab and some other places.

## Commands

### C++ Commands

#### C++ Compile Command

The compilation command for C++. For example: `g++ -Wall`.

The command shouldn't contain the source file and the output file, CP Editor automatically adds them.

For compilation flags, please refer to the manual of the compiler. For example, you may want to add `-std=c++14` in the compile command to use C++14.

#### C++ Executable File Path

The path of the executable file, i.e. the argument of the `-o` option of the compiler.

If this path is relative, then it's relative to the source file (if it's an untitled tab, then relative to the [Temporary Directory](../general/\_index.zh_tw.md#temporary-directory)).

You can use some place holders for this setting:

-   `${filename}`: The complete name of the source file. If it's an untitled tab (i.e. an unsaved file), the complete file name is `sol.cpp`.
-   `${basename}`: `${filename}` without the suffix (i.e. without `.cpp`, etc.).
-   `${tmpdir}` or `${tempdir}`: The path of the [Temporary Directory](../general/\_index.zh_tw.md#temporary-directory).

For example, you can use `${tmpdir}/${basename}` if you don't want to keep the executable files, or `executables/${basename}` if you want to keep all executable files in the `executables` directory under the directory of the source file.

#### C++ Run Arguments

The arguments passed to the program when executing it. It's usually not needed in competitive programming.

#### C++ Compiler Output Codec

The text codec of the compiler output (warnings, errors, etc.), used to display the messages from the compiler in CP Editor.

It could be useful if you are using locales for your compiler and the compiler messages are not English.

### Java Commands

#### Java Compile Command

The compilation command for Java. For example: `javac`.

The command shouldn't contain the source file and the class path, CP Editor automatically adds them.

#### Java Class Path

The path to save the class files.

Please refer to [C++ Executable File Path](#c-executable-file-path) for the details.

#### Java Class Name

The name of the main class of your solution.

You can use an arbitrary name for your source file. When compiling, CP Editor automatically saves your code to a file with the class name.

#### Java Run Command

The command to run your solution. For example `java`.

This command shouldn't contain the class path or the class name, CP Editor automatically adds them.

#### Java Run Arguments

The arguments passed to the program when executing it. It's usually not needed in competitive programming.

#### Java Compiler Output Codec

Please refer to [C++ Compiler Output Codec](#c-compiler-output-codec).

### Python Commands

#### Python Run Command

The command to run a python code. It's usually one of `python`/`python2`/`python3`.

#### Python Run Arguments

The arguments passed to the program when executing it. It's usually not needed in competitive programming.

## Template

The code template is a file. When opening a new tab, the content of the template will be the initial content in the code editor.

### Template Path

The path to the code template.

### Template Cursor Position

The initial position of the text cursor when opening the template.

It contains three parts:

1.  [Regex](../general/\_index.zh_tw.md#regular-expression)
2.  Offset type: start or end.
3.  Offset characters: a number, could be negative.

It works as below:

1.  Find the first match of the regex in the template.
2.  If nothing matches the regex, the cursor will be at the end of the template.
3.  Otherwise, depending on the offset type, the cursor will be at the start/end of the first match, and then moved to the right by the number of the offset characters.

For example, if your template contains the following snippet:

```cpp
int main()
{
    
}
```

Then you can use `int main` as the regex, `end` as the offset type, and `9` as the offset characters. After that, when opening a new tab, the cursor will be at the first line in the `main` function.

## Snippets

### Manage Snippets

You can add/delete/rename snippets in "Language->XXX->XXX Snippet". You can use <kbd>Ctrl+N</kbd> for "Add", </kbd>Ctrl+W</kbd> for "Del" and </kbd>F2</kbd> for "Rename".

You can also import snippets from files or extract your snippets to files in the "More" menu on the snippet page.

### Use Snippets

You can insert a snippet into the code editor by either clicking "Actions->Use Snippets" or pressing </kbd>Ctrl+T</kbd>.

When choosing a snippet, you can enter the first few characters of the snippet name, and it will be auto-completed.

## Parentheses

You can set the parentheses settings for each language and each parenthesis.

Each setting has three states: enable, disable and default. If it's default, it uses the settings in the [Code Edit](../code-edit/\_index.zh_tw.md) page. Otherwise, it overwrites the settings in the [Code Edit](../code-edit/\_index.zh_tw.md) page.

### Auto Complete

See [Code Edit/Auto Complete Parentheses](../code-edit/\_index.zh_tw.md#auto-complete-parentheses).

### Auto Remove

See [Code Edit/Auto Remove Parentheses](../code-edit/\_index.zh_tw.md#auto-remove-parentheses).

### Tab Jump Out

See [Code Edit/Jump out of a parenthesis by pressing Tab](../code-edit/\_index.zh_tw.md#jump-out-of-a-parenthesis-by-pressing-tab).
