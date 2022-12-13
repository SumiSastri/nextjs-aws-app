AWS Cloud Formation is an AWS service that provisions AWS Resources. Examples of AWS Resources are AWS Lambdas, the S3 bucket to store static files, dynamoDB tables, etc.

Plural Sight Overview:
[https://app.pluralsight.com/library/courses/introduction-aws-cloudformation/table-of-contents]
These groups of AWS resources are called stacks. which are either in YAML or JSON formats. The Stack manages the resources to be managed together. As you update the code a change set is created. This change set when deployed is a replaced by the new version of the code so it manages versions of code deployed. It helps the different AWS resource templates to remain in sync.