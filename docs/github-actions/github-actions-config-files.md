---
layout: default
title: Github actions config files
parent: github-actions
---

# Github actions config files

Github actions requires a yml.config file to configure local actions to the cloud-based Github Actions platform.
These config files need to be in the root directory and placed in a folder which is a .github folder.

In the subfolder of workflows you can determine as many config files as you require eg: `.github/workflows/config1.yml` adding multiple configs is possible all you do is add another file in the same folder eg: `.github/workflows/config2.yml`

You can also add a template for how the PR should look in a mark-down file

eg: `pr_template.md`

## The config.yml file

Github Actions requires a `config.yml` to connect local configurations to the GitHub Actions cloud.

### What is Yml

YAML is a human-friendly data serialization language for all programming languages. It’s a strict superset of JSON, with the addition of syntactically significant newlines and indentation.

YAML - is an acryonmn for Y aint markup language.

YAML is lighter and more flexible than JSON and is used in configurations because of this. JSON is more inflexible and therefore is considered better for data interchanges.

JSON (JavaScript Object Notation) - is a lighter version of other more rigid syntaxes and offers data-exchange between languages.

### Fields in the config.yml file

The config.yml file has the following fields

`name` - Name for this config eg: PR Checks
`on` - Where the git hub action takes place

eg:

```
on:
  pull_request:
    branches:
    - name of branch
```

`jobs` -Lists jobs to be run during the PR Checks process (work flow)

A job is a set of steps in a workflow that is executed on the same runner. Each step is either a shell script that will be executed, or an action that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. For example, you can have a step that builds your application followed by a step that tests the application that was built.

eg: of a jobs config

```
jobs:
test:
name:  job name (eg: Check formatting with Prettier)
runs-on: system (eg: ubuntu-ltest)

<!-- steps: (list of steps, uses, with and run commands) -->

steps: - name: Checkout
uses: actions/checkout@v3 - uses: actions/setup-node@v2
with:
node-version: "16" - name: name of commands that will run (eg: Ensure Prettier Formatting Passes)

<!-- run: these are the commands that will run the code checks -->

run: |
npm ci
npm run prettier-check
```
