A construct is a way of separating concerns within the cdk app.

- the entry point is the bin folder 
- the lib has the stack configurations
- within the lib folder a new folder called constructs is created to set up the stack configurations and prevent the lib files from becoming too unweildy
- it is best practice to create these contructs to manage stacks