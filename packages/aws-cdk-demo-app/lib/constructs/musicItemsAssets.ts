import { Construct } from 'constructs';
import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import * as s3 from 'aws-cdk-lib/aws-s3';

type MusicAssetsAPIProps = {
    musicAssetsBucket:s3.Bucket
}

export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props?: MusicAssetsAPIProps){
        super (scope, id);

//  LAMBDA for S3 - S3 stores static assets like pdfs/ images
const getMusicAssetsFunction = new Function(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_14_X,
// CONSTRUCTS LOCATION - bundles code from file path
  code: Code.fromAsset("get-music-assets"),
// HANDLERS - bundle code for minifying & build process
  handler: "getMusicAssets",
//   environment: {
//     MUSIC_ASSETS_BUCKET: props.musicAssetsBucket.bucketName
// },
});
    }
}