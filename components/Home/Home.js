import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Welcome to Vercel Pizza Joint</h2>
      <Link href="/base">
        <button className={styles.link}>Create Your Pizza</button>
      </Link>
    </div>
  );
}
