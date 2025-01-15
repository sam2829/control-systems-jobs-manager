import React from "react";
import styles from "../../styles/AuthFormFields.module.css";
import Form from "react-bootstrap/Form";

// this compenent is to render the auth form fields
const AuthFormFields = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <Form.Label className={`${styles.FormLabel}`}>{title}</Form.Label>
      <Form.Control
        className={`${styles.FormInput} py-2 my-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={12}
        value={value}
        required
        onChange={onChange}
      />
    </>
  );
};

export default AuthFormFields;
