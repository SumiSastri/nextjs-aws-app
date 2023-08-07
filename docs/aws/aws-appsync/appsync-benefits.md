# What are the benefits of using AppSync?

Appsync is like a middleware that sits between client-facing apps and other AWS cloud infrastructure. It is the glue that sticks several AWS services together in the backend, just like Amplify is the glue that sticks frontend services to backend servies.

**1. Fast set-up**
AppSync can be quickly configured with the command-line-interface (CLI) connecting your local machine to the cloud and other AWS cloud infrastructure. It provides all the benefits of a managed, cloud-based infrastructure.

**2. Service Integration**
AppSync integrates with several AWS offerings - DynamoDB, Aurora, Elasticsearch, AWS Lambda, to name a few, improving throughput, storage and scalability. Staying within the AWS ecosystem provides the fast setup and integration that AWS offers through interoperable services.

**3. Improved Security**
As Appsync is another layer between the frontend of an app and the backend that unifies and secures data, it can be considered as an additional security layer.
  
Combined with other AWS services, security on GraphlQL can be layered with several levels of data access and authorization depending on the needs of an application.
  
Simple access can be protected by a key and more restrictive permission can be done with AWS-Cognito and IAM using Roles and Scopes. AWS-Cognito is an authentication tool, Identity and Access Management is a service within AWS-Cognito that allows you to create roles for uses and scope out what they can access and what they can not access.
  
Cognito User Pools segments users from authentication. User Pools store user email and passwords, allows authentication with social providers (Facebook, Google+, and Login with Amazon). Machine-to-machine federated authentication is possible with O-Auth2 and enterprise federation with SAML.

Customers can use the Group functionality for logical organization of users and roles as well as OAuth features for application access. This continous separation of concerns in the security layer is what allows layering of security and making it more difficult to hack into the system.

**4. Device Extensibility**
The ability to connect to multiple data sources (SQL, document type etc.) allows data access and data transformations. With GraphQL queries, mutations and resolvers, you have the advantageof immediate updates across multiple clients and devices.

**5. Subscriptions to real-time changes in data**
With AppSync you can set up real-time, event-driven updates with the data-subscription service. The PubSub API wizard allows you to update comments, posts in real-time with this subscription service. GraphQL Subscriptions are simple statements in the application code that tell the service what data should be updated in real-time.

**6. Offline synchronisation support** 
Whenever the client application loses internet access, users can still edit data on the application. And when internet access becomes available, the data is synced for us automatically.

Amplify DataStore powered by AWS AppSync ships with the software and is a queryable on-device DataStore for web, mobile and IoT developers that enables a local-first and familiar programming model to interact with data seamlessly whether you’re online or offline.

The DataStore provides versioning, conflict detection and resolution in the cloud to automatically merge data from different clients as well as provide data consistency and integrity.

  **Observability** - monitoring, analytics, logging and tracing - With AWS AppSync you can easily configure AWS CloudWatch and AWS X-Ray to provide comprehensive logging and tracing for your GraphQL API.

  **Data caching**
