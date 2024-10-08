#!/usr/bin/bash

bash ./update_git_submodule.bash

latest_remixicon_commit_id=$(git --git-dir ./remixicon/.git log --format="%h" -n 1)

function update_remixicon_commit_id() {
	echo "$latest_remixicon_commit_id" > ./latest_remixicon_commit_id

	git config --global user.name cuikho210 
	git config --global user.email tonykms210@gmail.com 
	git add -A
	git commit -m "feat: Update Remixicon $(date)"
	git push
}

# Check diff in commit id
if [ "$latest_remixicon_commit_id" = "$(cat ./latest_remixicon_commit_id)" ]; then
	echo "No change"
else
	update_remixicon_commit_id
	bash ./build_and_publish.bash
fi

