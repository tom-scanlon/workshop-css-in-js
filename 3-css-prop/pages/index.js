// Use emotion's jsx function instead of React's - we need this to make use of the 'css' prop.
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Head from "next/head";

const container = {
  background:
    "linear-gradient(104deg, #1e0505 2%,#380400 27%,#800000 68%,#cc2c00 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const image = {
  width: "50%",
  marginBottom: "48px",
};

const main = {
  padding: "32px",
  maxWidth: "768px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const title = {
  fontSize: "44px",
  color: "#fefefe",
  marginTop: "0",
  marginBottom: "32px",
};

const description = {
  fontSize: "16px",
  color: "#fefefe",
  textAlign: "center",
  marginTop: "0",
  marginBottom: "32px",
};

const liveCta = {
  width: "300px",
  height: "48px",
  border: "none",
  background: "#00a5a5",
  color: "white",
  fontSize: "18px",
  fontWeight: "700",
  transition: "300ms",
  marginBottom: "8px",
};

const aodCta = {
  width: "300px",
  height: "48px",
  border: "none",
  background: "#fa6400",
  color: "white",
  fontSize: "18px",
  fontWeight: "700",
  transition: "300ms",
};

export default function Home() {
  return (
    <div style={container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={main}>
      <img
          style={image}
          src="https://ichef.bbci.co.uk/images/ic/raw/p0bx2qpy.png"
        />
        <h1 style={title}>Your world of Sounds</h1>
        <p style={description}>
          Save shows to listen to later, subscribe to your favourites and get
          fresh recommendations every day.
        </p>
        <button style={liveCta}>Listen Live</button>
        <button style={aodCta}>Play</button>
      </main>
    </div>
  );
}
