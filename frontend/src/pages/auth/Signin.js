import React, { useState } from "react";
import styles from "../../styles/Signin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import AuthFormFields from "./AuthFormFields";

// This component is to render the signin page
const Signin = () => {
  // use state hook for sign in data
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  // handle change function for form fields
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className={styles.Main}>
      <Row>
        <h1 className={styles.Heading}>Sign In</h1>
      </Row>
      {/* Signin form */}
      <Form className={`${styles.Form} py-4 my-5`}>
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
          <CustomButton text="Sign In" />
        </div>
      </Form>
    </Container>
  );
};

export default Signin;
