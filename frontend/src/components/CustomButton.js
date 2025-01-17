import React from "react";
import styles from "../styles/CustomButton.module.css";
import Button from "react-bootstrap/Button";

// This component is used to render custom buttons
const CustomButton = ({ text, type = "button" }) => {
  return (
    <Button type={type} className={styles.Button}>
      {text}
    </Button>
  );
};

export default CustomButton;
