import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="p-5 pb-0 backdrop-blur-md fixed w-full z-50">
        <Navbar />
      </div>
      <div id="top"></div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
