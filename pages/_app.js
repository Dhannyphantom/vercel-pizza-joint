import Layout from "../components/Layout/Layout";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, router, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}

export default MyApp;
