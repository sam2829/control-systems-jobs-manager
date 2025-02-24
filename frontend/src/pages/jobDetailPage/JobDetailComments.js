import React, { useEffect } from "react";
import styles from "../../styles/JobDetailComments.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JobDetailCommentForm from "./JobDetailCommentForm";
import useNotes from "../../hooks/useNotes";
import JobDetailComment from "./JobDetailComment";

// component to render comment content for jobs
const JobDetailComments = ({ jobId, notesCount, profileId, showAlert }) => {
  // state for notes
  // const [notes, setNotes] = useState([]);

  const { notes, loading, error, fetchNotes } = useNotes();

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
          {/* import note */}
          <JobDetailComment loading={loading} error={error} notes={notes} />
        </Col>
        <Col xs={12} lg={6}>
          <JobDetailCommentForm jobId={jobId} showAlert={showAlert} />
        </Col>
        {/* display only in small screens */}
        <Col xs={12} lg={6} className="d-lg-none d-block">
          {/* import note */}
          <JobDetailComment loading={loading} error={error} notes={notes} />
        </Col>
      </Row>
    </section>
  );
};

export default JobDetailComments;
