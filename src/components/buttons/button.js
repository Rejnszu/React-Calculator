import styles from "./button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      value={props.value}
      type="button"
      className={`${styles.button} ${props.classes}`}
    >
      {props.value}
    </button>
  );
};

export default Button;
