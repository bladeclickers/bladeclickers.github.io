for folder in */ ; do
    echo "Processing folder: $folder"

    # Stage the folder
    git add "$folder"

    # Check if there are changes to commit
    if git diff --cached --quiet; then
        echo "No changes to commit in $folder, skipping..."
    else
        # Commit the folder
        git commit -m "Add folder $folder"

        # Push to remote
        git push origin main
    fi
done

# -------------------------------
# 2️⃣ Push loose/root-level files
# -------------------------------
# Find all files in repo root (excluding .git and directories)
for file in *; do
    if [[ -f "$file" ]]; then
        git add "$file"
    fi
done

# Commit and push if there are any changes
if git diff --cached --quiet; then
    echo "No loose/root-level files to commit."
else
    git commit -m "Add root-level files"
    git push origin main
fi

echo "All folders and root files have been pushed successfully!"