import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBarNavLink.module.css";

// Component to render different Nav links in the nav bar
const NavBarNavLink = ({ title, handleSignOut, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink
      }
      onClick={handleSignOut}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default NavBarNavLink;
