Heroku is a cloud hosting platform that supports NodeJs builds

Details required for a Heroku account - email, password,
MFA or authentication through an authenticator app for further security is also possible

Sign into account and create new app
Go to the deploy tab
Install Heroku-Git CLI [https://devcenter.heroku.com/articles/heroku-clis]
`curl https://cli-assets.heroku.com/install.sh | sh` - admin rights required to install
It can be installed as a global npm package with `npm install -g heroku` - not the best method as it may have
version/ update conflicts
Check installation `heroku --version`
Login to Heroku `heroku login`
In root create a Procfile - add `web: node index.js` 
More about the Procfile [https://devcenter.heroku.com/articles/procfile]

- Create a pre-deploy environment (branch) clean up and fix for deploy

- Add Procfile `web: node server/index.js`
- Change package json - the worker binds the port and prevents the port-binding error

```
"scripts": {
    "start": "npm run build && node server/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "worker": "node server/index.js",
  ```
- Change server to

```
app.listen(process.env.PORT || 4000, '0.0.0.0', () => {
  console.log(`NEXT-JS_AWS_APP: Express server connected`.green.underline.bold);
});
```
- Add dotenv config to heroku in settings


The CLI has slightly different commands to git
- `git add .` to add
- `git commit -am "Add something"` to commit - commit message flag is am not just m
- `git push heroku HEAD:master`  to push

Some debugging articles
[https://devcenter.heroku.com/articles/node-best-practices#only-git-the-important-bits]

Remove accidently added node modules if .gitignore does not work

- `git rm -r --cached node_modules`
- `git commit -am 'ignore node_modules'`
- `heroku logs --tail` check logs
- `heroku logs -n 200` 

The r-10 error -failing to bind the port
[https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error]

Stack overflow debugging:
[https://stackoverflow.com/questions/31092538/heroku-node-js-error-r10-boot-timeout-web-process-failed-to-bind-to-port-w]