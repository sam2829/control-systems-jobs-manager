import React, { useState } from "react";
import styles from "../../styles/JobDetailComment.module.css";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { MoreDropdown } from "../../components/MoreDropdown";
import EditCommentForm from "./EditCommentForm";

// component to render notes / comments for job
const JobDetailComment = ({ loading, error, notes, handleDelete }) => {
  // state to store which note is being edited
  const [editNoteId, setEditNoteId] = useState(null);

  // function to handle toggling edit form
  const toggleEditForm = (noteId) => {
    if (editNoteId === noteId) {
      setEditNoteId(null); // Close form if the same note is clicked
    } else {
      setEditNoteId(noteId); // Open form for the clicked note
    }
  };

  return (
    <Container className={`${styles.NotesContainer} my-5`}>
      {/* import loading spinner */}
      {loading && <LoadingSpinner />}
      {/* import error message */}
      {!loading && error && (
        <ErrorMessage
          error={error.job ? error.job.join(", ") : "An error occurred"}
        />
      )}
      {/* import note */}
      {!loading &&
        !error &&
        notes.length > 0 &&
        notes.map((note) => (
          <div key={note.id} className={`${styles.Note} my-4`}>
            <div className={styles.NoteHeader}>
              <p>
                <span className={styles.Owner}>{note.owner}</span>
                <span className={styles.Date}>{note.updated_at}</span>
              </p>
              {note.is_owner && (
                <span className={styles.Dropdown}>
                  <MoreDropdown
                    noteId={note.id}
                    handleNoteDelete={handleDelete}
                    toggleEditForm={toggleEditForm}
                  />
                </span>
              )}
            </div>
            <p className={styles.Text}>{note.content}</p>
            {/* show edit form only if it's the selected note */}
            {editNoteId === note.id && <EditCommentForm note={note} />}
          </div>
        ))}

      {/* no notes message */}
      {!loading && !error && notes.length === 0 && (
        <div className="mt-5">
          <p className={`${styles.Text} ${styles.NoJobs}`}>
            No notes created for this job
          </p>
        </div>
      )}
    </Container>
  );
};

export default JobDetailComment;
