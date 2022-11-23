Documentation[https://docs.aws.amazon.com/cdk/v2/guide/migrating-v2.html]

__V1__

1.  Bundling-minifying package parcel
2. Imports everything
eg: app entry point in bin folder
`import * as cdk from 'aws-cdk-lib';`
3. Need to use the `cdk` object
eg: entry point - bin folder
`const app = new cdk.App();`
4. The lib folder defines stacks 
 - imports everything
 eg: lambdas
 `import * as lambda from '@aws-cdk/core';`
5. Config of code for stack constructor CDK V1

```
// Stack constructor 
export class AwsCdkDemoAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

// Code for Stacks
    new cdk.CfnOutput(this, 'MusicItemsExport', {
        value: bucket.bucketName,
            exportName: 'MusicItemsDocuments'
 });
```
6. Packages to install - see V2 - V1 packages are now out of date

7. In lib folder - constructs for the stacks the lamda to get S3 assets - syntax and Node runtime version change in V2
```
const getMusicAssetsFunction = new lamda.NodejsFunction(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_12_X,
  entry: path.join (--dirname, '..', 'api', 'get-music-assets', '),
  handler: "getMusicAssets",
  externalModules: [
        'aws-sdk'
  ]
});
```

__V2__

1. Bundling-minifying package esbuild
2. Imports specific methods 
eg: app entry point in bin folder
`import { App } from 'aws-cdk-lib';`
3. Only imported methods used
eg: entry point - bin folder
`const app = new App();`
4. The lib folder defines stacks
- imports specific methods used
eg: lambdas
`import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";`
5. Code for stack constructor V2 removes the `cdk` object and uses the methods imported

```
// Code for Stacks
// Stack 1 s3 - bucket is a reserved word and this refers to the new Bucket constructor
const bucket = new Bucket(this, 'MusicItemsDocuments', {
encryption: BucketEncryption.S3_MANAGED
});

// cfn (cloud formation network)
new CfnOutput(this, 'MusicItemsExport', {
  value: bucket.bucketName,
  exportName: 'MusicItemsDocuments'
  });
```
6. Package versions to install (as of Nov 2022)
`npm install -save-dev "@types/aws-lambda": "^8.10.108"`
`npm install -save-dev  "aws-sdk": "^2.1258.0" `
`npm install @aws-cdk/aws-lambda`
`npm install @aws-cdk/aws-lambda-nodejs`
`npm i esbuild`

7. Config of `getApi` construct is different - node runtime is 16, entry changes to code and import of S3 uses commonJS syntax `import S3 = require("aws-sdk/clients/s3"); `

```
type MusicAssetsAPIProps = {
    musicAssetsBucket:s3.Bucket
}

export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props?: MusicAssetsAPIProps){
        super (scope, id);

const getMusicAssetsFunction = new Function(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
  code: Code.fromAsset(path.join(__dirname, '../../', "api", 'get-music-assets')),
  handler: "getMusicAssets",
});
    }
}
```
See boilerplate as well - significant differences for v2
`nextjs-aws-app/packages/aws-cdk-demo-app/api/get-music-assets/index.ts`