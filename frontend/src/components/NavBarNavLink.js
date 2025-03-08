import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBarNavLink.module.css";

// Component to render different Nav links in the nav bar
const NavBarNavLink = ({
  title,
  to,
  handleShowModal,
  isModalOpen,
  isSignOut,
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive && !isSignOut
          ? `${styles.NavLink} ${styles.Active}`
          : isModalOpen
          ? `${styles.NavLink} ${styles.Active}`
          : styles.NavLink
      }
      onClick={handleShowModal}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default NavBarNavLink;
