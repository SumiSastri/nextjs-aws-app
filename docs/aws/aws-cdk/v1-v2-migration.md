# AWS CDK Workflow changes to migrate v1 to v2

## INSTALL

1.First key change V2: __AWS CDK v2 consolidates the stable parts of the AWS Construct Library, including the core library, into a single package__

Task list:

- remove all v1 packages and any lurking configs and replace with v2 and change imports
- uninstall v1
- Delete `package-lock.json` file
- Delete `node_modules` folder
- In `package.json` file it is easier to manually remove the v1 files (See comment)
- In `package.json` manually paste the right version of v2 aws-cdk library and constructs as recommended by AWS - lowest version for highest interoperability.

[See recommendation link](https://github.com/aws/aws-cdk-rfcs/blob/master/text/0192-remove-constructs-compat.md#release-notes)
(See comment)

- Change the cdk.json file
(See comment)

- Install v2 and specify versions if required
 `npm install aws-cdk-lib@^2.72.0 --language typescript`
 `npm install constructs@^10.0.0`

- Constructs which are in experimental mode need to be installed separately as the docs state __Experimental modules, where we're still working with the community to develop new L2 or L3 constructs, are not included in aws-cdk-lib__

- These experimental modules are called `alphas`, many Level2 and Level3 constructs need to be imported as `alpha` modules (see comment)

eg:
This is an alpha module - `@aws-cdk/aws-amplify-alpha`
Docs [https://docs.aws.amazon.com/cdk/api/v2/docs/aws-amplify-alpha-readme.html]

- Re-install node modules

If you want to update `npm` globally `npm install npm -g`
[Installing node and npmdocs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

You can then run in the package `npm install --y`

Check the `package.json` file in demo repo for reference.

In this repo, an additional re-installation is required in the `packages/aws-cdk-demo-app/api/get-music-assets`

Lerna as a package manager can be unpredictable and may not update all packages when you run `npx lerna bootstrap` in root

## RE-CONFIGURE

2.Second key change V2: __The Construct class has been extracted from the AWS CDK into a separate library, along with related types.__

- Remove legacy imports of the deprecated AWS Core library - the correct imports are

`import * as cdk from 'aws-cdk-lib';` 
`import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";`
`import { App, Stack, StackProps } from 'aws-cdk-lib';`

- Go through the import list and change the imports. Look for all instances of `"@aws-cdk/core"` and change imports as above. An easy way is to copy the suffix `aws-cdk-lib` and overwrite the old suffix `@aws-cdk`. This should work for most - if it does not debug by researching specific issue.

- Extract the construct method and declare the module initialisation as described by docs, as the method been decoupled from  AWS Core librart methods

`import { Construct } from "constructs";`

At this stage ensure all imports are correct as each module depends on the correct imports to function properly

Debug with further research on any specific issues.

For example if you have AppSync installed with V1, the GraphQL `Schema` is now called `SchemaFile` and you can only fix these specific package challenges by checking the docs, or open issues - of which there are many

eg: [See issue 24701](https://github.com/aws/aws-cdk/issues/24701)

## TEST AND VALIDATE

3.The third key change: __Assert as the main testing library has been deprecated__

There is a checklist of deprecated libraries - this testing one is only an example - the full list is in the [Deprecated APIs](https://github.com/aws/aws-cdk/blob/v1-main/DEPRECATED_APIs.md) documentation. The steps are similar but methods and execution may be different.

- Install the V2 assertions packages `npm i @aws-cdk/assertions` as the `@aws-cdk/assert` has been deprecated[The assertions package is available on](https://www.npmjs.com/package/@aws-cdk/assert)

_A gotcha_ Do not uninstall the package till you fix all the tests - the package will fail to build

- Import the correct methods that ship with the testing library

`import { Template } from "aws-cdk-lib/assertions";`

- instantiate the stack and reassign it to the `template` method - this method is instantiated after the Construct mocked - see docs for example

- run each test in your stack individually to debug and fix errors
eg: You may discover that the old  `findResources()` assertion has changed to `hasResourceProperties()` or fits the test better

- You are very like to find type mismatches at this stage

- Fix all tests and then bootstrap and build

## RE-BUILD

4.The fourth key change: __ES build is use as a package bundler and builder__

Check esbuild installed in root not in package if you have a monorepo.

`npm run build` or `npx lerna bootstrap` or you monorepo bootstrap command

Check build and then run `cdk bootstrap`
Run `cdk diff`
Run `cdk deploy` to the next environment - if you are in local/ PR environment to integration, then to staging and your final production environment - the above steps may need to be replicated in each environment.

## DESTROY

Review any changes required for Destroy work flows and alarms/ monitoring, some of these may be configured with Github Actions.

### Some useful reading and videos

[AWS notification](https://aws.amazon.com/blogs/developer/version-1-of-the-aws-cloud-development-kit-aws-cdk-is-now-in-maintenance-mode/)
[AWS guide for this upgrade](https://docs.aws.amazon.com/cdk/v2/guide/migrating-v2.html)
[API reference for migration guiderails](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
[Testing docs on the assertion library](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html)
[Some challenges with esbuild](https://esbuild.github.io/getting-started/#bundling-for-node)
[Deprecated APIs](https://github.com/aws/aws-cdk/blob/v1-main/DEPRECATED_APIs.md)
[Migrating to the assertions library for testing](https://github.com/aws/aws-cdk/blob/v1-main/packages/%40aws-cdk/assertions/MIGRATING.md)
[YouTube - Marcia Villalba Foobar](https://www.youtube.com/watch?v=_kf4ajni3Qk)
[Amplify and CDK V2 docs which may help debugging](https://docs.amplify.aws/cli/migration/aws-cdk-migration/)
[Amplify Beta](https://aws.amazon.com/blogs/mobile/use-aws-cdk-v2-with-the-aws-amplify-cli-extensibility-features-beta/)
[Documentation of the V2 asserts library](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html)
[More on the v2 assertions library](https://github.com/aws/aws-cdk/blob/v1-main/packages/%40aws-cdk/assertions/MIGRATING.md)