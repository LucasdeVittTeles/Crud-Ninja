import styles from "./button.module.css";

const Button = ({ type, text, backgroundColor, color, handleOnClick }) => {
  console.log(handleOnClick);

  return (
    <button
      className={styles.button}
      type={type}
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={() => handleOnClick()}
    >
      {text}
    </button>
  );
};

export default Button;
