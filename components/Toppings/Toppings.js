import React from "react";
import Link from "next/link";
import styles from "./Toppings.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTopping } from "../../features/pizzaSlice";
import { motion } from "framer-motion";

let toppings = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
];

const Toppings = () => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
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

      {pizza.toppings[0] && (
        <Link href="/order">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className={styles.orderBtn}
          >
            Order
          </motion.button>
        </Link>
      )}
    </div>
  );
};

export default Toppings;
