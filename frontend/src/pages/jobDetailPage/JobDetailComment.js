import React from "react";
import styles from "../../styles/JobDetailComment.module.css";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

// component to render notes / comments for job
const JobDetailComment = ({loading, error, notes}) => {
  return (
    <Container className={`${styles.NotesContainer} my-5`}>
      {/* loading spinner */}
      {loading && <LoadingSpinner />}
      {/* error message */}
      {!loading && error && <ErrorMessage error={error} />}
      {/* map over notes / comments */}
      {!loading &&
        !error &&
        notes.length > 0 &&
        notes.map((note) => (
          <div key={note.id} className={`${styles.Note} my-4`}>
            <p>
              <span className={styles.Owner}>{note.owner}</span>
              <span className={styles.Date}>{note.updated_at}</span>
            </p>
            <p className={styles.Text}>{note.content}</p>
          </div>
        ))}
      {/* message if no notes / comments */}
      {!loading && !error && notes.length === 0 && (
        <p className={styles.Text}>No notes created for this job.</p>
      )}
    </Container>
  );
};

export default JobDetailComment;
