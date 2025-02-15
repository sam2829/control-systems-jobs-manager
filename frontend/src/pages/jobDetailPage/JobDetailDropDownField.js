import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/JobDetailDropDownFields.module.css";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

// component to render drop down fields in job detail
const JobDetailDropDownField = ({
  title,
  name,
  value,
  disabled,
  onChange,
  errors,
  optionType,
  fieldName,
}) => {
  // drop down work status options
  const statusOptions = ["Not Started", "Ongoing", "Complete"];

  // drop down options for delivered
  const deliveredOptions = [
    { value: "true", label: "✔ Delivered" },
    { value: "false", label: "✖ Not Delivered" },
  ];

  return (
    <>
      <Form.Label className={styles.FormLabel}>{title}</Form.Label>
      <Form.Select
        name={name}
        value={value}
        className={styles.FormData}
        required
        disabled={disabled}
        onChange={onChange}
      >
        {/* map over workplace options */}
        {optionType === "workplace" &&
          statusOptions.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        {/* map over delivered options */}
        {optionType === "delivered" &&
          deliveredOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </Form.Select>
      {/* Error message component */}
      <AuthFormErrorMessage errors={errors} fieldName={fieldName} />
    </>
  );
};

export default JobDetailDropDownField;
