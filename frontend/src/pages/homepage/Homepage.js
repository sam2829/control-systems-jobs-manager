import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import { CurrentUserContext } from "../../App";
import axios from "../../api/axiosDefaults";

//  This component is used to render the homepage
const Hompage = () => {
  // call to find who is current user
  const currentUser = useContext(CurrentUserContext);

  // set current jobs
  const [jobs, setJobs] = useState({ results: [] });

  useEffect(() => {
    // fetch jobs only if there is a current user
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (currentUser) {
      const fetchJobs = async () => {
        try {
          const jobResponse = await axios.get(
            "http://127.0.0.1:8000/api/jobs/"
          );
          setJobs(jobResponse.data);
          console.log("Fetched jobs:", jobResponse.data);
          console.log("jobs logged:", jobs);
        } catch (err) {
          console.log(
            "Error trying to fetch jobs",
            err.response?.data || err.message
          );
        }
      };

      fetchJobs();
    }
  }, [currentUser]);

  return (
    <Container className={styles.Main}>
      <main>
        {/* display when a user is logged in */}
        {currentUser ? (
          <Row>
            <p>Welcome {currentUser.username}</p>
            {/* display list of jobs */}
            {jobs.results.length > 0 &&
              jobs.results.map((job) => (
                <Container key={job.id} className="my-5">
                  <p>{job.csa_number}</p>
                  <p>{job.syspal_number}</p>
                  <p>{job.order_number}</p>
                  <p>{job.quantity}</p>
                  <p>{job.description}</p>
                  <p>{job.date_created}</p>
                  <p>{job.workshop_status}</p>
                  <p>{job.syspal_status}</p>
                  <p>{job.delivered}</p>
                  <p>{job.delivered_date}</p>
                  <p>{job.quote}</p>
                </Container>
              ))}
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
