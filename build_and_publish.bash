#!/usr/bin/bash

bash ./update_git_submodule.bash

# Generate components
bash ./generate_components.bash
if [ "$?" -eq "1" ]; then
	exit
fi

# Build
yarn --cwd ./publish install
yarn --cwd ./publish build

if [ "$?" -eq "1" ]; then
	exit
fi

# Publish
yarn --cwd ./publish run semantic-release
