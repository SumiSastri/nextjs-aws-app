import { Construct } from 'constructs';
import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import * as path from 'path';


export interface HelloFunctionProps  {}

export class HelloFunctionHandler extends Construct {
    constructor (scope: Construct, id: string, props?: HelloFunctionProps){
        super (scope, id);

const helloFunction = new Function(this, "HandleHelloFunction", {
  runtime: Runtime.NODEJS_16_X,
  code: Code.fromAsset(path.join(__dirname, '../api/hello-function-handler')),
  handler: `helloFunctionHandler.handler`,  
});
    }
}

