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

const containerVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: { duration: 1.5, delay: 1 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="from"
      animate="to"
      exit="exit"
      className={styles.container}
    >
      <h2>Welcome to Vercel Pizza Joint</h2>
      <Link href="/base">
        <motion.button
          variants={btnVariants}
          whileHover="hover"
          className={styles.link}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}
