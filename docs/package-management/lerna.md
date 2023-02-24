# Package management

Packages are managed in a monorepo with lerna

Scaffolding
Install lerna in root n`pm install lerna --save-dev`
Initialise `npx lerna init`

You should have an empty packages folder in root as well as a lerna.json and package.json file. In the `package.json` as well as the `lerna.json` add a version "version": "1.0.0". Add a .gitignore file to ignore node modules

Update all packages in the app in root with `npx lerna bootstrap`

Run build in root `npm run build`
