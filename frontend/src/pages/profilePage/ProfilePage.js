import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/ProfilePage.module.css";
import Container from "react-bootstrap/Container";
import { CurrentUserContext } from "../../App";
import { useParams } from "react-router-dom";
import useProfiles from "../../hooks/useProfiles";
import Form from "react-bootstrap/Form";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import CustomButton from "../../components/CustomButton";

// component to render profile page
const ProfilePage = () => {
  // call to find who is the current user
  const currentUser = useContext(CurrentUserContext);

  // get id
  const { id } = useParams();

  // custom hook to fetch profile
  const { profiles, loading, error, fetchProfiles } = useProfiles();

  // current work location
  const currentWorkLocation = profiles.work_location
    ? profiles.work_location.charAt(0).toUpperCase() +
      profiles.work_location.slice(1).toLowerCase()
    : "";

  useEffect(() => {
    if (currentUser) {
      fetchProfiles(id);
      console.log(profiles);
    }
    // eslint-disable-next-line
  }, [currentUser, id]);

  return (
    <Container className={styles.Main}>
      <h2 className={styles.Heading}>Profile</h2>
      {/* loading spiiner when fetching profile */}
      {loading && <LoadingSpinner />}
      {/* display error message */}
      {!loading && error && <ErrorMessage error={error} />}
      {/* render profile data */}
      {!loading && !error && currentUser && (
        <Container className={`${styles.ProfileContainer} mt-5 py-4`}>
          <p className={`${styles.Text} mt-3 mb-5`}>
            <span className={styles.Owner}>{profiles.owner}</span>
          </p>
          {!currentUser.is_superuser && (
            <p className={styles.Text}>
              Work Location:{" "}
              <span className={styles.Data}>{currentWorkLocation}</span>
            </p>
          )}
          {/* render work location edit form if super user */}
          {currentUser.is_superuser && (
            <Form>
              <Form.Label className={styles.Text}>Work Location:</Form.Label>
              <Form.Select
                name="workLocation"
                value={currentWorkLocation}
                required
                className={styles.Data}
              >
                <option value="Syspal">Syspal</option>
                <option value="Workshop">Workshop</option>
              </Form.Select>
              {/* import custom button */}
              <div className="mt-4 mb-2">
                <CustomButton text="Submit" />
              </div>
            </Form>
          )}
        </Container>
      )}
    </Container>
  );
};

export default ProfilePage;
