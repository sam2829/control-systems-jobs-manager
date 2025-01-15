import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Signin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import AuthFormFields from "./AuthFormFields";
import axios from "axios";

// This component is to render the signin page
const Signin = () => {
  // use state hook for sign in data
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const navigate = useNavigate();

  // handle change function for form fields
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // handle sign in form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("try to submit");
      await axios.post("http://127.0.0.1:8000/api/dj-rest-auth/login/", signInData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={styles.Main}>
      <Row>
        <h1 className={styles.Heading}>Sign In</h1>
      </Row>
      {/* Signin form */}
      <Form onSubmit={handleSubmit} className={`${styles.Form} py-4 my-5`}>
        {/* form input field */}
        <AuthFormFields
          title="Username"
          type="text"
          name="username"
          placeholder="Your username..."
          value={username}
          onChange={handleChange}
        />
        {/* form input field */}
        <AuthFormFields
          title="Password"
          type="password"
          name="password"
          placeholder="Your password..."
          value={password}
          onChange={handleChange}
        />
        <div className="py-4">
          {/* import custom button */}
          <CustomButton text="Sign In" type="submit" />
        </div>
      </Form>
    </Container>
  );
};

export default Signin;
