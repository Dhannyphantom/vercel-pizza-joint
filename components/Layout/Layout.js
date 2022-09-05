import Header from "../Header/Header";
import styles from "./Layout.module.css";

import Modal from "../Modal/Modal";

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Header />
      <Modal />
      <section className={styles.section}>{children}</section>
    </main>
  );
}
