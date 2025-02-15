import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import { CurrentUserContext } from "../../App";
import HomepageJobList from "./HomepageJobList";
import useJobs from "../../hooks/useJobs";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner";

//  This component is used to render the homepage
const Hompage = () => {
  // call to find who is current user
  const currentUser = useContext(CurrentUserContext);

  // set search icon query
  const [query, setQuery] = useState("");

  // set search has taken place
  const [searchComplete, setSearchComplete] = useState(false);

  // custom hook to fetch jobs
  const { jobs, loading, error, fetchJobs } = useJobs();

  // use effect hook to fetch jobs
  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => {
        fetchJobs(null, query);
        setSearchComplete(true);
      }, 1000);
      return () => {
        clearTimeout(timer);
        setSearchComplete(false);
      };
    }
    // eslint-disable-next-line
  }, [currentUser, query]);

  return (
    <Container className={styles.Main}>
      <main>
        {/* display when a user is logged in */}
        {currentUser ? (
          <Row>
            <h1 className={styles.Heading}>Job List</h1>
            <p className={styles.Text}>Welcome {currentUser.username}</p>
            {/* search bar */}
            <Col className={styles.SearchWrapper}>
              <i className={`fas fa-search ${styles.SearchIcon}`} />
              <Form
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
              >
                <Form.Control
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  placeholder="Search jobs..."
                />
              </Form>
            </Col>
            {/* loading jobs */}
            {loading && <LoadingSpinner />}
            {/* display error message */}
            {!loading && error && <ErrorMessage error={error} />}
            {/* no jobs message */}
            {!loading && !error && jobs.length === 0 && searchComplete && (
              <p className={`${styles.Text} mt-5`}>
                There are currently no jobs to view.
              </p>
            )}
            {/* Map over and display jobs */}
            {!loading &&
              !error &&
              jobs.length > 0 &&
              jobs.map((job) => <HomepageJobList key={job.id} {...job} />)}
          </Row>
        ) : (
          // display when a user is not logged in
          <>
            <Row>
              <h1 className={styles.Heading}>
                Welcome to the Control Systems <br /> Automation Jobs Management
                App
              </h1>
            </Row>
            <Row className="py-5">
              <p className={styles.Text}>
                Please sign in to access job details. If you don't have an
                account, contact management to register.
              </p>
            </Row>
            <Row>
              <Link to="/signin">
                <div>
                  <CustomButton text="Sign In" />
                </div>
              </Link>
            </Row>
          </>
        )}
      </main>
    </Container>
  );
};

export default Hompage;
