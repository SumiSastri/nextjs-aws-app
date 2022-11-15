App sync is an AWS product that simplifies the process of developing applications. It ships with serverless GraphQL as an alternative to REST to access data from one or more sources or microservices with a single network request. AppSync is a managed service that uses GraphQL to make it easy for applications to get exactly the data they need - a managed service means that AWS does all the heavy lifting on GraphQL.

Official docs [https://eu-west-2.console.aws.amazon.com/appsync/home?region=eu-west-2#/]

Advantages
__Security__ -  unified secured data - AWS layers security on GraphlQL with several levels of data access and authorization depending on the needs of an application. Simple access can be protected by a key and more restrictive permission can be done with AWS IdAM using Roles. Additionally, AWS AppSync integrates with Amazon Cognito User Pools for email and password functionality, social providers (Facebook, Google+, and Login with Amazon), and enterprise federation with SAML. Customers can use the Group functionality for logical organization of users and roles as well as OAuth features for application access.
__AWS ecosystem__ 
App sync is like a middleware that sits between client-facing apps and other AWS infra. It is the glue that sticks several AWS services to a GrapqhQL API
- DynamoDb - A document based database (noSQL)
- AMZ Aurora - ships with MySQL and PostgreSQL compatibility
- S3
- Cognito for IdAM (authentication)
__Data caching__
__Extensibility__ - multiple data sources (SQL, document type etc.) Classic GraphQL advantages of immediate updates across clients and devices. 
__Subscriptions__ - real-time event-driven APIs to subscribed clients (posts, comments etc) using AWS AppSyncs PubSub API wizard. GraphQL Subscriptions are simple statements in the application code that tell the service what data should be updated in real-time.
__Offline support__ due to the AWS ecosystem, Amplify DataStore powered by AWS AppSync ships with the software and is a queryable on-device DataStore for web, mobile and IoT developers that enables a local-first and familiar programming model to interact with data seamlessly whether you’re online or offline. The DataStore provides versioning, conflict detection and resolution in the cloud to automatically merge data from different clients as well as provide data consistency and integrity.
__Fast set-up & scalability__
__CLI from local to cloud__
__Observability__ - monitoring, analytics, logging and tracing - With AWS AppSync you can easily configure AWS CloudWatch and AWS X-Ray to provide comprehensive logging and tracing for your GraphQL API.


Further reading:
What is AppSync - docs [https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html]
