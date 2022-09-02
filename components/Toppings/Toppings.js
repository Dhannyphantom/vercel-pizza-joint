import React from "react";
import Link from "next/link";
import styles from "./Toppings.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTopping } from "../../features/pizzaSlice";

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
            <li key={topping} onClick={() => dispatch(addTopping(topping))}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      {pizza.toppings[0] && (
        <Link href="/order">
          <button className={styles.orderBtn}>Order</button>
        </Link>
      )}
    </div>
  );
};

export default Toppings;
