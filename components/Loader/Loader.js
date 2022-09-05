import { motion } from "framer-motion";
import styles from "./Loader.module.css";

const loaderVar = {
  to: {
    x: [-20, 20],
    y: [0, -30],
    boxShadow: ["0px 0px 30px rgb(255, 255, 255)", "0px 0px 8px rgb(0, 0, 0)"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      boxShadow: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

export default function Loader() {
  return (
    <motion.div variants={loaderVar} animate="to" className={styles.loader} />
  );
}
