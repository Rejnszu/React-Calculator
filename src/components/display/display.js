import React from "react";
import styles from "./display.module.css";

const Display = (props) => {
  return (
    <div className={styles.display}>
      <p>{props.resultNumber}</p>
      <p>{props.currentNumber}</p>
    </div>
  );
};

export default Display;
