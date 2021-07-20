## What kinds of contributions are we looking for?

-   Fix typos.
-   Fix incorrect/outdated information.
-   Translate the documentation.
-   Improve the documentation.
-   ...

## New to GitHub?

You can learn how from this free series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

Basically, you have to fork this repository, modify contents in your fork, open a pull request when you are finished, wait for reviews and apply suggestions from the maintainers.

## Build the website

### Preparation

Make sure [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) and [Hugo](https://gohugo.io/) are installed.

```sh
git clone --recurse-submodules https://github.com/cpeditor/cpeditor.github.io
cd cpeditor.github.io
yarn
```

If you have cloned the repository but haven't cloned the submodules:

```sh
git submodules update --init --recursive
```

### Build static files

```sh
hugo
```

The static files will be in the `public` directory.

### Preview on local server

```sh
hugo server
```

To preview, open [localhost:1313](http://localhost:1313/) (you can see the `1313` in the output of the command, if the output shows another port, use the port in the output) in your browser.

### Build all versions

```sh
./build.sh
```

This builds all versions of the website. The static files will be in the `dist` directory. Usually, you don't need to run this.

## Modify the contents

We use [Markdown](https://en.wikipedia.org/wiki/Markdown) to write [documentation](content/docs), while other pages are HTML files. You can find many resources about Markdown online.

You can find all contents of the website in the [content](content) directory. Please note that the source files are in the `hugo` branch and the static files are in the `master` branch.

There are some attributes in the frontmatter of each Markdown file:

-   `title`: The full title of this page.
-   `linkTitle`: The title displayed in the links to this page.
-   `weight`: The weight of this page used when sorting pages. The page with the bigger weight is after the page with the smaller weight.
-   `description`: The description of this page, displayed in the list of pages and the top of this page.

## Internal links

In Markdown files, please use `[<title>](<relative path to the file>#<fragment>)` to make internal links.

For example: `[Preferences->Languages->C++->C++ Commands](../preferences/language/_index.md#c-commands)`.

## Markdown Formatting

We use [remark-lint](https://github.com/remarkjs/remark-lint) to format Markdown files.

If you have run `yarn`, you can simply run `yarn lint` to format all Markdown files.

If you are using [VS Code](https://github.com/microsoft/vscode), you can use the [vscode-remark](https://github.com/remarkjs/vscode-remark) extension to help you.

## Translations

For example, the Simplified Chinese (zh) version of a page is usually `_index.zh.md` while the English version is `_index.md`.

To add a new language, add it in [config.toml](config.toml) and add `_index.xx.md`s for it.

You can find all pages that need translation in the [need translation list](https://cpeditor.org/ru/need-translation-list). In this list, if a page has the same title as the English version, it's considered translated.
