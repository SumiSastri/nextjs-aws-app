import { CfnOutput, Stack, StackProps, Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';

// constructs
import {Networking} from './constructs/networking'
import {MusicAssetsAPI} from './constructs/musicAssetsAPI'

export class AwsCdkDemoAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

// CODE FOR STACK
// s3 bucket 
const  musicItemsBucket = new Bucket(this, 'MusicItemsBucket', {
encryption: BucketEncryption.S3_MANAGED,
});

// s3 deploy method
new s3Deploy.BucketDeployment(this, 'MusicItemsDeployment', {
  sources: [
    s3Deploy.Source.asset(path.join(__dirname,  "../assets/music-assets"))
  ],
  destinationBucket: musicItemsBucket,
  memoryLimit: 512
})

// CFN  (cloud formation network) CONFIG
new CfnOutput(this, 'MusicAssetsExport', {
  value:  musicItemsBucket.bucketName,
  exportName: 'MusicAssetsBucket'
  });

// networking construct imported for s3
  const networkingStack = new Networking(this, 'AWSCDKDemoNetworkingConstruct', {
    maxAzs: 2
  });
  Tags.of(networkingStack).add("Module", "Networking")

// api call construct for s3 - Step 4 add environment variable reference 
// the props tied to the stack bucket
  const musicAssetsApi = new MusicAssetsAPI(this, 'MusicAssetsAPI', { 
    musicAssetsBucketProps: musicItemsBucket
  });

  Tags.of(musicAssetsApi).add('Module', 'MusicAssetsAPI');

  }
}
