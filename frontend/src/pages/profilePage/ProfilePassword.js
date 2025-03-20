import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/ProfilePassword.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { CurrentUserContext } from "../../App";
import axios from "../../api/axiosDefaults";
import AuthFormFields from "../auth/AuthFormFields";
import ProfileAuthEditButtons from "./ProfileAuthEditButtons";

// component to render change password form
const ProfilePassword = ({ showAlert }) => {
  // call to find who is the current user and update
  const currentUser = useContext(CurrentUserContext);

  // get id
  const { id } = useParams();

  // Hook to navigate user
  const navigate = useNavigate();

  // state for password
  const [passwordData, setPasswordData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = passwordData;

  //Error state for changing username
  const [errors, setErrors] = useState({});

  // redirect user if not the owner of the profile
  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      navigate("/");
    }
  });

  // handle changes in input fields
  const handleChange = (event) => {
    setPasswordData({
      ...passwordData,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit new password
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/dj-rest-auth/password/change/",
        passwordData
      );
      showAlert("success", "You have successfully changed your password!");
      navigate(-1);
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to change your password!");
    }
  };

  return (
    <Container className={styles.Main}>
      <h2 className={styles.Heading}>Change Password</h2>
      <Form
        onSubmit={handleSubmit}
        className={`${styles.FormContainer} mt-5 py-4`}
      >
        {/* import form fields */}
        <AuthFormFields
          title="Change Password"
          type="password"
          name="new_password1"
          placeholder="New password..."
          value={new_password1}
          onChange={handleChange}
          errors={errors}
          editProfile
        />
        <AuthFormFields
          title="Confirm Password"
          type="password"
          name="new_password2"
          placeholder="Confirm password..."
          value={new_password2}
          onChange={handleChange}
          errors={errors}
          editProfile
        />
        {/* import custom buttons */}
        <ProfileAuthEditButtons />
      </Form>
    </Container>
  );
};

export default ProfilePassword;
