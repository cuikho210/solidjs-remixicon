#!/usr/bin/bash

# Up to date
git submodule init
git submodule update

# Check diff in commit id
latest_remixicon_commit_id=$(git --git-dir ./remixicon/.git log --format="%h" -n 1)
if [ "$latest_remixicon_commit_id" = "$(cat ./latest_remixicon_commit_id)" ]; then
	build_and_publish
fi

function build_and_publish() {
	# Generate components
	bash ./generate_components.bash

	# Build
	yarn --cwd ./publish install
	yarn --cwd ./publish build

	# Publish
	yarn --cwd ./publish semantic-release
}
