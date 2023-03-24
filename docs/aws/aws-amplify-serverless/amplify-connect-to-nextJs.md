---
layout: default
title: AWS Amplify
parent: aws-amplify-serverless
grand_parent: aws
---

**Mark-up**

Styles

`npm install react-bootstrap bootstrap` bootstrap styling to be added to `app.tsx` at root

Read handling bootstrap integration with NextJS (as this framework ships with its own CSS)
[https://blog.logrocket.com/handling-bootstrap-integration-next-js/]

There are some conflicts to be resolved with `eslint`

```
// Create a .babelrc in your root folder adding this
{
  "presets": ["next/babel"],
  "plugins": []
}
// Then replace current code on .eslintrc with this
{
  "extends": ["next/babel"]
}
```

In the front end to connect local to the AWS cloud:

- In root of the next-js app add the Authenticator HOC (see `packages/next-user-login-aws-auth-app/pages/_app.tsx`)

- import the amplify library

- import the React-HOC (Higher Order Component) `Authenticator` from the AWS Amplify ui-component library and the related styles, you can also override styles and use bootstrap. The higher order component `Authenticator` wraps your component with authentication and auth-routes.

- add the `amplify.configure({})` method and wrap all the components in the app with the `Authenticator` React-HOC

NextJS has a slightly different config (see code below)

The Authenticator HoC once set up provides you with an easy way to both create and verify new users in your Cognito user pool.

```
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';
import awsmobile from "../src/aws-exports"
import type { AppProps } from 'next/app'
// styles in root
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

Amplify.configure({ ...awsmobile, ssr: true })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Authenticator className="d-flex flex-row justify-content-center col-md-6 mt-5">
      <Component {...pageProps} />
    </Authenticator>
  )
}

export default App;
```

- Wrap the Navbar component and use the `Auth` and `withAuthenticator` methods - add the `handleSignOutSubmit` and check if the signin and signout works as expected - to sign in you need to create your first user with a valid email address. You will get an authentication code which you can use.

- These blogs help you set up the ui in the app
  - Blog: Dev.to [https://dev.to/codebeast/authentication-in-a-nextjs-app-with-aws-amplify-2057]
  - React docs [https://ui.docs.amplify.aws/react/connected-components/authenticator]
