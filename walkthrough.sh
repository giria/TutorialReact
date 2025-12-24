#!/usr/bin/env bash

old_head=$(git name-rev --name-only HEAD)

echo
echo "======================================"
echo " Git commit walkthrough"
echo "======================================"
echo
echo "Instructions:"
echo "  - Type 'exit' or press Ctrl+D → go to NEXT commit"
echo "  - Type 'exit 1'              → STOP and return to original HEAD"
echo
echo "Starting from the first commit..."
echo

for commit in $(git rev-list --reverse HEAD); do
    git checkout -q "$commit"

    echo
    echo "--------------------------------------"
    echo "Commit: ${commit:0:7}"
    git show --quiet --pretty=format:"Author: %an%nDate: %ad%n%n%s"
    echo
    echo "--------------------------------------"
    echo "You are now in an interactive shell."
    echo "Exit the shell to continue."
    echo

    PS1="${commit:0:7}> " bash --norc || break
done

git checkout -q "$old_head"

echo
echo "======================================"
echo " Returned to original state: $old_head"
echo "======================================"
echo
