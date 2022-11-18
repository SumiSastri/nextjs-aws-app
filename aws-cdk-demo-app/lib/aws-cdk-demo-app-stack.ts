import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// example cdk stack
import {Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';

export class AwsCdkDemoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

// The code that defines your stack goes here
// example s3 - bucket is a reserved word and this refers to the new Bucket constructor
const bucket = new Bucket(this, 'IdCheckDocuments', {
encryption: BucketEncryption.S3_MANAGED
});

// cloud formation bucket that will output and deploy the s3 bucket with PrimaryIdCheckDocuments as the name
new cdk.CfnOutput(this, 'IdCheckDocumentsExport', {
value: bucket.bucketName,
exportName: 'PrimaryIdCheckDocuments'
});

  }
}
