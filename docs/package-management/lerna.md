# Package management

Packages are managed in a monorepo with lerna

Scaffolding
Install lerna in root n`pm install lerna --save-dev`
Initialise `npx lerna init`

You should have an empty packages folder in root as well as a `lerna.json` and `package.json` file. 

In the `package.json` as well as the `lerna.json` add a version "version": "1.0.0". Add a `.gitignore` file to ignore node modules

Update all packages in the app in root with `npx lerna bootstrap`

Run build in root `npm run build`

`rm package-lock.json` - remove package-lock.json file
`rm -rfv node_modules` - remove recursive force verbose (rvf) node_modules
`npm cache clean --force` - clean cache

```java

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```

install & use nvm node v 18

`nvm install 18`
`nvm use 18`

reinstall node_modules with legacy dependencies

`npm install --legacy-peer-deps` or
`npm config set legacy-peer-deps true`
