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
import AddJobPage from "./pages/addJobPage/AddJobPage.js";
import JobDetailPage from "./pages/jobDetailPage/JobDetailPage.js";
import ProfilesPage from "./pages/profilePage/ProfilesPage.js";
import ProfilePage from "./pages/profilePage/ProfilePage.js";
import ProfileUsername from "./pages/profilePage/ProfileUsername.js";
import ProfilePassword from "./pages/profilePage/ProfilePassword.js";
import LoadingSpinner from "./components/LoadingSpinner.js";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.js";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  // usestate hook to find current user
  const [currentUser, setCurrentUser] = useState(null);

  // set loading state for app
  const [loading, setLoading] = useState(true);

  // to show alert message
  const { alert, showAlert, hideAlert } = useAlert();

  // handle mount function to get user data
  const handleMount = async () => {
    try {
      const userResponse = await axios.get(
        "http://127.0.0.1:8000/api/dj-rest-auth/user/"
      );
      setCurrentUser(userResponse.data);
    } catch (err) {
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // use effect function to run when app loads
  useEffect(() => {
    handleMount();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

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
              <Route
                path="/add-job"
                element={<AddJobPage showAlert={showAlert} />}
              />
              <Route
                path="/job/:id"
                element={<JobDetailPage showAlert={showAlert} />}
              />
              <Route
                path="/profiles"
                element={<ProfilesPage showAlert={showAlert} />}
              />
              <Route
                path="/profile/:id"
                element={<ProfilePage showAlert={showAlert} />}
              />
              <Route
                path="/profile/:id/edit/username"
                element={<ProfileUsername showAlert={showAlert} />}
              />
              <Route
                path="/profile/:id/edit/password"
                element={<ProfilePassword showAlert={showAlert} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </SetCurrentUserContext>
    </CurrentUserContext>
  );
}

export default App;
