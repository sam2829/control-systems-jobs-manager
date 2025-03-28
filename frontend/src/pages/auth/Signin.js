import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Signin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import AuthFormFields from "./AuthFormFields";
import axios, { setAuthToken } from "../../api/axiosDefaults";
import AuthFormErrorMessage from "./AuthFormErrorMessage";
import { SetCurrentUserContext } from "../../App";
import { CurrentUserContext } from "../../App";
import LoadingSpinner from "../../components/LoadingSpinner";

// This component is to render the signin page
const Signin = ({ showAlert }) => {
  // call current user context hook
  const setCurrentUser = useContext(SetCurrentUserContext);

  // call to find who is current user
  const currentUser = useContext(CurrentUserContext);

  // use state hook for sign in data
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  // state for loading
  const [loading, setLoading] = useState(false);

  //Error state for sign in form
  const [errors, setErrors] = useState({});

  // Hook to navigate user
  const navigate = useNavigate();

  // use effect hook to redirect user if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  });

  // handle change function for form fields
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // handle sign in form submission tokens
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/dj-rest-auth/login/",
        signInData
      );

      // Access and store token
      const token = data.key;
      localStorage.setItem("authToken", token);

      // Ensure the headers are set before making the user request
      setAuthToken();

      // Slight delay to make sure token is set
      await new Promise((resolve) => setTimeout(resolve, 500));

      // get user data
      const userResponse = await axios.get(
        "http://127.0.0.1:8000/api/dj-rest-auth/user/"
      );
      setCurrentUser(userResponse.data);
      showAlert("success", `You have successfully signed in as ${username}!`);
      navigate("/");
    } catch (err) {
      // console.log("error trying to sign in", err.response.data);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to login!");
    } finally {
      setLoading(false);
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

export default Signin;
