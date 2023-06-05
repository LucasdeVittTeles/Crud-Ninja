import styles from "./button.module.css";

const Button = ({ type, text, backgroundColor, color, handleOnClick }) => {
  return (
    <button
      className={styles.button}
      type={type}
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={(e) => {
        e.preventDefault();
        handleOnClick();

      }}
    >
      {text}
    </button>
  );
};

export default Button;
