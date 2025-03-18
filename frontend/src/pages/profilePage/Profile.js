import React, { useState } from "react";
import styles from "../../styles/Profile.module.css";
import Container from "react-bootstrap/Container";
import useProfiles from "../../hooks/useProfiles";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import useModal from "../../hooks/useModal";
import CustomModal from "../../components/CustomModal";
import { useNavigate } from "react-router-dom";
import ProfileWorkLocationForm from "./ProfileWorkLocationForm";

// component to render profile work location
const Profile = ({
  id,
  owner,
  is_owner,
  work_location,
  name,
  currentUser,
  showAlert,
}) => {
  // profile data
  const [profileData, setProfileData] = useState({
    workLocation: work_location,
    profileName: name,
  });
  const { workLocation, profileName } = profileData;

  // custom hook to edit profile
  const { editProfile, deleteProfile } = useProfiles();

  // Hook to navigate user
  const navigate = useNavigate();

  // use modal custom hook
  const { isModalOpen, openModal, closeModal } = useModal();

  // handle form change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle form submission to edit profile
  const handleEditProfile = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", profileName || "");
    formData.append("work_location", workLocation);

    await editProfile(id, formData, showAlert);
  };

  // handle delete profile
  const handleDelete = async () => {
    await deleteProfile(id, showAlert, navigate);
    closeModal();
  };

  return (
    <>
      {/* show are you sure about delete modal */}
      {isModalOpen && (
        <CustomModal
          onConfirm={handleDelete}
          onCancel={closeModal}
          message="Are you sure you want to delete this profile?"
        />
      )}
      <Container className={`${styles.ProfileContainer} mt-5 py-4`}>
        {/* drop down menu for owner of profile */}
        {(is_owner || currentUser.is_superuser) && (
          <div className={styles.DropdownContainer}>
            <ProfileEditDropdown
              id={id}
              superUser={currentUser.is_superuser}
              handleShowModal={openModal}
              isOwner={is_owner}
            />
          </div>
        )}
        <p className={`${styles.Text} mt-3 mb-5`}>
          <span className={styles.Owner}>
            {name === "" ? owner : profileName}
          </span>
        </p>

        {!currentUser.is_superuser && (
          <p className={styles.Text}>
            Work Location: <span className={styles.Data}>{workLocation}</span>
          </p>
        )}
        {/* render work location edit form if super user */}
        {currentUser.is_superuser && (
          // import work location form
          <ProfileWorkLocationForm
            title="Work Location:"
            name="workLocation"
            value={workLocation}
            handleChange={handleChange}
            handleEditProfile={handleEditProfile}
          />
        )}
      </Container>
    </>
  );
};

export default Profile;
