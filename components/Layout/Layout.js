import Header from "../Header/Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>{children}</section>
    </main>
  );
}
