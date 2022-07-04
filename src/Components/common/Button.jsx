import styles from "./Button.module.css";

function Button({ disabled, children, handleclick }) {
  return (
    <button
      onClick={handleclick}
      disabled={disabled}
      className={styles.button}
      data-testid="button"
    >
      {children}
    </button>
  );
}

export default Button;
