import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
// import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
// import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';

import {Networking} from './constructs/networking'
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

  const networkingStack = new Networking(this, 'AWSCDKDemoNetworkingConstruct', {
    maxAzs: 2
  });

// Stack 2 dynamoDb table constructor
// const musicItemsTable = new Table (this, 'MusicItemsTable', {
//   partitionKey:{
//     name: 'id',
//     type: AttributeType.STRING,
//   },
//   tableName:'musicItemsTableItems'

// });

// // GRANT DYNAMODB PERMISSIONS CALL LAMDA FUNCTION
//  musicItemsTable.grantReadWriteData(getMusicItemsLambda);

// Stack 3 API GATEWAY
// const musicItemsAPIGateway = new RestApi(this, "musicItemsAPIGateway")

// const getMusicItemsAPIGatewayIntegration = new LambdaIntegration(getMusicItemsAPI, {
//   requestTemplates: { "application/json": '{"statusCode":"200"}'}
// })

// musicItemsAPIGateway.root.addMethod("GET", getMusicCatalogAPIGatewayIntegration)

  }
}
