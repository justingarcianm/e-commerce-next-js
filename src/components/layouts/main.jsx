import Head from "next/head";
import Nav from "../nav/index";
import Footer from "../footer/index";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>E-Commerce Store</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Main;
