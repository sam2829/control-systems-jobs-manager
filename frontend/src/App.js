import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Signin from "./pages/auth/Signin.js";
import Homepage from "./pages/homepage/Homepage.js";
import AlertMessage, { useAlert } from "./components/AlertMessage";

function App() {
  // to show alert message
  const { alert, showAlert, hideAlert } = useAlert();

  return (
    <Router>
      <div className={styles.App}>
        {/* Display Navbar */}
        <NavBar />
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
          <Route path="/signin" element={<Signin showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
