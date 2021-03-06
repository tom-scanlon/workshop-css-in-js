import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img
          className={styles.image}
          src="https://ichef.bbci.co.uk/images/ic/raw/p0bx2qpy.png"
        />
        <h1 className={styles.title}>Your world of Sounds</h1>
        <p className={styles.description}>
          Save shows to listen to later, subscribe to your favourites and get
          fresh recommendations every day.
        </p>
        <button className={styles.liveCta}>Listen Live</button>
        <button className={styles.aodCta}>Play</button>
      </main>
    </div>
  );
}
