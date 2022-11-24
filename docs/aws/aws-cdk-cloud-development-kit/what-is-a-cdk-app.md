The CDK App V2 only 1 stable version to install available since Dec 2021. It uses Node as an environment and enables code to be written Cloud Formation templates.

It is a stack that co-ordinates the lifecycles of the stacks nested in it. CDK stacks are 1-2-1 equivalents of the Cloud Formation Stacks. The `cdk synth` synthesises all the templates in the Cloud Formation platform. Then you can deploy using `cdk deploy`.

The CDK App has a root construct - or programmatic way of orchestrating the lifecyles of the stacks and resources within it.

The lifecycle is Construct -> Prepare -> Validate -> Synthesize -> Deploy 
Docs[https://docs.aws.amazon.com/cdk/v2/guide/apps.html]