import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsmobile from "../src/aws-exports"
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

Amplify.configure({ ...awsmobile, ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      <Component {...pageProps} />
    </Authenticator>
  )
}
