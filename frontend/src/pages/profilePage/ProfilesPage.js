import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/ProfilesPage.module.css";
import Container from "react-bootstrap/Container";
import { CurrentUserContext } from "../../App";
import useProfiles from "../../hooks/useProfiles";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import CustomButton from "../../components/CustomButton";

const ProfilesPage = () => {
  // call to find who is the current user
  const currentUser = useContext(CurrentUserContext);

  // custom hook for fetching profiles
  const { profiles, loading, error, fetchProfiles } = useProfiles();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.is_superuser) {
        fetchProfiles();
      }
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <Container className={styles.Main}>
      <h2 className={styles.Heading}>Profiles</h2>
      {/* loading profiles */}
      {loading && <LoadingSpinner />}
      {/* display error message */}
      {!loading && error && <ErrorMessage error={error} />}
      {/* display profiles */}
      {!loading && !error ? (
        currentUser?.is_superuser ? (
          profiles.length > 0 ? (
            profiles.map((profile) => (
              <Container
                className={`${styles.ProfileContainer} mt-5 py-4`}
                key={profile.id}
              >
                <p className={`${styles.Text} mt-3 mb-4`}>
                  Username: <span className={styles.Data}>{profile.owner}</span>
                </p>
                <Link to={`/profile/${profile.id}`}>
                  <div>
                    <CustomButton text="View Profile" />
                  </div>
                </Link>
              </Container>
            ))
          ) : (
            <p>No profiles found</p>
          )
        ) : (
          <p>You are not a super user</p>
        )
      ) : null}
    </Container>
  );
};

export default ProfilesPage;
