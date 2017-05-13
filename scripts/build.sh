#!/usr/bin/env bash
echo "Building..."
rm -rf public/$npm_package_version
cross-var pug --obj data.json src/index.pug --output public/$npm_package_version/
node-sass src/index.scss | postcss -c .postcssrc.json | cssmin > public/$npm_package_version/index.min.css
mustache src/index.mustache.js  data.json | uglify > public/$npm_package_version/index.min.js
echo "Finished building..."