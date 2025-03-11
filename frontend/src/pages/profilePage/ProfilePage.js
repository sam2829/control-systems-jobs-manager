import React, { useContext, useEffect } from "react";
import styles from "../../styles/ProfilePage.module.css";
import Container from "react-bootstrap/Container";
import { CurrentUserContext } from "../../App";
import { useParams } from "react-router-dom";
import useProfiles from "../../hooks/useProfiles";

const ProfilePage = () => {
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
      <Container className={`${styles.ProfileContainer} mt-5 py-4`}>
        <p className={`${styles.Text} mt-3 mb-4`}>{profiles.owner}</p>
        <p className={styles.Text}>
          Work Location:{" "}
          <span className={styles.Data}>
            {profiles.work_location
              ? profiles.work_location.charAt(0).toUpperCase() +
                profiles.work_location.slice(1).toLowerCase()
              : ""}
          </span>
        </p>
      </Container>
    </Container>
  );
};

export default ProfilePage;
