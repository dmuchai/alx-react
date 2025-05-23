#!/bin/bash

echo "🔍 Scanning for locally deleted but tracked files..."

# List deleted files in Git (those staged as deleted)
deleted_files=$(git status --porcelain | grep '^ D' | awk '{print $2}')

if [ -z "$deleted_files" ]; then
  echo "✅ No deleted tracked files found."
  exit 0
fi

echo "📄 Found deleted files:"
echo "$deleted_files"
echo

for file in $deleted_files; do
  git update-index --assume-unchanged "$file"
  echo "👉 Ignoring further changes to: $file"
done

echo
echo "✅ All listed deletions are now ignored by Git (until you revert with --no-assume-unchanged)."
