import React from "react";
import styles from "../../styles/JobDetailComment.module.css";
import Container from "react-bootstrap/Container";

// component to render notes / comments for job
const JobDetailComment = ({ notes }) => {
  return (
    <Container className={`${styles.NotesContainer} my-5`}>
      {notes.map((note) => (
        <div key={note.id} className={`${styles.Note} my-4`}>
          <p>
            <span className={styles.Owner}>{note.owner}</span>
            <span className={styles.Date}>{note.updated_at}</span>
          </p>
          <p className={styles.Text}>{note.content}</p>
        </div>
      ))}
    </Container>
  );
};

export default JobDetailComment;
