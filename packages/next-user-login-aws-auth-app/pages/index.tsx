import Head from 'next/head'
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-start">
      {/* meta */}
      <Head>
        <title>Nextjs with AWS Auth App</title>
      </Head>
      {/* main */}
      <NavBar />
      <div >
        <h4 className="d-flex flex-row justify-content-center p-4">Welcome you have successfully signed in as an authenticated user</h4>
      </div>
    </div>
  )
}
export default Home;
