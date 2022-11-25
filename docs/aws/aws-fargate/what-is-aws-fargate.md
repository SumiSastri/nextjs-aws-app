AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. AWS Fargate is compatible with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

Docs[https://aws.amazon.com/fargate/]

Fargate is only one of many AWS Container services See more [https://aws.amazon.com/containers/?nc1=f_cc]

A container helps you abstract your code and isolate it before deploying it to any cloud service be it aws or other cloud service providers.

Container management tools can be broken down into three categories: registry, orchestration, and compute. Registry - a store and manage your container images;  Orchestration - manages when and where your containers run; Compute - engines to power your containers. 

Fargate is a serverless way to enable containerised applications using code as infrastructure. 

You can deploy your app in a cluster - each cluster will have tasks running with rules on how they work. Several tasks can run in several clusters. Each cluster with tasks that have common rules, these are called services within AWS.

The app in this demo has a public (with an application load balancer) and private subnet (communicated to by public subnet) which in turn has 1 container (a webservice) with a set of rules or services.