#!/usr/bin/env node
import 'source-map-support/register';
import { App, Tags, aws_s3 as s3 } from 'aws-cdk-lib';
import { AwsCdkDemoAppStack } from '../lib/aws-cdk-demo-app-stack';

const app = new App();
const stack = new AwsCdkDemoAppStack(app, 'AwsCdkDemoAppStack');
Tags.of(stack).add('App', 'MusicAssetManagement')
Tags.of(stack).add('Environment', 'Development')
// As Networking is already a construct see lib stack file
// Tags.of(stack).add('Module', 'Networking', {
// // exclude or include resource types
// })

{
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
};