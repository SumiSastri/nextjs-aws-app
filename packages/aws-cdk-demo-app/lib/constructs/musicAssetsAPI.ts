import { MusicAssetsAPIProps } from './musicAssetsAPI';
import { Construct } from 'constructs';
import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
// import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
// import * as s3 from 'aws-cdk-lib/aws-s3';

// import * as apigateway from '@aws-cdk/aws-apigateway';

import * as path from 'path';

// interface of I Bucket - props gives it a bucket name
export interface MusicAssetsAPIProps  {
    musicAssetsBucket:s3.IBucket
}

export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props?: MusicAssetsAPIProps){
        super (scope, id);

//  LAMBDA for S3 - S3 stores static assets like pdfs/ images
// pass a reference of s3 into the lamdba construct
const getMusicAssetsFunction = new Function(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
// CONSTRUCTS LOCATION - bundles code from file path - must be the directory 
  code: Code.fromAsset(path.join(__dirname, '../../', "api", 'get-music-assets')),
// HANDLERS - bundle code for minifying & build process
  handler: "getMusicAssets",  
  // deprecated as a Function Prop?
  // bundling: {
  //   externalModules: [
  //   "aws-sdk"
  //   ]
  //   },
  environment: {
    MUSIC_ASSETS_BUCKET: props.musicAssetsBucket.bucketName
},
});
    }
}