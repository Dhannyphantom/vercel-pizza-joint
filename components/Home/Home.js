import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
}
