import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SESSION_TIMEOUT = 10 * 60 * 60 * 1000; // 10 hours

const useAutoLogout = (logout) => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Update token expiry time in localStorage
      const newExpiryTime = Date.now() + SESSION_TIMEOUT;
      localStorage.setItem("tokenExpiry", newExpiryTime);

      timeoutRef.current = setTimeout(() => {
        logout();
        navigate("/signin");
      }, SESSION_TIMEOUT);
    };

    // Start initial timeout
    resetTimer();

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, [logout, navigate]);

  return null;
};

export default useAutoLogout;
