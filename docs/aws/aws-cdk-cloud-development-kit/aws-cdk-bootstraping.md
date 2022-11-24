__Bootstrapping the CDK from the local machine to the AWS Cloud service__

- To connect the local machine to the AWS cloud services we need to make a decision on the cloud formation stack to be used
eg: 
- Node
- Fargate
- AppSync
- Cloud Formation

- By running the command `cdk bootstrap()` creates a CDK Tool Kit Cloud Formation Stack along with an S3 Bucket to store all Assets in an AWS Account. It is required if any asset more than 50KB is required for the Cloud Formation templates