import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import {Duration, CfnOutput} from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import * as path from 'path';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as apig from '@aws-cdk/aws-apigatewayv2-alpha'
import * as apiIntegration from '@aws-cdk/aws-apigatewayv2-integrations-alpha';

interface MusicAssetsAPIProps  {
    musicAssetsBucketProps:s3.IBucket,
}
export class MusicAssetsAPI extends Construct {   
    public readonly httpApi: apig.HttpApi;
    constructor (scope: Construct, id: string, props: MusicAssetsAPIProps){
        super (scope, id);

// GET REQUEST
const getMusicAssetsFunction = new lambda.NodejsFunction(this, "GetMusicAssetsFunction", {
  runtime: Runtime.NODEJS_16_X,
  entry:path.join(__dirname, '../../api/get-music-assets/index.ts'),
  handler: 'getMusicAssets',  
  environment: {
    MUSIC_ASSETS_BUCKET: props.musicAssetsBucketProps.bucketName
}
});
// PERMISSIONING
const bucketPermissions = new iam.PolicyStatement();
bucketPermissions.addResources(`${props.musicAssetsBucketProps.bucketArn}/*`);
bucketPermissions.addActions('s3:GetObject', 's3:PutObject');
getMusicAssetsFunction.addToRolePolicy(bucketPermissions);
const bucketContainerPermissions = new iam.PolicyStatement();
bucketContainerPermissions.addResources(props.musicAssetsBucketProps.bucketArn);
bucketContainerPermissions.addActions('s3:ListBucket');
getMusicAssetsFunction.addToRolePolicy(bucketContainerPermissions);

// CONFIG API GATEWAY TO TEST WITH POSTMAN 
this.httpApi = new apig.HttpApi(this, 'HttpAPI', {
    apiName: 'music-assets-api',
    createDefaultStage: true,
    corsPreflight: {
      allowMethods: [apig.CorsHttpMethod.GET],
      allowOrigins: ['*'],
      maxAge: Duration.days(10),
    }
  });
// INTEGRATION to routes
  const integration = new apiIntegration.HttpLambdaIntegration('MusicAssetsAPIIntegration', getMusicAssetsFunction);
  this.httpApi.addRoutes({
    path: '/get-music-items',
    methods: [
      apig.HttpMethod.GET
    ],
    integration,
  });

  new CfnOutput(this, 'MusicAssetsAPIEndpoint', {
    value: this.httpApi.url!,
    exportName: 'MusicAssetsAPIEndpoint'
  })

    }
}