import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import AuthFormFields from "./AuthFormFields";
import axios from "../../api/axiosDefaults";
import AuthFormErrorMessage from "./AuthFormErrorMessage";
import useRedirectUser from "../../hooks/useRedirectUser";
import LoadingSpinner from "../../components/LoadingSpinner";

const SignUp = ({ showAlert }) => {
  // custom hook to redirect users if not logged
  // or not superuser
  useRedirectUser(true);

  // use state hook for sign in data
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  // state for loading
  const [loading, setLoading] = useState(false);

  //Error state for sign in form
  const [errors, setErrors] = useState({});

  // Hook to navigate user
  const navigate = useNavigate();

  // handle change function for form fields
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // handle sign up form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/dj-rest-auth/registration/",
        signUpData
      );
      showAlert("success", "Successfully created an account!");
      navigate("/");
    } catch (err) {
      // console.log("Error trying to sign up", err.response.data);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to sign up!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={styles.Main}>
      <Row>
        <h1 className={styles.Heading}>Sign Up</h1>
      </Row>
      {/* Signup form */}
      <Form onSubmit={handleSubmit} className={`${styles.Form} py-4 my-5`}>
        {/* form input field */}
        <AuthFormFields
          title="Username"
          type="text"
          name="username"
          placeholder="Your username..."
          value={username}
          onChange={handleChange}
          errors={errors}
        />
        {/* form input field */}
        <AuthFormFields
          title="Password"
          type="password"
          name="password1"
          placeholder="Your password..."
          value={password1}
          onChange={handleChange}
          errors={errors}
        />
        {/* form input field */}
        <AuthFormFields
          title="Confirm&nbsp;Password"
          type="password"
          name="password2"
          placeholder="Confirm password..."
          value={password2}
          onChange={handleChange}
          errors={errors}
        />
        <div className="py-4">
          {!loading && (
            // import custom button
            <CustomButton text="Sign In" type="submit" />
          )}
          {/* import loading spinner */}
          {loading && <LoadingSpinner />}
        </div>
        {/* Displaying non-field errors, if any */}
        <AuthFormErrorMessage errors={errors} />
      </Form>
    </Container>
  );
};

export default SignUp;
