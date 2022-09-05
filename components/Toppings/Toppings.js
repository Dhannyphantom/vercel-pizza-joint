import React from "react";
import Link from "next/link";
import styles from "./Toppings.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTopping } from "../../features/pizzaSlice";
import { motion, AnimatePresence } from "framer-motion";

let toppings = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
];

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
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const btnVariants = {
  from: {
    x: "-100vw",
    y: 0,
  },
  to: {
    x: 0,
    y: 20,
  },
  hover: {
    scale: 1.12,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.4, yoyo: Infinity },
  },
  exit: { y: -15, opacity: 0 },
};

const Toppings = () => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <motion.div
      variants={containerVariants}
      initial="from"
      animate="to"
      exit="exit"
      className={styles.container}
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? styles.active : "";
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
              key={topping}
              onClick={() => dispatch(addTopping(topping))}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      <AnimatePresence>
        {pizza.toppings[0] && (
          <Link href="/order">
            <motion.button
              variants={btnVariants}
              exit="exit"
              whileHover="hover"
              className={styles.orderBtn}
            >
              Order
            </motion.button>
          </Link>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Toppings;
