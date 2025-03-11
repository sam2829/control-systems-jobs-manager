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
      console.log(profiles)
    }
    // eslint-disable-next-line
  }, [currentUser, id]);

  return (
    <Container className={styles.Main}>
      <p>{profiles.owner}</p>
    </Container>
  );
};

export default ProfilePage;
