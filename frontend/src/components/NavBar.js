import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";
import NavBarNavLink from "./NavBarNavLink";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

// component for rendering Navbar
const NavBar = () => {
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

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
            <div>
              <p className={styles.LogoText}>Control Systems</p>
              <p className={styles.LogoText}>Automation Manager</p>
            </div>
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
              <NavBarNavLink title="Jobs" />
              <NavBarNavLink title="Profile" />
              <NavBarNavLink title="Sign Out" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
