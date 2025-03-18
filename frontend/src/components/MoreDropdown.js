import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useNavigate } from "react-router-dom";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-solid fa-ellipsis-vertical"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

// drop down menu with three dots icon
export const MoreDropdown = ({ noteId, toggleEditForm, handleShowModal }) => {
  // function to handle edit note form
  const handleEditNote = (noteId) => {
    toggleEditForm(noteId);
  };

  return (
    <Dropdown className={styles.DropdownItem} drop="start">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu
        className={styles.DropdownMenu}
        popperConfig={{ strategy: "fixed" }}
      >
        {noteId && (
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={() => handleEditNote(noteId)}
            aria-label="edit"
          >
            <i className="fa-solid fa-pen-to-square" />
          </Dropdown.Item>
        )}

        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleShowModal}
          aria-label="delete"
        >
          <i className="fa-solid fa-trash-can" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// drop down component for profile editing
export function ProfileEditDropdown({
  id,
  superUser,
  handleShowModal,
  isOwner,
}) {
  // Hook to navigate user
  const navigate = useNavigate();

  return (
    <Dropdown className={styles.DropdownItem} drop="start">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu
        className={styles.DropdownMenu}
        popperConfig={{ strategy: "fixed" }}
      >
        {/* only display if owner of profile */}
        {isOwner && (
          <>
            <Dropdown.Item
              className={styles.DropdownItem}
              onClick={() => navigate(`/profile/${id}/edit/username`)}
              aria-label="edit-username"
            >
              <i className="far fa-id-card" />
              Change Username
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.DropdownItem}
              onClick={() => navigate(`/profile/${id}/edit/password`)}
              aria-label="edit-password"
            >
              <i className="far fa-id-card" />
              Change Password
            </Dropdown.Item>
          </>
        )}

        {/* only show delete option if super user */}
        {superUser && (
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleShowModal}
            aria-label="delete"
          >
            <i className="fa-solid fa-trash-can" />
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
