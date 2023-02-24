import Head from 'next/head'
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-start">
      <Head>
        <title>Nextjs with AWS Auth App</title>
      </Head>
      <NavBar />
      <div >
        <h6 className="d-flex flex-row justify-content-center p-4">Welcome to this demo which allows authenticated users to sign-in and sign-out.</h6>
      </div>
    </div>
  )
}
export default Home;
