import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <h2>Welcome to Vercel Pizza Joint</h2>
      <Link href="/base">
        <motion.button animate={{ scale: 1.5, y: 20 }} className={styles.link}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}
