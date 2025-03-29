import { useEffect } from "react";

const useCheckTokenExpiry = (logout) => {
  useEffect(() => {
    const checkTokenExpiry = () => {
      const expiryTime = localStorage.getItem("tokenExpiry");
      if (expiryTime && Date.now() > Number(expiryTime)) {
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiry, 10 * 60 * 1000); // Check every 10 minutes
    return () => clearInterval(interval);
  }, [logout]);
};

export default useCheckTokenExpiry;
