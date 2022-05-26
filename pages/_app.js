import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";
import Meta from "../components/utilities/meta-seo";
import { GetRequest } from "../components/utilities/FetchData";

function MyApp({ Component, pageProps, props }) {
  return (
    <>
      <Meta
        title="Welcome to mirror institute, Best coaching classes in Nadiad, Gujarat"
        desc="Mirror institute has been established in the year 2005
under the guideline of parents, for their ward,
since then we are catering needs of the parents
as well as students to give them the state
of the art education."
        favicon="/favicon.ico"
      />
      <div className="p-5 pb-0 backdrop-blur-md fixed w-full z-50">
        <Navbar
          navLinks={props.data.NavLinks}
          navLoginButton={props.data.NavLoginButton}
        />
      </div>
      <div id="top"></div>
      <Component {...pageProps} />
      <Footer
        Footer={props.data.Footer}
        FooterColumns={props.data.FooterColumns}
        FooterCredits={props.data.FooterCredits}
      />
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  let data = await GetRequest("/global/layout");
  return {
    props: {
      data,
    },
  };
};
