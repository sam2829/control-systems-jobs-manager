import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import styles from './App.module.css'

function App() {
  return (
    <Router>
    <div className={styles.App}>
      <NavBar />
    </div>
    </Router>
  );
}

export default App;
