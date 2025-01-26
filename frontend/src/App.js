import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Signin from "./pages/auth/Signin.js";
import Homepage from "./pages/homepage/Homepage.js";
import AlertMessage, { useAlert } from "./components/AlertMessage";
import { createContext, useEffect, useState } from "react";
import axios from "./api/axiosDefaults";
import SignUp from "./pages/auth/SignUp.js";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  // usestate hook to find current user
  const [currentUser, setCurrentUser] = useState(null);
  // to show alert message
  const { alert, showAlert, hideAlert } = useAlert();

  // handle mount function to get user data
  const handleMount = async () => {
    try {
      const userResponse = await axios.get(
        "http://127.0.0.1:8000/api/dj-rest-auth/user/"
      );
      setCurrentUser(userResponse.data);
      console.log("homepage log", userResponse.data);
    } catch (err) {
      // console.log(err);
    }
  };
  // use effect function to run when app loads
  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext value={currentUser}>
      <SetCurrentUserContext value={setCurrentUser}>
        <Router>
          <div className={styles.App}>
            {/* Display Navbar */}
            <NavBar showAlert={showAlert} />
            {/** Display the show alert message */}
            {alert && (
              <AlertMessage
                variant={alert.variant}
                message={alert.message}
                showAlert={showAlert}
                onClose={hideAlert}
              />
            )}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/signin"
                element={<Signin showAlert={showAlert} />}
              />
              <Route
                path="/signup"
                element={<SignUp showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </SetCurrentUserContext>
    </CurrentUserContext>
  );
}

export default App;
