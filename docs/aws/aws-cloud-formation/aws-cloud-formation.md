---
layout: default
title: What is AWS CloudFormation
---

# What is AWS CloudFormation?

AWS CloudFormation is an AWS service that provisions AWS Resources. Examples of AWS Resources are AWS Lambdas, the S3 bucket to store static files, DynamoDB tables, etc.

It simplifies the task of repeatedly and predictably creating groups of related resources and deploying them to the cloud infrastructure. This is done via the use of application programming interfaces, or APIs and setting up templates or a library of templates.

Templates can be set up for development, integration and production environments with the use of `parameters` which are variables in a template. This makes your template more flexible and functional.

There are three methods for calling APIs, the AWS Management Console, the AWS command‑line interface, or CLI, and using the language‑specific software development kits or direct API calls. eg: You can do this with JavaScript/ Python and other languages supported by AWS.

You can create a virtual environments for the software you are developing and connect it to the AWS Cloud services.
CloudFormation is a fully managed service it can create, update, and delete resources in your stack. It reads and constructs the resources in template files that you can set up in JSON or YAML. The output of this process is a virtual stack of your environment. This can be a single resource stack or a stack with hundreds of resources. Templates become a form of documentation for your environment.

A stack, is basically a unit of deployed code. Most organizations modularize stacks by creating separate templates for networking, security, and applications.

This process of converting your local stack to a virtual stack is done through one of the three - the AWS Management Console, the CLI, or SDK API calls - you can now manage these stack eg: make updates by rerunning a modified template, and even delete stacks. When you delete a stack, by default, all of the resources and the stack are deleted.

## What is a template file?

A template is the information to set up a local environment and this information is transferred via AWS CloudFormation
using the AWS CloudFormation formatting constructs to connect to the AWS Cloud Sercies. With CloudFormation templates you do not need to list resources in the template in the exact order of creation.

CloudFormation ships with a `DependsOn` attribute to control the order CloudFormation will create the resources. This allows you to build a sequence of events eg of a use case: A database server that needs to be created before a web server.

## Infrastructure as code

Each template is an example of infrastructure as code, which simply means you control your infrastructure through software code. Software, like templates, is flexible. You can change it. You can also keep different versions of the same template. This is exactly what developers do with source code for applications, and that's exactly how you want to treat your templates.

Organizations that rely on CloudFormation build out template libraries, much as they do code repositories for applications.

There are two critical requirements for running CloudFormation. The first, templates, we've already discussed. If the template has an error, by default, CloudFormation will stop processing and roll back any objects already created from the template.

The second requirement to run CloudFormation is whoever is calling the template to be processed must have permissions to all the services referenced in the template. You can also control who has the ability to even process a template through CloudFormation.

Plural Sight Overview:
[https://app.pluralsight.com/library/courses/introduction-aws-cloudformation/table-of-contents]

These groups of AWS resources are called stacks. which are either in YAML or JSON formats. The Stack manages the resources to be managed together. As you update the code a change set is created. This change set when deployed is a replaced by the new version of the code so it manages versions of code deployed. It helps the different AWS resource templates to remain in sync.
