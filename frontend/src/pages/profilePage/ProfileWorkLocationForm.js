import React from "react";
import styles from "../../styles/ProfileWorkLocationForm.module.css";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";

// component to render the work location form
const ProfileWorkLocationForm = ({
  title,
  name,
  value,
  handleChange,
  handleEditProfile,
  loading,
}) => {
  return (
    <Form onSubmit={handleEditProfile}>
      <Form.Label className={styles.Text}>{title}</Form.Label>
      <Form.Select
        name={name}
        value={value}
        required
        className={styles.Data}
        onChange={handleChange}
      >
        <option value="Syspal">Syspal</option>
        <option value="Workshop">Workshop</option>
      </Form.Select>
      {/* import custom button */}
      <div className="mt-4 mb-2">
        {!loading && <CustomButton text="Submit" type="submit" />}
        {/* import loading spinner */}
        {loading && <LoadingSpinner />}
      </div>
    </Form>
  );
};

export default ProfileWorkLocationForm;
