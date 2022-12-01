import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';
import awsmobile from "../src/aws-exports"
import type { AppProps } from 'next/app'

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

Amplify.configure({ ...awsmobile, ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator className="d-flex flex-row justify-content-center col-md-6 mt-5">
      <Component {...pageProps} />

    </Authenticator>
  )
}
