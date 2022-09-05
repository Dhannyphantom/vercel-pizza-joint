import { useEffect } from "react";
import styles from "./Order.module.css";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setModal } from "../../features/pizzaSlice";

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
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const childVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const Order = () => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  const onShowModal = () => {
    setTimeout(() => {
      dispatch(setModal(true));
    }, 2000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="from"
      whileHover="hover"
      exit="exit"
      animate="to"
      className={styles.container}
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div onAnimationComplete={onShowModal} variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div className={styles.topping} key={topping}>
            &bull; {topping}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
