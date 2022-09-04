import React from "react";
import styles from "./Order.module.css";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
import { reset } from "../../features/pizzaSlice";

const containerVariants = {
  from: {
    opactity: 0,
    x: "100vw",
  },
  to: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      mass: 0.4,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const homeBtnVariants = {
  from: {
    y: 0,
    opacity: 0,
  },
  to: {
    y: 30,
    opacity: 1,
  },
  hover: {
    scale: 1.12,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.4, yoyo: Infinity },
  },
};

const Order = () => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <motion.div
      variants={containerVariants}
      initial="from"
      animate="to"
      whileHover="hover"
      className={styles.container}
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div className={styles.topping} key={topping}>
            &bull; {topping}
          </div>
        ))}
      </motion.div>
      <Link href="/">
        <motion.button
          variants={homeBtnVariants}
          onClick={() => dispatch(reset())}
        >
          Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Order;
