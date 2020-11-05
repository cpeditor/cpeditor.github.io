---
title: "Vim Commands"
weight: 1000
description: List of supported vim commands in Vim Emulation
---

### Vim Commands

#### Supported Features

Most of supported commands can be followed by motion command or executed in visual mode, work with registers or can be prefixed with number of repetitions.

Here is list of emulated commands with description where it can diverge from Vim in functionality.

#### Modes

-   normal
-   insert and replace
-   visual
-   command line (`:`)

#### Normal and Visual Modes

-   basic movement -- `h`/`j`/`k`/`l`, `<C-U>`, `<C-D>`, `<C-F>`, `<C-B>`, `gg`, `G`, `0`, `^`, `$` etc.
-   word movement -- `w`, `e`, `b` etc.
-   "inner/a" movement -- `ciw`, `3daw`, `ya{` etc.
-   `f`, `t` movement
-   `[`, `]` movement
-   `{`, `}` -- paragraph movement
-   delete/change/yank/paste with register
-   undo/redo
-   `<C-A>`, `<C-X>` -- increase or decrease number in decimal/octal/hexadecimal format (e.g. `128<C-A>` on or before "0x0ff" changes it to "0x17f")
-   `.` -- repeat last change
-   `/search`, `?search`, `*`, `#`, `n`, `N` -- most of regular expression syntax used in Vim except `\<` and `\>` just is the same as `\b` in QRegExp
-   `@`, `q` (macro recording, execution) -- special keys are saved as `<S-Left>`
-   marks
-   `gv` -- last visual selection; can differ if text is edited around it
-   indentation -- `=`, `<<`, `>>` etc. with movement, count and in visual mode
-   "to upper/lower" -- `~`, `gU`, `gu` etc.
-   `i`, `a`, `o`, `I`, `A`, `O` -- enter insert mode
-   scroll window -- `zt`, `zb`, `zz` etc.
-   wrap line movement -- `gj`, `gk`, `g0`, `g^`, `g$`

#### Command Line Mode

-   `:map`, `:unmap`, `:inoremap` etc.
-   `:source` -- very basic line-by-line sourcing of vimrc files
-   `:substitute` -- substitute expression in range
-   `:'<,'>!cmd` -- filter through an external command (e.g. sort lines in file with `:%!sort`)
-   `:.!cmd` -- insert standard output of an external command
-   `:read`
-   `:yank`, `:delete`, `:change`
-   `:move`, `:join`
-   `:20` -- go to address
-   `:history`
-   `:registers`, `:display`
-   `:nohlsearch`
-   `:undo`, `:redo`
-   `:normal`
-   `:<`, `:>`

#### Insert Mode

-   `<C-O>` -- execute single command and return to insert mode
-   `<C-V>` -- insert raw character
-   `<insert>` -- toggle replace mode

#### Options (:set ...)

-   `autoindent`
-   `clipboard`
-   `backspace`
-   `expandtab`
-   `hlsearch`
-   `ignorecase`
-   `incsearch`
-   `indent`
-   `iskeyword`
-   `scrolloff`
-   `shiftwidth`
-   `showcmd`
-   `smartcase`
-   `smartindent`
-   `smarttab`
-   `startofline`
-   `tabstop`
-   `tildeop`
-   `wrapscan`

#### Example Vimrc

```vimrc
" highlight matched
set hlsearch
" case insensitive search
set ignorecase
set smartcase
" search while typing
set incsearch
" wrap-around when searching
set wrapscan
" show pressed keys in lower right corner
set showcmd
" tab -> spaces
set expandtab
set tabstop=4
set shiftwidth=4
" keep a 5 line buffer for the cursor from top/bottom of window
set scrolloff=5
" X11 clipboard
set clipboard=unnamed
" use ~ with movement
set tildeop

" mappings
nnoremap ; :
inoremap jj <Esc>

" clear highlighted search term on space
noremap <silent> <Space> :nohls<CR>

" reselect visual block after indent
vnoremap < <gv
vnoremap > >gv

" MOVE LINE/BLOCK
nnoremap <C-S-J> :m+<CR>==
nnoremap <C-S-K> :m-2<CR>==
inoremap <C-S-J> <Esc>:m+<CR>==gi
inoremap <C-S-K> <Esc>:m-2<CR>==gi
vnoremap <C-S-J> :m'>+<CR>gv=gv
vnoremap <C-S-K> :m-2<CR>gv=gv
```

### Custom vim commands

In this section we present a list of all custom vim commands that are supported to perform different operation in CP Editor.

|    Command   | Shorthand |                                                        Description                                                        |            Usage            |
| :----------: | :-------: | :-----------------------------------------------------------------------------------------------------------------------: | :-------------------------: |
|     `new`    |   `new`   |                  Opens a new tab, if no langauge is specified, a tab in default editor langauge will open                 |      `new cpp` or `new`     |
|    `next`    |   `nxt`   |                      Switch to next tab in the editor. Returns to first tab if there is no next tab.                      |       `next` or `nxt`       |
|  `previous`  |   `prv`   |                     Switch to last tab in the editor. Returns to last tab if there is no previous tab.                    |     `previous` or `prv`     |
|    `open`    |   `opn`   |     Opens a new file, Only C++/Java/Python files will be opened. Without arguments it is same as open in Action menu.     |  `open` or `opn ~/cf/a.cpp` |
|   `compile`  |   `cmp`   |                             Compiles the code, It is like clicking "Compile" button in a tab.                             |      `compile` or `cmp`     |
|    `crun`    |   `crn`   |                          Compiles and run, It is like clicking "Compile and Run" button in a tab.                         |       `crun` or `crn`       |
|     `run`    |   `run`   | Run, if no argument is provided all testcases are ran, otherwise nth testcase is ran. Counting includes hidden testcases. |       `run` or `run 2`      |
|    `drun`    |   `drn`   |                                Detached run, It is same as clicking "Detached Run" in menu.                               |       `drun` or `drn`       |
|   `killall`  |   `kap`   |                              Kill all process, It is same as clicking "Kill Process" in menu                              |      `killall` or `kap`     |
|   `format`   |   `fmt`   |                                 Format Code, It is same as clicking "Format Code" in menu                                 |      `format` or `fmt`      |
|   `snippet`  |   `snp`   |                             Open snippet dialog, It is same as clicking "Use Snippets" in menu                            |      `snippet` or `snp`     |
|    `vmode`   |   `vmd`   |                      View mode, Changes the view mode. It can only toggle to "edit" and "split" mode                      | `vmode edit` or `vmd split` |
| `preference` |   `prf`   |                                  Preferences, It is same as clicking "Preference" in menu                                 |    `preference` or `prf`    |
|   `chlang`   |   `chl`   |                                 Language, It can be used to change the language of a tab.                                 |  `chlang cpp` or `chl java` |
|    `clear`   |   `clr`   |                                                 Clear Message logger text                                                 |       `clear` or `clr`      |
|    `exit`    |   `ext`   |                                        Exit, It is same as pressing "Quit" in menu.                                       |       `exit` or `ext`       |
