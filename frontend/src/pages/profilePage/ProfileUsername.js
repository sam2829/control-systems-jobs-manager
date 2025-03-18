import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/ProfileUsername.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import { CurrentUserContext } from "../../App";
import axios from "../../api/axiosDefaults";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

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

  //Error state for changing username
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      navigate("/");
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put("http://127.0.0.1:8000/api/dj-rest-auth/user/", {
        username: newUsername,
      });
      showAlert("success", "Your have successfully changed your username!");
      navigate(-1);
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to change username!");
    }
  };

  return (
    <Container className={styles.Main}>
      <h2 className={styles.Heading}>Change Username</h2>
      <Form
        onSubmit={handleSubmit}
        className={`${styles.FormContainer} mt-5 py-4`}
      >
        <Form.Label className={styles.FormLabel}>Change Username</Form.Label>
        <Form.Control
          type="text"
          name="newUsername"
          placeholder="Your new username here..."
          required
          className={styles.FormInput}
          onChange={(event) => setNewUsername(event.target.value)}
        />
        {/* Error message component */}
        <AuthFormErrorMessage errors={errors} fieldName="username" />
        {/* import custom buttons and spinner if loading */}
        <Row className="mt-4 justify-content-center">
          <Col xs={12} sm={6}>
            <div className="py-2">
              <CustomButton text="Save" type="submit" />
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="py-2">
              <CustomButton text="Go Back" goBackButton />
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ProfileUsername;
