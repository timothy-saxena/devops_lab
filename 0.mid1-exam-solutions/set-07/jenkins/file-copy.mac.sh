#!/bin/sh
mkdir -p "$HOME/jenkins-devops-copy"
echo "Hello from Jenkins" > "$WORKSPACE/test.txt"
cp "$WORKSPACE/test.txt" "$HOME/jenkins-devops-copy/test.txt"
echo "File copied successfully."
