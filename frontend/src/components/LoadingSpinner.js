import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/LoadingSpinner.module.css";

// component to render loading spinner on page or button
const LoadingSpinner = ({ buttonSpinner }) => {
  return (
    <>
      {/* main page spinner */}
      {!buttonSpinner && (
        <div className={styles.SpinnerContainer}>
          <Spinner animation="grow" className={styles.Spinner} />
        </div>
      )}
      {/* button spinner */}
      {buttonSpinner && (
        <Spinner animation="grow" className={styles.SpinnerButton} />
      )}
    </>
  );
};

export default LoadingSpinner;
