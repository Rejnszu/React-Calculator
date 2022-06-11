import styles from "./calculator.module.css";
const Calculator = (props) => {
  return <div className={styles.calculator}>{props.children}</div>;
};

export default Calculator;
