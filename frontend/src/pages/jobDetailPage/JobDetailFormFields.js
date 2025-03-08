import React from "react";
import { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/JobDetailFormFields.module.css";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

// component to render edit form fields
const JobDetailFormFields = ({
  title,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  disabled,
  errors,
  as,
  rows,
  min,
  fieldName,
  quote = false,
}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (quote && textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set new height
    }
  }, [value, quote]);

  return (
    <>
      <Form.Label className={quote ? styles.SubHeading : styles.FormLabel}>
        {title}
      </Form.Label>
      <Form.Control
        type={type}
        ref={quote ? textAreaRef : null} // Only assign ref if quote is true
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${styles.FormData} ${quote ? styles.QuoteContainer : ""}`}
        required
        disabled={disabled}
        onChange={onChange}
        as={as}
        rows={rows}
        min={min}
      />
      {/* error message component */}
      <AuthFormErrorMessage errors={errors} fieldName={fieldName} />
    </>
  );
};

export default JobDetailFormFields;
