import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

// custom hook for redirecting user if not logged in
// or not superuser if required
const useRedirectUser = (superUserRequired = false) => {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not logged in
    if (currentUser === null) {
      navigate("/signin");
    }

    // Redirect if user is not a superuser
    if (superUserRequired && currentUser && !currentUser.is_superuser) {
      navigate("/");
    }
  }, [currentUser, navigate, superUserRequired]);

  return null; // This hook doesn't need to return anything
};

export default useRedirectUser;
