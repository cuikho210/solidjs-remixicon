#!/usr/bin/bash

# Up to date
git submodule init
git submodule update

latest_remixicon_commit_id=$(git --git-dir ./remixicon/.git log --format="%h" -n 1)

function build_and_publish() {
	# Generate components
	bash ./generate_components.bash

	# Build
	yarn --cwd ./publish install
	yarn --cwd ./publish build

	# Publish
	yarn --cwd ./publish run semantic-release
}

function update_remixicon_commit_id() {
	echo "$latest_remixicon_commit_id" > ./latest_remixicon_commit_id

	git config --global user.name cuikho210 
	git config --global user.email tonykms210@gmail.com 
	git add -u
	git commit -m "feat: Update Remixicon $(date)"
	git push
}

# Check diff in commit id
if [ "$latest_remixicon_commit_id" = "$(cat ./latest_remixicon_commit_id)" ]; then
	echo "No change"
else
	update_remixicon_commit_id
	build_and_publish
fi

