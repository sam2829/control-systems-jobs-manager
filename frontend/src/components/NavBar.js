import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";
import NavBarNavLink from "./NavBarNavLink";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { CurrentUserContext } from "../App";
import CustomModal from "./CustomModal";
import useModal from "../hooks/useModal";
import useLogoutUser from "../hooks/useLogoutUser";

// component for rendering Navbar
const NavBar = ({ showAlert }) => {
  // call to find who is current user
  const currentUser = useContext(CurrentUserContext);

  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // use modal custom hook
  const { isModalOpen, openModal, closeModal } = useModal();

  // custom hook to sign out
  const { logoutUserManual } = useLogoutUser();

  //  Handle sign out function
  const handleSignOut = async () => {
    logoutUserManual(showAlert);
  };

  return (
    <>
      {/* show signout modal */}
      {isModalOpen && (
        <CustomModal
          onConfirm={handleSignOut}
          onCancel={closeModal}
          message="Are you sure you want to sign out?"
        />
      )}
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
                  <NavBarNavLink
                    title="Profile"
                    to={
                      currentUser.is_superuser
                        ? "/profiles"
                        : `/profile/${currentUser.profile_id}`
                    }
                  />
                  <NavBarNavLink
                    title="Sign Out"
                    handleShowModal={openModal}
                    isModalOpen={isModalOpen}
                    isSignOut
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
