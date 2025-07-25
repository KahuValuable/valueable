#!/bin/bash
npm install
if [ $? -ne 0 ]; then
  echo "npm install failed. Exiting prebuild hook."
  exit 1
fi
echo "npm install succeeded. Continuing prebuild hook."
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed. Exiting prebuild hook."
  exit 1
fi
echo "Build succeeded. Continuing prebuild hook."