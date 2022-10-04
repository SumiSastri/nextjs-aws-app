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