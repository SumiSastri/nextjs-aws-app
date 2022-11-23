import { Construct } from 'constructs';
import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
// import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
// import * as s3 from 'aws-cdk-lib/aws-s3';
import * as path from 'path';


// interface of I Bucket - props gives it a bucket name
export interface MusicAssetsAPIProps  {
    musicAssetsBucket:s3.IBucket
}

export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props?: MusicAssetsAPIProps){
        super (scope, id);

//  LAMBDA for S3 
const getMusicAssetsFunction = new Function(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
  code: Code.fromAsset(path.join(__dirname, '../../', "api", 'get-music-assets')),
  handler: "getMusicAssets",  
//   environment: {
//     MUSIC_ASSETS_BUCKET: props.musicAssetsBucket.bucketName
// },
});
    }
}