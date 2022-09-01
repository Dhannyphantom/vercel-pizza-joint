import React from "react";
import Link from "next/link";
import styles from "./Toppings.module.css";

let toppings = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
];

const Toppings = ({ addTopping, pizza = { toppings: "mushrooms" } }) => {
  return (
    <div className={styles.container}>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? styles.active : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link href="/order">
        <button className={styles.orderBtn}>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
