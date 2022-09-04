import React from "react";
import styles from "./Order.module.css";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
import { reset } from "../../features/pizzaSlice";

const Order = () => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div className={styles.topping} key={topping}>
          {topping}
        </div>
      ))}
      <Link href="/">
        <motion.button
          animate={{ y: 20 }}
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          onClick={() => dispatch(reset())}
        >
          Home
        </motion.button>
      </Link>
    </div>
  );
};

export default Order;
