---
layout: default
title: How to protect a branch
parent: github-actions
---

# How to protect a branch

Each branch or sub-branch (from an integration or development branch head) also needs to be protected so that code is sanitised before it reaches the main branch and merged into master.

Some best practices:

- Commit history - clean messages and description of reason for change
- PR (peer-review) required before branch can be merged - to discuss and make changes
- Tests written must pass in the PR environment
- A minimum number of people required to review code before merging
- Named people review code
- Security and best practice - the person who writes the code, changes the code and merges the code into master
- Stale branches - changes already made on master pulled into branch and updated before merging
- Conflicts - all merge conflicts to be cleared before merging
