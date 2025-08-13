---
title: "Git Commands Cheatsheet"
description: "Essential Git commands for version control workflows"
category: "Tools"
tags: ["git", "version control", "devops"]
version: "2.x"
---

## Setup and Configuration

### Initial Setup

```bash
# Set user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "code --wait"

# Check configuration
git config --list
```

### Creating Repositories

```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git

# Clone to a specific folder
git clone https://github.com/username/repository.git my-folder
```

## Basic Commands

### Tracking Changes

```bash
# Check status of working directory
git status

# Add files to staging area
git add filename.txt
git add *.txt
git add .

# Commit changes
git commit -m "Commit message"

# Commit and add in one command (only for tracked files)
git commit -am "Commit message"
```

### Viewing History

```bash
# View commit history
git log

# View compact history
git log --oneline

# View history with graph
git log --graph --oneline --decorate

# View changes in a file
git log -p filename.txt

# View who changed what and when in a file
git blame filename.txt
```

## Branching and Merging

### Branch Management

```bash
# List all branches
git branch

# Create a new branch
git branch branch-name

# Switch to a branch
git checkout branch-name

# Create and switch to a new branch
git checkout -b branch-name

# Delete a branch
git branch -d branch-name

# Force delete a branch
git branch -D branch-name
```

### Merging

```bash
# Merge a branch into current branch
git merge branch-name

# Merge with commit message
git merge branch-name -m "Merge message"

# Abort a merge with conflicts
git merge --abort
```

### Rebasing

```bash
# Rebase current branch onto another
git rebase branch-name

# Interactive rebase for editing commits
git rebase -i HEAD~3  # Rebase last 3 commits

# Abort a rebase
git rebase --abort
```

## Remote Repositories

### Managing Remotes

```bash
# List remote repositories
git remote -v

# Add a remote
git remote add origin https://github.com/username/repository.git

# Change remote URL
git remote set-url origin https://github.com/username/new-repository.git

# Remove a remote
git remote remove origin
```

### Syncing with Remotes

```bash
# Fetch changes from remote
git fetch origin

# Pull changes from remote (fetch + merge)
git pull origin branch-name

# Pull with rebase instead of merge
git pull --rebase origin branch-name

# Push changes to remote
git push origin branch-name

# Push and set upstream
git push -u origin branch-name
```

## Undoing Changes

### Working Directory

```bash
# Discard changes in working directory
git checkout -- filename.txt
git restore filename.txt  # Git 2.23+

# Discard all changes
git checkout -- .
git restore .  # Git 2.23+
```

### Staging Area

```bash
# Unstage files
git reset HEAD filename.txt
git restore --staged filename.txt  # Git 2.23+
```

### Commits

```bash
# Amend last commit
git commit --amend -m "New commit message"

# Undo last commit but keep changes staged
git reset --soft HEAD~1

# Undo last commit and unstage changes
git reset HEAD~1

# Undo last commit and discard changes
git reset --hard HEAD~1

# Revert a commit (creates a new commit)
git revert commit-hash
```

## Stashing

```bash
# Stash changes
git stash

# Stash with a message
git stash save "Work in progress"

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{2}

# Apply and remove stash
git stash pop

# Remove a stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
```

## Advanced Features

### Tagging

```bash
# List tags
git tag

# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Tag a specific commit
git tag -a v1.0.0 commit-hash -m "Version 1.0.0"

# Push tags to remote
git push origin v1.0.0
git push origin --tags  # Push all tags
```

### Submodules

```bash
# Add a submodule
git submodule add https://github.com/username/repository.git path/to/submodule

# Initialize submodules after cloning
git submodule init
git submodule update

# Clone with submodules
git clone --recurse-submodules https://github.com/username/repository.git
```

### Worktrees

```bash
# Create a new worktree
git worktree add ../path/to/folder branch-name

# List worktrees
git worktree list

# Remove a worktree
git worktree remove ../path/to/folder
```

## Git Workflows

### Feature Branch Workflow

```bash
# Create a feature branch
git checkout -b feature/new-feature main

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push feature branch to remote
git push -u origin feature/new-feature

# Merge back to main when complete
git checkout main
git pull origin main
git merge feature/new-feature
git push origin main
```

### Gitflow Workflow

```bash
# Initialize gitflow
git flow init

# Start a feature
git flow feature start new-feature

# Finish a feature
git flow feature finish new-feature

# Start a release
git flow release start 1.0.0

# Finish a release
git flow release finish 1.0.0
```