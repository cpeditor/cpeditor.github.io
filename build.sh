#!/bin/bash

set -e

git config core.quotePath false

version_branches="$(git for-each-ref --format='%(refname:lstrip=3)' refs/remotes/*/v*.* | sort -u)"

function build() {
    sed -i "s/baseURL = \"\/\"/baseURL = \"\/$1\"/" config.toml

    if [[ "$1" != "" ]]; then
        sed -i "s/^version = \".*\"/version = \"$1\"/" config.toml
        sed -i "s/^github_branch = \".*\"/github_branch = \"$1\"/" config.toml
    fi

    echo "[[params.versions]]
    version = \"alpha\"
    url = \"/\"" >> config.toml

    for version in $version_branches; do
        echo "[[params.versions]]
        version = \"$version\"
        url = \"/$version\"" >> config.toml
    done

    hugo --minify

    if [[ "$1" != "" ]]; then
        rm public/CNAME public/robots.txt
    fi

    git reset --hard
}

git checkout hugo
build
rm -rf dist; mv public dist

for branch in $version_branches; do
    git checkout "$branch"
    git submodule update
    build "$branch"
    mv public "dist/$branch"
done
