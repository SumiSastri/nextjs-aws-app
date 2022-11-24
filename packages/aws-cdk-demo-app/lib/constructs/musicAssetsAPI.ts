import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
// import V2 of s3
import { aws_s3 as s3 } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

//Step 1 - add IBucket interface 
interface MusicAssetsAPIProps  {
    musicAssetsBucketProps:s3.IBucket,
}
// Step 2: Make the props mandatory - error then goes away in the environment key-value pair
export class MusicAssetsAPI extends Construct {
    constructor (scope: Construct, id: string, props: MusicAssetsAPIProps){
        super (scope, id);

//  LAMBDA for S3  - Step 3 add the environment variable in the function
const getMusicAssetsFunction = new lambda.NodejsFunction(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
  entry:path.join(__dirname, '../../api/get-music-assets/getMusicAssets.ts'),
  handler: 'getMusicAssets',  
  environment: {
    MUSIC_ASSETS_BUCKET: props.musicAssetsBucketProps.bucketName
}
//  IdaaM -  id & access management - upload files securely

});
// add a resource from our props object and we want the bucketArn
const bucketPermissions = new iam.PolicyStatement();
bucketPermissions.addResources(`${props.musicAssetsBucketProps.bucketArn}/*`);
// get and put actions
bucketPermissions.addActions('s3:GetObject', 's3:PutObject');
// gives lambda ability to follow policy instructions
getMusicAssetsFunction.addToRolePolicy(bucketPermissions);
// container of the bucket permissions
const bucketContainerPermissions = new iam.PolicyStatement();
// calls the addActions and addResources functions
bucketContainerPermissions.addResources(props.musicAssetsBucketProps.bucketArn);
bucketContainerPermissions.addActions('s3:ListBucket');
getMusicAssetsFunction.addToRolePolicy(bucketContainerPermissions);

    }
}