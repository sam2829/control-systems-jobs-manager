import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";
import NavBarNavLink from "./NavBarNavLink";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { CurrentUserContext } from "../App";
import { SetCurrentUserContext } from "../App";
import axios from "../api/axiosDefaults";

// component for rendering Navbar
const NavBar = ({ showAlert }) => {
  // call to find who is current user
  const currentUser = useContext(CurrentUserContext);
  // call current user context hook
  const setCurrentUser = useContext(SetCurrentUserContext);
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  //  Handle sign out function
  const handleSignOut = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/dj-rest-auth/logout/", {});
      // Clear token from localStorage
      localStorage.removeItem("authToken");
      showAlert("success", "You have successfully signed out!");
      setCurrentUser(null);
    } catch (err) {
      console.log("Error signing out:", err);
    }
  };

  return (
    <>
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand="lg"
        className={styles.NavBar}
        fixed="top"
      >
        <Container>
          <Navbar.Brand className={`px-4 ${styles.Logo}`}>
            {/* Navbar Logo */}
            <Link to="/" className={styles.LogoLink}>
              <div>
                <p className={styles.LogoText}>Control Systems</p>
                <p className={styles.LogoText}>Automation Manager</p>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            ref={ref}
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
            className={styles.MenuIcon}
          ></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ms-auto ${styles.NavLinks}`}>
              {/** Nav Links in Navbar */}
              {/* nav links for logged in user */}
              {currentUser ? (
                <>
                  {/* navlinks for superuser */}
                  {currentUser && currentUser.is_superuser && (
                    <>
                      <NavBarNavLink title="Add User" to="/signup" />
                      <NavBarNavLink title="Add Job" to="/add-job" />
                    </>
                  )}
                  {/* navlinks for all logged in */}
                  <NavBarNavLink title="Jobs" to="/" />
                  <NavBarNavLink title="Profile" to="/profile" />
                  <NavBarNavLink
                    title="Sign Out"
                    handleSignOut={handleSignOut}
                    to="/"
                  />
                </>
              ) : (
                <>
                  {/* navlinks for logged out user */}
                  <NavBarNavLink title="Sign In" to="/signin" />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
