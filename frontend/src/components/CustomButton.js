import React from "react";
import styles from "../styles/CustomButton.module.css";
import Button from "react-bootstrap/Button";

// This component is used to render custom buttons
const CustomButton = ({ text, type = "button", disabled, onClick }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={styles.Button}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
