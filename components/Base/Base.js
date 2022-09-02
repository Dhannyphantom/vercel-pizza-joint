import Link from "next/link";
import styles from "./Base.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addBase } from "../../features/pizzaSlice";

const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

const Base = ({}) => {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? styles.active : "";
          return (
            <li key={base} onClick={() => dispatch(addBase(base))}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className={styles.next}>
          <Link href="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
