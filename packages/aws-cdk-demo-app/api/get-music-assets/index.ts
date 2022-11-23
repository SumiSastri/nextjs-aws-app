import { APIGatewayProxyEventV2, Context, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import S3 = require("aws-sdk/clients/s3");
// import { aws_s3 as s3 } from 'aws-cdk-lib';

const s3 = new S3({});
const bucketName = process.env.MUSIC_ASSETS_BUCKET

// boiler plate - get request for HTTP request from the v2 api-gateway in the AWS cloud infrastucture
export const getMusicAssets = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyStructuredResultV2> => {
    console.log(`Bucket Name: ${bucketName}`);
  
    try {
      const { Contents: results } = await s3.listObjects({ Bucket: process.env.MUSIC_ASSETS_BUCKET!}).promise();
      // AWS CDK V2 code
      const musicAssets = await Promise.all(results!.map(async result => generateSignedURL(result)))
      return {
        statusCode: 200,
        body: JSON.stringify(musicAssets)
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: error.message
      }
    }
  }
// boiler plate
  const generateSignedURL = async (object: S3.Object): Promise<{ filename: string, url: string }> => {
    const url = await s3.getSignedUrlPromise('getObject', {
      Bucket: bucketName,
      Key: object.Key!,
      Expires: (60 * 60) // one hour
    })
    return {
      filename: object.Key!,
      url: url
    }
  }
  