import React, { useEffect } from "react";
import styles from "../../styles/JobDetailComments.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JobDetailCommentForm from "./JobDetailCommentForm";
import useNotes from "../../hooks/useNotes";
import JobDetailComment from "./JobDetailComment";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner";

// component to render comment content for jobs
const JobDetailComments = ({ jobId, notesCount, profileId, showAlert }) => {
  // custom hook to fetch
  const { notes, loading, error, addNoteError, fetchNotes, addNote } =
    useNotes();

  useEffect(() => {
    fetchNotes(jobId);

    // eslint-disable-next-line
  }, [jobId]);

  return (
    <section>
      <h3 className={`${styles.SubHeading} mt-5`}>
        Notes <span className={styles.NotesCount}>{notesCount}</span>
      </h3>
      {/* import add note form and notes */}
      <Row>
        {/* display only in large screens */}
        <Col xs={12} lg={6} className="d-none d-lg-block">
          {/* import loading spinner */}
          {loading && <LoadingSpinner />}
          {/* import error message */}
          {!loading && error && (
            <ErrorMessage
              error={error.job ? error.job.join(", ") : "An error occurred"}
            />
          )}
          {/* import note */}
          {!loading && !error && notes.length > 0 && (
            <JobDetailComment notes={notes} />
          )}
          {/* No notes message */}
          {!loading && !error && notes.length === 0 && (
            <div className={`${styles.NotesContainer} mt-5`}>
              <p className={styles.Text}>No notes created for this job.</p>
            </div>
          )}
        </Col>
        <Col xs={12} lg={6}>
          <JobDetailCommentForm
            jobId={jobId}
            showAlert={showAlert}
            addNote={addNote}
            loading={loading}
            error={addNoteError}
          />
        </Col>
        {/* display only in small screens */}
        <Col xs={12} lg={6} className="d-lg-none d-block">
          {/* import loading spinner */}
          {loading && <LoadingSpinner />}
          {/* import error message */}
          {!loading && error && (
            <ErrorMessage
              error={error.job ? error.job.join(", ") : "An error occurred"}
            />
          )}
          {/* import note */}
          {!loading && !error && notes.length > 0 && (
            <JobDetailComment notes={notes} />
          )}
          {/* No notes message */}
          {!loading && !error && notes.length === 0 && (
            <div className={`${styles.NotesContainer} mt-5`}>
              <p className={styles.Text}>No notes created for this job.</p>
            </div>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default JobDetailComments;
