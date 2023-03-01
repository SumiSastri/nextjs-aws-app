# What is AWS AppSync

AppSync is an API interface that allows you to query data using the GraphQL query language as well as REST API calls. In the configuration you can choose which query option you require either GraphQL or REST.

AppSync is an AWS product that quickly syncs data sent from the frontend (app) to the backend (data stores).

<img src="docs/assets/nextJs-auth-architecture.png" alt="NextJs and AWS Authorisation App Architecture Diagram" height="350"/>

In this architecture diagram, see how AppSync is an additional layer between Amplify and the Dynamo DB database. Also note that GraphQL is the interface and query language used to call the authentication API from Cognito. Amplify is the glue that sticks it all together.

In an integration environment the frontend data can be streamed into various channels where APIs are called - a database/ an email marketing service/ a fulfilment warehouse management system/ a call center/ a customer-relationship-management service.

Instead of querying this data directly, using AppSync there is another layer of security introduced.

See architecture diagram on the AWS docs [https://aws.amazon.com/appsync/]

The data that is sent in the form of an HTTP request. The request header is sent to various endpoints and gets a response back from the endpoints. The response if successful flows back into the front end to be consumed and this is done via the AppSynch layer.

Since in the integration environment, several APIs may be called, the option of GraphQL as a query language is preferred by some as it requires only a single data call in the query.

AppSync from AWS ships with serverless GraphQL allowing the developers to access data from one or more sources or microservices with a single network request and prebundled query-response configurations.

GraphQL schemas with their associated resolvers are compiled and then query AWS backend services - Aurora, DynamoDb, AWS Lambda, HTTP and local pub/sub calls into other AWS services that are deeper into the backend or to public API calls. This abstraction gives another layer of security.

Check the official video: [https://youtu.be/Rz_wK6z8kMU]

AWS's AppSync therefore is a managed service for GraphQL calls - a managed service means that AWS does all the heavy lifting on GraphQL by pre-compiling your queries and mutations as you define them as well as shipping them in the format required in the HTTP call-response cycle.

In this repo AppSync is used to

1. Create DynamoDB tables
2. Create GraphQL queries and mutations
3. Access the S3 bucket for static images

But it can be used to connect to many more services.
