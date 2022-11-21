import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// stack library dependencies
import {Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
// import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
// import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';

// stack constructor 
export class AwsCdkDemoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

// Code for Stacks
// Stack 1 s3 - bucket is a reserved word and this refers to the new Bucket constructor
const bucket = new Bucket(this, 'IdCheckDocuments', {
encryption: BucketEncryption.S3_MANAGED
});

// cloud formation bucket that will output and deploy the s3 bucket with PrimaryIdCheckDocuments as the name
new cdk.CfnOutput(this, 'IdCheckDocumentsExport', {
value: bucket.bucketName,
exportName: 'PrimaryIdCheckDocuments'
});

// Stack 2 dynamoDb table constructor
const musicCatalogTable = new Table (this, 'MusicCatalogTable', {
  partitionKey:{
    name: 'id',
    type: AttributeType.STRING,
  },
  tableName:'musicCatalogTableItems'

});

// Stack 3 AWS Lamda FUNCTION DECLARATION (Either NODEJS_12_X or NODEJS_14_X)
// const getMusicItemsLambda = new Function(this, "GetMusicItemsLambdaHandler", {
//   runtime: Runtime.NODEJS_14_X,
//   code: Code.fromAsset("functions"),
//   handler: "get-music-items.GetMusicItemsLambdaHandler",
//   environment: {
//     MUSIC_CATALOG_TABLE: musicCatalogTable.tableName,
//   },
// });

// // GRANT DYNAMODB PERMISSIONS CALL LAMDA FUNCTION
//  musicCatalogTable.grantReadWriteData(getMusicItemsLambda);

// Stack 4 API GATEWAY
// const musicCatalogAPIGateway = new RestApi(this, "musicCatalogAPIGateway")

// const getMusicCatalogAPIGatewayIntegration = new LambdaIntegration(getMusicCatalogAPI, {
//   requestTemplates: { "application/json": '{"statusCode":"200"}'}
// })

// musicCatalogAPIGateway.root.addMethod("GET", getMusicCatalogAPIGatewayIntegration)

  }
}
