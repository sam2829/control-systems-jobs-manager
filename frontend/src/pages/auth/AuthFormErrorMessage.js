import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/AuthFormErrorMessage.module.css";

// this component is for rendering error messages in auth forms
const AuthFormErrorMessage = ({ errors, fieldName = "non_field_errors" }) => {
  return (
    errors &&
    errors[fieldName] && (
      <Alert className={`${styles.ErrorMessage} mt-3`} variant="warning">
        {errors[fieldName].map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </Alert>
    )
  );
};

export default AuthFormErrorMessage;
