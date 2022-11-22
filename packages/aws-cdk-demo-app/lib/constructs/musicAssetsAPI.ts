import { Construct } from 'constructs';
import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as path from 'path';

type MusicAssetsAPIProps = {
    musicAssetsBucket:s3.Bucket
}

export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props?: MusicAssetsAPIProps){
        super (scope, id);

//  LAMBDA for S3 - S3 stores static assets like pdfs/ images
const getMusicAssetsFunction = new Function(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
// CONSTRUCTS LOCATION - bundles code from file path - must be the directory 
  code: Code.fromAsset(path.join(__dirname, '../../', "api", 'get-music-assets')),
// HANDLERS - bundle code for minifying & build process
  handler: "getMusicAssets",
//   environment: {
//     MUSIC_ASSETS_BUCKET: props.musicAssetsBucket.bucketName
// },
});
    }
}