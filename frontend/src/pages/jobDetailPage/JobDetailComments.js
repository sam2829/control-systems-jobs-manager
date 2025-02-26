import React, { useEffect } from "react";
import styles from "../../styles/JobDetailComments.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JobDetailCommentForm from "./JobDetailCommentForm";
import useNotes from "../../hooks/useNotes";
import JobDetailComment from "./JobDetailComment";

// component to render comment content for jobs
const JobDetailComments = ({ jobId, notesCount, profileId, showAlert }) => {
  // custom hook to fetch
  const {
    notes,
    loading,
    error,
    addNoteError,
    localNotesCount,
    fetchNotes,
    addNote,
    deleteNote,
  } = useNotes();

  useEffect(() => {
    fetchNotes(jobId, notesCount);

    // eslint-disable-next-line
  }, [jobId]);

  // function to handle add notes
  const handleAddNote = async (formData) => {
    await addNote(formData, showAlert);
  };

  // delete note function
  const handleDeleteNote = async (noteId) => {
    await deleteNote(noteId, showAlert, jobId);
  };

  return (
    <section>
      <h3 className={`${styles.SubHeading} mt-5`}>
        Notes <span className={styles.NotesCount}>{localNotesCount}</span>
      </h3>
      {/* import add note form and notes */}
      <Row>
        {/* display only in large screens */}
        <Col xs={12} lg={6} className="d-none d-lg-block">
          {/* import job notes / comments */}
          <JobDetailComment
            notes={notes}
            error={error}
            loading={loading}
            handleDelete={handleDeleteNote}
          />
        </Col>
        <Col xs={12} lg={6}>
          <JobDetailCommentForm
            jobId={jobId}
            showAlert={showAlert}
            loading={loading}
            error={addNoteError}
            handleAddNote={handleAddNote}
          />
        </Col>
        {/* display only in small screens */}
        <Col xs={12} lg={6} className="d-lg-none d-block">
          {/* import job notes / comments */}
          <JobDetailComment
            notes={notes}
            error={error}
            loading={loading}
            handleDelete={handleDeleteNote}
          />
        </Col>
      </Row>
    </section>
  );
};

export default JobDetailComments;
