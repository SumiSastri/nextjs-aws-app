import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import {Bucket} from 'aws-cdk-lib/aws-s3';
import * as path from 'path';

interface MusicAssetsAPIProps  {
    musicAssetsBucket:Bucket,
}
export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props?: MusicAssetsAPIProps){
        super (scope, id);

//  LAMBDA for S3 - runtime error with props
const getMusicAssetsFunction = new lambda.NodejsFunction(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
  entry:path.join(__dirname, '../../api/get-music-assets/index.ts'),
  handler: 'getMusicAssets',  
// //   FIX ME: Why is props undefined?
//   environment: {
//     MUSIC_ASSETS_BUCKET: props.musicAssetsBucket.bucketName
// }

});
    }
}