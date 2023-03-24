---
layout: default
title: What is GitHub Actions
parent: github-actions
---

# What is GitHub Actions

GitHub Actions allows developers to run workflows when other events happen in your repository.

An event is a specific activity in a repository that triggers a workflow run. For example, activity can originate from GitHub when someone creates a pull request, opens an issue, or pushes a commit to a repository.

For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

A workflow contains one or more jobs which can run in sequential order or in parallel. Each job will run inside its own virtual machine runner, or inside a container, and has one or more steps that either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.
