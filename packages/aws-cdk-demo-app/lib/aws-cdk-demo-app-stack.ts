// import * as cdk from 'aws-cdk-lib';
// import * as lambda from '@aws-cdk/core';
// CDK v2 imports
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
// import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';

import * as path from 'path'

// stack constructor 
export class AwsCdkDemoAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

// Code for Stacks
// Stack 1 s3
// CDK v2 - bucket is a reserved word and this refers to the new Bucket constructor
const bucket = new Bucket(this, 'MusicItemsDocuments', {
encryption: BucketEncryption.S3_MANAGED
});

// CDK v1
// new cdk.CfnOutput(this, 'MusicItemsExport', {
// value: bucket.bucketName,
// exportName: 'MusicItemsDocuments'
// });

// CDK v2 - cfn (cloud formation network)
new CfnOutput(this, 'MusicItemsExport', {
  value: bucket.bucketName,
  exportName: 'MusicItemsDocuments'
  });

// Stack 2 LAMBDA for S3 
const getMusicItemsFunction = new Function(this, "GetMusicItemsFunction", {
  runtime: Runtime.NODEJS_14_X,
// LOCATION OF CODE - bundles code from file path
  code: Code.fromAsset("get-music-items"),
// HANDLERS - bundle code for minifying & build process
  handler: "getMusicItems",
});

// Stack 3 dynamoDb table constructor
const musicItemsTable = new Table (this, 'MusicItemsTable', {
  partitionKey:{
    name: 'id',
    type: AttributeType.STRING,
  },
  tableName:'musicItemsTableItems'

});

// // GRANT DYNAMODB PERMISSIONS CALL LAMDA FUNCTION
//  musicItemsTable.grantReadWriteData(getMusicItemsLambda);

// Stack 4 API GATEWAY
// const musicItemsAPIGateway = new RestApi(this, "musicItemsAPIGateway")

// const getMusicItemsAPIGatewayIntegration = new LambdaIntegration(getMusicItemsAPI, {
//   requestTemplates: { "application/json": '{"statusCode":"200"}'}
// })

// musicItemsAPIGateway.root.addMethod("GET", getMusicCatalogAPIGatewayIntegration)

  }
}
