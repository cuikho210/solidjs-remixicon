#!/usr/bin/bash

# Generate components
bash ./generate_components.bash

# Build
yarn --cwd ./publish install
yarn --cwd ./publish build

# Publish
yarn --cwd ./publish run semantic-release
