import React from "react";
import styles from "./Order.module.css";

const Order = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
