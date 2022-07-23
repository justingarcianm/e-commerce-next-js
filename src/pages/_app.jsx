import "../styles/globals.css";
import Main from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";

import { CartContext } from "../context/cart.context";

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Main>
        <AnimatePresence>
          <Component {...pageProps} />;
        </AnimatePresence>
      </Main>
    </CartContext>
  );
}

export default MyApp;
