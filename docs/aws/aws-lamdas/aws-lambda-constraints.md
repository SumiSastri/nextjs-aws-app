---
layout: default
title: AWS Lambda Benefits
parent: aws-lambda
grand_parent: aws
---

# AWS Lambda Constraints

- Purely event driven use case must fit this type of infrastructure management

- To avoid creating monolithic and tightly coupled solutions, AWS Lambda imposes the following configuration options and constrainsts.

* Disk space limit 512 MB
* Memory allocation from 128 to 1536 MB
* Code execution max of 5 minutes
* Deployment package size and the maximum number of file descriptors has limits
* Request-response body payload cannot exceed 6 MB
* Request body limited to 128 KB
* The number of concurrent executions is a soft limit, which can be increased upon request.
* Built on the number of times your code is triggered and for each 100 ms of execution time.
