#!/usr/bin/bash

# Up to date
git submodule update

# Generate components
bash ./generate_components.bash

# Build and release
yarn --cwd ./publish install
yarn --cwd ./publish build
