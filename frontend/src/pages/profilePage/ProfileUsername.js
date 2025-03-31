import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/ProfileUsername.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { CurrentUserContext } from "../../App";
import axios from "../../api/axiosDefaults";
import AuthFormFields from "../auth/AuthFormFields";
import ProfileAuthEditButtons from "./ProfileAuthEditButtons";

// component to render change username form
const ProfileUsername = ({ showAlert }) => {
  // call to find who is the current user and update
  const currentUser = useContext(CurrentUserContext);

  // get id
  const { id } = useParams();

  // Hook to navigate user
  const navigate = useNavigate();

  // state for username
  const [newUsername, setNewUsername] = useState("");

  // state for loading
  const [loading, setLoading] = useState(false);

  //Error state for changing username
  const [errors, setErrors] = useState({});

  // redirect user if not the owner of the profile
  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      navigate("/");
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.put(
        "https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/dj-rest-auth/user/",
        {
          username: newUsername,
        }
      );
      showAlert("success", "You have successfully changed your username!");
      navigate(-1);
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to change username!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={styles.Main}>
      <h2 className={styles.Heading}>Change Username</h2>
      <Form
        onSubmit={handleSubmit}
        className={`${styles.FormContainer} mt-5 py-4`}
      >
        {/* import form fields */}
        <AuthFormFields
          title="Change Username:"
          type="text"
          name="username"
          placeholder="Your new username here..."
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
          errors={errors}
          editProfile
        />
        {/* import custom buttons */}
        <ProfileAuthEditButtons loading={loading} />
      </Form>
    </Container>
  );
};

export default ProfileUsername;
