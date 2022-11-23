import { CfnOutput, Stack, StackProps, Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
// constructs
import {Networking} from './constructs/networking'
import {MusicAssetsAPI} from './constructs/musicAssetsAPI'
export class AwsCdkDemoAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

// Code for Stacks 
// Stack 1 s3 - bucket is a reserved word and this refers to the new Bucket constructor
const bucket = new Bucket(this, 'MusicAssets', {
encryption: BucketEncryption.S3_MANAGED
});

// cfn (cloud formation network)
new CfnOutput(this, 'MusicAssetsExport', {
  value: bucket.bucketName,
  exportName: 'MusicAssets'
  });

// construct 1 for stack 1
  const networkingStack = new Networking(this, 'AWSCDKDemoNetworkingConstruct', {
    maxAzs: 2
  });
  Tags.of(networkingStack).add("Module", "Networking")

// construct 2 for stack 1
  const musicAssetsApi = new MusicAssetsAPI(this, 'MusicAssetsAPI', { musicAssetsBucket: bucket });

  Tags.of(musicAssetsApi).add('Module', 'MusicAssetsAPI');
  }
}
