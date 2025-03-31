import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SetCurrentUserContext } from "../App";
import axios from "../api/axiosDefaults";
import useModal from "../hooks/useModal";

// function to logout user manually or auto
const useLogoutUser = () => {
  // call current user context hook
  const setCurrentUser = useContext(SetCurrentUserContext);

  // use modal custom hook
  const { closeModal } = useModal();

  // Hook to navigate user
  const navigate = useNavigate();

  const logoutUserManual = async (showAlert) => {
    try {
      await axios.post(
        "https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/dj-rest-auth/logout/",
        {}
      );
      // Clear token from localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("tokenExpiry");
      closeModal();
      navigate("/");
      showAlert("success", "You have successfully signed out!");

      setCurrentUser(null);
    } catch (err) {
      // console.log("Error signing out:", err);
    }
  };

  return { logoutUserManual };
};

export default useLogoutUser;
