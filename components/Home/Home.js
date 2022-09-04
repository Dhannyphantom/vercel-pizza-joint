import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const btnVariants = {
  to: {
    y: 30,
  },
  hover: {
    scale: 1.12,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.4, yoyo: Infinity },
  },
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className={styles.container}
    >
      <h2>Welcome to Vercel Pizza Joint</h2>
      <Link href="/base">
        <motion.button
          variants={btnVariants}
          animate="to"
          whileHover="hover"
          className={styles.link}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}
