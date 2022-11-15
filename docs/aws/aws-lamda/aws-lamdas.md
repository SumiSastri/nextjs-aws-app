So what is AWS Lambda? AWS Lambda is event‑driven, serverless compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically to thousands of requests per second. 

Benefits
You only pay for the compute you use. You don't pay for compute time when your code is not running. This makes AWS Lambda ideal for variable and intermittent workloads. 
You can run code for virtually any application or back‑end service, all with zero administration. 

AWS Lambda runs your code on highly available compute infrastructure, which provides all administration, including server and operating system maintenance, capacity provisioning, and Auto Scaling, code monitoring, and logging. 

AWS Lambda supports a variety of programming languages, including Node.js, Java, C#, and Python. 

AWS Lambdas are used for event‑driven computing. You can run code in response to events, including changes to an S3 bucket or an Amazon DynamoDB table. You can respond to HTTP requests using Amazon API Gateway. You can invoke your code using API calls made using the AWS SDKs. You could build serverless applications that are triggered by AWS Lambda functions, and you can automatically deploy them using AWS CodePipeline and AWS CodeDeploy. AWS Lambda is intended to support serverless and microservices applications. 

To avoid creating monolithic and tightly coupled solutions, AWS Lambda imposes the following configuration options. Your disk space is limited to 512 MB. Memory allocation is available from 128 to 1536 MB. AWS Lambda function execution is limited to a maximum of 5 minutes. You are constrained by deployment package size and the maximum number of file descriptors. And your request and response body payload cannot exceed 6 MB. The event request body is also limited to 128 KB. The number of concurrent executions is a soft limit, which can be increased upon request. And AWS Lambda is built on the number of times your code is triggered and for each 100 ms of execution time. It's really simple to build your Lambda function. You configure your Lambda environment, then you upload your code and watch it run. 

AWS Lambda use cases include automated backups, processing objects uploaded to S3, event‑driven log analysis, event‑driven transformations, Internet of Things, operating serverless websites. Let's explore a real‑time image processing use case. A customer uploads an image on S3, triggering a Lambda function to process that image immediately. You can use this to transcode videos, thumbnails, index files, process logs, validate your content, and aggregate data in real time. 

The Seattle Times, uses AWS Lambda to resize images for viewing on different devices such as desktop computers, tablets, and smartphones. You can use AWS Lambda and Amazon Kinesis to process real‑time streaming data for application activity tracking, transaction order processing, click stream analysis, data cleansing metrics, generation log filtering, indexing social media analysis, and device data telemetry and metering. We have customers processing billions of data points in real time using AWS Lambda to process historical and live data stored in S3 or streamed from Amazon Kinesis. They can process 100 billion events each single month. You can use AWS Lambda to build your extract, transform, and load pipelines. 

You can also use AWS Lambda to perform data validation, filtering, sorting or other transformations for every data change in a DynamoDB table and load the transformed data to another datastore. Zillow uses AWS Lambda and Amazon Kinesis to track a subset of mobile metrics in real time. They are able to develop and deploy a cost effective solution in just two weeks. 

You can also use AWS Lambda to build your back ends for your IoT devices. You can combine API Gateway with AWS Lambda to easily build your mobile back end. API Gateway makes it really easy for you to authenticate and process those API requests, and AWS Lambda makes it really easy for you to build and develop those rich, personalized app experiences. 

Most of our customers use a microservices back end using AWS Lambda, SNS, and API Gateway to run both their website and their mobile applications. You can also use AWS Lambda to build your web back ends by combining AWS Lambda and other AWS services. 

Developers can build powerful web applications that automatically scale up and down. Those applications run in a highly available configuration across multiple data centers, with zero administrative effort required for scalability, backups, and multi‑data center redundancy. 

So in summary, we like to think of AWS Lambda as the connective tissue for AWS services, from building microservices architectures to running your applications.  