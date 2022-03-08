#!/bin/bash
set -ex

npm run compile

cp ./package.json ./dist/package.json
cp ./README.md ./dist/README.md
