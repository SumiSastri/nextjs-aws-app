import { APIGatewayProxyEventV2, Context, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import S3 = require("aws-sdk/clients/s3");

const s3 = new S3({});
const bucketName = process.env.MUSIC_ASSETS_BUCKET;

// boiler plate - get request for HTTP request from the v2 api-gateway in the AWS cloud infrastucture
export const getMusicAssets = async function (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyStructuredResultV2>  {
    console.log(`Bucket Name: ${bucketName}`);
    console.info("EVENT\n" + JSON.stringify(event, null, 2))
    // console.warn(`EVENT NOT PROCESSED!`)
    console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
  
    try {
      const { Contents: results } = await s3.listObjects({ Bucket: process.env.MUSIC_ASSETS_BUCKET!}).promise();
      // list of files from the music assets folder with the s3.listObjects method
      const musicAssets = await Promise.all(results!.map(async result => generateSignedURL(result)))
      console.log(musicAssets)
      return {
        statusCode: 200,
        body: JSON.stringify({
          input: event,
          message: `${musicAssets}, Event success`
        })
      }
      
    } catch (error) {
      return {
        statusCode: 500,
        body: error.message
      }
    }
  }

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


  