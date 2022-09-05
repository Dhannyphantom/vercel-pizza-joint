import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.css";
import Link from "next/link";
import { reset, setModal } from "../../features/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";

const backdrop = {
  from: {
    opactiy: 0,
  },
  to: {
    opacity: 1,
    transition: { type: "tween", duration: 0.7 },
  },
};

const modal = {
  from: {
    y: "-50vh",
    opacity: 0,
  },
  to: {
    y: "190px",
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 50 },
  },
  exit: {
    y: "-50vh",
  },
};

export default function Modal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.pizza.modal);

  const onStartAgain = () => {
    dispatch(reset());
    // dispatch(setModal(false));
  };

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="from"
          exit="from"
          animate="to"
          className={styles.modal}
        >
          <motion.div variants={modal} className={styles.content}>
            <h4>Do you want to order another pizza?</h4>
            <Link href="/">
              <button onClick={onStartAgain}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
