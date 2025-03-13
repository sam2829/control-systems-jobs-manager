import React, { useContext, useEffect } from "react";
import styles from "../../styles/ProfilePage.module.css";
import Container from "react-bootstrap/Container";
import { CurrentUserContext } from "../../App";
import { useParams } from "react-router-dom";
import useProfiles from "../../hooks/useProfiles";

import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

import Profile from "./Profile";

// component to render profile page
const ProfilePage = ({ showAlert }) => {
  // call to find who is the current user
  const currentUser = useContext(CurrentUserContext);

  // get id
  const { id } = useParams();

  // custom hook to fetch profile
  const { profiles, loading, error, fetchProfiles } = useProfiles();

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
        <Profile
          {...profiles}
          currentUser={currentUser}
          showAlert={showAlert}
        />
      )}
    </Container>
  );
};

export default ProfilePage;
