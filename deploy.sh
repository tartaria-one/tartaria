#!/usr/bin/env sh

set -e

# yarn run build
yarn docs:build

cd docs/.vuepress/dist

echo 'tartaria.one' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tartaria-one/tartaria.git master:gh-pages

cd -
