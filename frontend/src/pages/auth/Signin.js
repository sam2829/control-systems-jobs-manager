import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Signin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import AuthFormFields from "./AuthFormFields";
import axios from "../../api/axiosDefaults";
import AuthFormErrorMessage from "./AuthFormErrorMessage";
import { SetCurrentUserContext } from "../../App";

// This component is to render the signin page
const Signin = ({ showAlert }) => {
  // call current user context hook
  const setCurrentUser = useContext(SetCurrentUserContext);
  // use state hook for sign in data
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  // state for sign in form
  const [errors, setErrors] = useState({});

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
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/dj-rest-auth/login/",
        signInData
      );
      console.log("Login Response:", data); // Log the response to check if you're getting a token

      // Assuming the token is returned in the 'access' field
      const token = data.key;
      console.log("Token:", token); // Log the token

      // Store the token in localStorage or state if needed
      localStorage.setItem("authToken", token);
      setCurrentUser(data.user);
      console.log("current user?", data.user);
      console.log("Login Response:", data);
      const { username } = signInData;

      const token2 = localStorage.getItem("authToken");
      console.log("Token from localStorage:", token2);

      const { responseData } = await axios.get(
        "http://127.0.0.1:8000/api/dj-rest-auth/user/", // Endpoint to get user data
        {
          headers: {
            Authorization: `Token ${token}`, // Use "Token" for the token authentication
          },
        }
      );

      showAlert("success", `You have successfully signed in as ${username}!`);
      navigate("/");
    } catch (err) {
      console.log("error trying to sign in", err.response.data);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to login!");
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
          errors={errors}
        />
        {/* form input field */}
        <AuthFormFields
          title="Password"
          type="password"
          name="password"
          placeholder="Your password..."
          value={password}
          onChange={handleChange}
          errors={errors}
        />
        <div className="py-4">
          {/* import custom button */}
          <CustomButton text="Sign In" type="submit" />
        </div>
        {/* Displaying non-field errors, if any */}
        <AuthFormErrorMessage errors={errors} />
      </Form>
    </Container>
  );
};

export default Signin;
