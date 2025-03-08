import React from "react";
import styles from "../styles/CustomButton.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// This component is used to render custom buttons
const CustomButton = ({
  text,
  type = "button",
  disabled,
  onClick,
  goBackButton,
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={styles.Button}
      onClick={onClick}
      // if goBackButton prop is present it lets the button
      // act as go back instead of cancel
      as={goBackButton ? Link : null}
      to={-1}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
