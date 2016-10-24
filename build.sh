#!/bin/sh
watchify -t [ babelify ] lib/main.js -o bundle.js -v
