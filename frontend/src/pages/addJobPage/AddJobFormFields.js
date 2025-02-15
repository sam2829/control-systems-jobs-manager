import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/AddJobFormFields.module.css";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

// component to render Add job form fields
const AddJobFormFields = ({
  title,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  errors,
  as,
  rows,
  min,
  fieldName,
}) => {
  return (
    <>
      <Form.Label className={styles.FormLabel}>{title}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.FormInput} py-2 my-2`}
        as={as}
        rows={rows}
        min={min}
        required
      />
      {/* Error message component */}
      <AuthFormErrorMessage errors={errors} fieldName={fieldName} />
    </>
  );
};

export default AddJobFormFields;
