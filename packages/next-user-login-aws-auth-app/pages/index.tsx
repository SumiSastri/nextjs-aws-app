import Head from 'next/head'

import Navbar from "../components/NavBar"

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-start">
      <Head>
        <title>Nextjs with AWS Auth App</title>
      </Head>
      <main>
        <Navbar />
        <div >
          <h1 className="d-flex flex-row justify-content-center">
            NextJS App with AWS Auth
          </h1>
          <h4 className="d-flex flex-row justify-content-center">Demo of AWS Amplify and Cognito</h4>
        </div>
      </main>
    </div>
  )
}
