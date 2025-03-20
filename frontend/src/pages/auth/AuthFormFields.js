import React from "react";
import styles from "../../styles/AuthFormFields.module.css";
import Form from "react-bootstrap/Form";
import AuthFormErrorMessage from "./AuthFormErrorMessage";

// this compenent is to render the auth form fields
const AuthFormFields = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
  errors,
  changeUsername,
}) => {
  return (
    <>
      <Form.Label
        className={`${
          !changeUsername ? styles.FormLabel : styles.ChangeUsernameLabel
        }`}
      >
        {title}
      </Form.Label>
      <Form.Control
        className={`${
          !changeUsername ? styles.FormInput : styles.ChangeUsernameInput
        } py-2 my-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={12}
        value={value}
        required
        onChange={onChange}
      />
      {/* Error message component */}
      <AuthFormErrorMessage errors={errors} fieldName={name} />
    </>
  );
};

export default AuthFormFields;
