#!/bin/bash

set -e

git config core.quotePath false

version_branches="$(git for-each-ref --format='%(refname:short)' refs/heads/v*.*)"

function build() {
    sed -i "s/baseURL = \"\/\"/baseURL = \"\/$1\"/" config.toml

    echo "[[params.versions]]
    version = \"master\"
    url = \"/\"" >> config.toml

    for version in $version_branches; do
        echo "[[params.versions]]
        version = \"$version\"
        url = \"/$version\"" >> config.toml
    done

    hugo --minify

    git reset --hard
}

git switch hugo
build
rm -rf dist; mv public dist

for branch in $version_branches; do
    git switch "$branch"
    git submodule update
    build $branch
    mv public "dist/$branch"
done
