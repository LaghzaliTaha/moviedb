import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>the movie db</title>
        <meta name="description" content="next reactjs app for exploring movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the movies explorer
        </h1>
          <div className={styles.grid}>
              <a className={styles.card}>
                  <h2>Movie title</h2>
                  <p>Movie description.</p>
              </a>
          </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="digital squad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
