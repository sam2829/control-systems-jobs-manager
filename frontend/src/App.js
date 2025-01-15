import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Signin from "./pages/auth/Signin.js";
import Homepage from "./pages/homepage/Homepage.js";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
