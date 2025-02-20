import React, { useEffect, useState } from "react";
import styles from "../../styles/JobDetailComments.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JobDetailCommentForm from "./JobDetailCommentForm";
import axios from "../../api/axiosDefaults";

// component to render comment content for jobs
const JobDetailComments = ({ jobId, notesCount, profileId }) => {
  // state for notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!jobId) return;
    const fetchNotes = async (id) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/notes/?job=${id}`
        );
        // Check if response is paginated (contains 'results') or a plain list
        const notesData = response.data.results
          ? response.data.results
          : response.data;
        setNotes(notesData);
        console.log("successfully retrieved notes", notesData);
      } catch (err) {
        console.log("error trying to fetch notes", err.response.data);
      }
    };
    fetchNotes(jobId);
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
          <Container className={`${styles.NotesContainer} my-5`}>
            {notes.length > 0 ? (
              notes.map((note) => (
                <div key={note.id} className={`${styles.Note} my-4`}>
                  <p>
                    {note.owner}{" "}
                    <span className={styles.Date}>{note.updated_at}</span>
                  </p>
                  <p className={styles.Text}>{note.content}</p>
                </div>
              ))
            ) : (
              <p>No notes created for this job</p>
            )}
          </Container>
        </Col>
        <Col xs={12} lg={6}>
          <JobDetailCommentForm jobId={jobId} />
        </Col>
        {/* display only in small screens */}
        <Col xs={12} lg={6} className="d-lg-none d-block">
          <Container className={`${styles.NotesContainer} my-5`}>
            {notes.length > 0 ? (
              notes.map((note) => (
                <div key={note.id} className={`${styles.Note} my-4`}>
                  <p>
                    {note.owner}{" "}
                    <span className={styles.Date}>{note.updated_at}</span>
                  </p>
                  <p className={styles.Text}>{note.content}</p>
                </div>
              ))
            ) : (
              <p>No notes created for this job</p>
            )}
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default JobDetailComments;
