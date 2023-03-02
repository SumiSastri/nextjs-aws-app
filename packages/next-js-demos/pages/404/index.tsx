import Head from 'next/head'

import NavBackToHome from '../../components/back-to-home'
import styles from '../../styles/Home.module.css'

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next js demos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    Oops page not found
                </h2>
            </main >
            <footer className={styles.footer}>
                <NavBackToHome />
            </footer>
        </div >
    )
}
export default PageNotFound;