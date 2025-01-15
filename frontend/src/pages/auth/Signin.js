import React from "react";
import styles from "../../styles/Signin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";

// This component is to render the signin page
const Signin = () => {
  return (
    <Container className={styles.Main}>
      <Row>
        <h1 className={styles.Heading}>Sign In</h1>
      </Row>
      {/* Signin form */}
      <Form className={`${styles.Form} py-4 my-5`}>
        <Form.Label className={`${styles.FormLabel}`}>Username</Form.Label>
        <Form.Control
          className={`${styles.FormInput} py-2 my-2`}
          title="Username"
          type="text"
          name="username"
          placeholder="Your username..."
          maxLength={12}
          // value={username}
          required
        />
        <Form.Label className={`${styles.FormLabel}`}>Password</Form.Label>
        <Form.Control
          className={`${styles.FormInput} py-2 my-2`}
          title="Password"
          type="password"
          name="password"
          placeholder="Your password..."
          maxLength={12}
          // value={password}
          required
        />
        <div className="py-4">
          <CustomButton text="Sign In" />
        </div>
      </Form>
    </Container>
  );
};

export default Signin;
