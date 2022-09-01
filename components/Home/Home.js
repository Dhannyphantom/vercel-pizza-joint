import { useState } from "react";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  const [pizza, setPizza] = useState([]);

  return (
    <div className={styles.container}>
      <h2>Welcome to Vercel Pizza Joint</h2>
      <Link
        href={{
          pathname: "/base",
          query: pizza,
        }}
      >
        <button className={styles.link}>Create Your Pizza</button>
      </Link>
    </div>
  );
}
