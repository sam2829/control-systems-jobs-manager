import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";

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
export const MoreDropdown = ({
  handleDelete,
  noteId,
  handleNoteDelete,
  toggleEditForm,
}) => {
  // function to handle deleting notes
  const handleDeleteNote = (noteId) => {
    handleNoteDelete(noteId);
  };

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
          onClick={() => {
            // check if noteId is present to call note delete function
            if (noteId) {
              handleDeleteNote(noteId);
            } else {
              handleDelete();
            }
          }}
          aria-label="delete"
        >
          <i className="fa-solid fa-trash-can" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
