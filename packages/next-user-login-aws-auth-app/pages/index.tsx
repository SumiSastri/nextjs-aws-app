import Head from 'next/head'

import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-start">
      <Head>
        <title>Nextjs with AWS Auth App</title>
      </Head>
      <NavBar />
      <div >
        <h1 className="d-flex flex-row justify-content-center mt-5 p-5">
          NextJS App with AWS Auth
        </h1>
        <h4 className="d-flex flex-row justify-content-center">Demo of AWS Amplify and Cognito</h4>
        <h6 className="d-flex flex-row justify-content-center p-4">Welcome to this demo which allows authenticated users to sign-in and sign-out.</h6>
      </div>
    </div>
  )
}
