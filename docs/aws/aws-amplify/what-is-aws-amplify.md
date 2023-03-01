Amplify is a development framework that helps you make full stack apps. You can create web and mobile apps connecting a front-end framework or library, such as Angular/ React or Next and add backend features like auth, data, aiml for the backend and connect to the AWS Cloud services.

The Amplify platform includes tools and services that enable developers to connect apps, deploy static web apps, manage and create applications for AWS Cloud. It provides authentication, analytics, storage, caching, ui-components and API-creation/management. You can use either REST or GraphQL queries for your HTTP calls.

The command-line-tool (CLI) helps you make these connections programmatically. The Amplify CLI you get a connection between the frontend frameworks of the App and the backend Cloud Services of AWS with a host of developer tools. The CLI helps configurethe backend.

Eg: - `amplify add name of service` - adds the name of an AWS service you want to configure to your project.

More on [https://aws.amazon.com/amplify/]
AWS You Tube Video[https://www.youtube.com/watch?v=7ekxPmVNV8k&t=11s]

You can also programatically create the Amplify environment which is the layer between the front-end applications and the backend data layer.

Amplify isn't an API gateway but an environment in the network layer to provide connectivity specifically with AWS backend services with frontend libraries and frameworks.

Amplify services

1. Amplify CLI - as well as its own management console (Amplify Console not the AWS Console). There are 175 backend services that can be accessed programatically with the CLI. As seen in the above example by running a short command - `amplify add name of service` you can add any of these servies

2. Amplify Libraries - in addition to access to the 175 plus resources in the AWS Cloud with the AWS CLI, Amplify also has specific libraries to facilitate safe authentication, storage of files, data stocking, serverless APIs, analytics, push notifications, AR/VR, and multiple other applications’ features

- Amplify UI components - the authentication-requirement component for example is a pre-built sign-in form that you can integrate into any front-end library like Next/ React.

- Amplify Studio - a workflow tool

Advantages and Disadvantages Blog: [https://medium.com/analytics-vidhya/what-is-aws-amplify-advantages-and-disadvantages-of-aws-amplify-49ddc4831467]

1. The most significant advantage of this tool is that it allows you to quickly and securely integrate a wide range of functions ranging from API to AI. Distributed, cross-user information makes for a good end user experience across different devices as well as apps. Interaction with bots, deep learning techs like Alexa, automated customer chat support with chatbots

2. Mobile and web apps authentication, quick backend updates esp useful for mobile, quick deploy

3. Prebuilt UI for sign ups as well as user authentication, social media authentication, as well as pub-sub messages to be sent between app instances to create interactive real-time conversations

4. Pay as you go model, store and sync data with AppSync, S3 online and offline

5. User analytics - user sessions, webpage metrics - Pinpoint/ Kinesis additional tools - for push notifications via email, texts quick multi-channel communications with customers

Disadvantages

1. Breaking changes with updates

2. Need for AWS trained devs

3. Cost and disadvantage of managed services - lack of control

4. Limited control over traffic distribution - impacts on latency and traffic spikes as you can not distribute load balancers
