---
layout: default
title: Github Workflows
parent: github-actions
---

# GitHub Workflow

You can configure a GitHub Actions workflow to be triggered when an event occurs in your repository, such as a pull request being opened or an issue being created.

Workflows in Github refer to the process of software development and maintaining control over versions over several iterations and changes to the code base.

A workflow configures an automated process that will run one or more jobs.

To maintain this control over version control in Github, you can take actions to protect your key branches - master or main (which usually is the production ready-branch) - from changes that are unmonitored and untested.

Additionally each branch you create can be sanitised with Github actions, leading to cleaner and more efficient merges of branches into master.

These steps allow for continous integration (into the porduction branch) and continous delivery (keeping the master branch ready for release on a continuous basis) continuous deployment (release of new features/ bugfixes into production and release to end customer.)

Workflows are defined by a `yml` file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

The most important branch to protect is your master or main branch.

## Protecting your master branch

- No direct changes can be made to master (best practice)
- Branches must be made from master (the first branch therefore production ready)
- Only named people can merge a branch into master (improve security)
- This can be done by clicking the `protect-this-branch` on your repository in github and checking the boxes that you would like depending on what rules you want to set to protect the branch
