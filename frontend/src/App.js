import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import styles from './App.module.css'
import Hompage from "./pages/Homepage/Hompage";

function App() {
  return (
    <Router>
    <div className={styles.App}>
      <NavBar />
      <Hompage />
    </div>
    </Router>
  );
}

export default App;
