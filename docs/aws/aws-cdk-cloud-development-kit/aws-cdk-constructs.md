A construct is a way of separating concerns within the cdk app.

- the entry point is the bin folder 
- the lib has the stack configurations
- within the lib folder a new folder called constructs is created to set up the stack configurations and prevent the lib files from becoming too unweildy
- it is best practice to create these contructs to manage stacks

Levels of constructs

Level 0 - Basic Resource (no type)
Level 1 - Cloud Formation Resource - prefixed with Cfn (Cloud formation network)
Level 2 - Include helper methods and defaults an extension of Level 1 (Some services do not have Level 2 constructs which are faster and reduce deploy times) eg: DynamoDB has level 2 constructs
Level 3 - Combination of Constructs - intermingling of 1,2,3