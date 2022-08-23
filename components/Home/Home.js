import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
