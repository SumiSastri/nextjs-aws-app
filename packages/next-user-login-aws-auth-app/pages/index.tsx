import Head from 'next/head'

import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-start">
      {/* meta */}
      <Head>
        <title>NextJs with AWS Auth</title>
      </Head>
      {/* main */}
      <main>
        <div >
          <NavBar />
          <h4 className="d-flex flex-row justify-content-center p-4">Welcome you have successfully signed in as an authenticated user</h4>
        </div>
      </main>
    </div>
  )
}
export default Home;
