import Link from "next/link";
import styles from "./Base.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addBase } from "../../features/pizzaSlice";
import { motion } from "framer-motion";

const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

const containerVariants = {
  from: {
    opactity: 0,
    x: "100vw",
  },
  to: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.4 },
  },
};

const btnContainerVariants = {
  from: {
    x: "-100vw",
  },
  to: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

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

const Base = ({}) => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  return (
    <motion.div
      variants={containerVariants}
      initial="from"
      animate="to"
      className={styles.container}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? styles.active : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.2,
                color: "#f8e112",
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={base}
              onClick={() => dispatch(addBase(base))}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={btnContainerVariants} className={styles.next}>
          <Link href="/toppings">
            <motion.button variants={btnVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
