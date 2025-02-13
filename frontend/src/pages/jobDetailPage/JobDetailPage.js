import React, { useContext, useEffect } from "react";
import styles from "../../styles/JobDetailPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CurrentUserContext } from "../../App";
import useJobs from "../../hooks/useJobs";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import JobDetailPageJob from "./JobDetailPageJob";

const JobDetailPage = ({ showAlert }) => {
  // extract id from url for job id
  const { id } = useParams();

  // call to find who is the current user
  const currentUser = useContext(CurrentUserContext);

  // custom hook to fetch job detail
  const { jobs, loading, error, fetchJobs } = useJobs();

  // use effect hook to fetch job
  useEffect(() => {
    if (currentUser) {
      fetchJobs(id);
    }
  }, [currentUser, id]);

  return (
    <Container className={styles.Main}>
      <main>
        <Row>
          <h1 className={styles.Heading}>
            Job Detail Page {currentUser.username}
          </h1>
          {/* loading job */}
          {loading && <LoadingSpinner />}
          {/* display error message */}
          {!loading && error && <ErrorMessage error={error} />}
          {/* display job details */}
          {!loading && !error && jobs && (
            <JobDetailPageJob
              {...jobs}
              currentUser={currentUser}
              showAlert={showAlert}
            />
          )}
        </Row>
      </main>
    </Container>
  );
};

export default JobDetailPage;
