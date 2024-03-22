import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Jika Anda membutuhkan JS Bootstrap
import "@/styles/globals.css"; // Jika Anda memiliki file CSS global
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
