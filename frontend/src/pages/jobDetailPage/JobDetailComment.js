import React from "react";
import styles from "../../styles/JobDetailComment.module.css";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { MoreDropdown } from "../../components/MoreDropdown";

// component to render notes / comments for job
const JobDetailComment = ({ loading, error, notes }) => {
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
                  <MoreDropdown />
                </span>
              )}
            </div>
            <p className={styles.Text}>{note.content}</p>
          </div>
        ))}
      {/* no notes message */}
      {!loading && !error && notes.length === 0 && (
        <div className="mt-5">
          <p className={styles.Text}>No notes created for this job</p>
        </div>
      )}
    </Container>
  );
};

export default JobDetailComment;
