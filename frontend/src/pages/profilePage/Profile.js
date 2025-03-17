import React, { useState } from "react";
import styles from "../../styles/Profile.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import useProfiles from "../../hooks/useProfiles";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import useModal from "../../hooks/useModal";
import CustomModal from "../../components/CustomModal";

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
    workLocation: work_location
      ? work_location.charAt(0).toUpperCase() +
        work_location.slice(1).toLowerCase()
      : "",
    profileName: name,
  });
  const { workLocation, profileName } = profileData;

  // custom hook to edit profile
  const { editProfile } = useProfiles();

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

  return (
    <>
      {/* show are you sure about delete modal */}
      {isModalOpen && (
        <CustomModal
          // onConfirm={handleDelete}
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
          <Form onSubmit={handleEditProfile}>
            <Form.Label className={styles.Text}>Work Location:</Form.Label>
            <Form.Select
              name="workLocation"
              value={workLocation}
              required
              className={styles.Data}
              onChange={handleChange}
            >
              <option value="Syspal">Syspal</option>
              <option value="Workshop">Workshop</option>
            </Form.Select>
            {/* import custom button */}
            <div className="mt-4 mb-2">
              <CustomButton text="Submit" type="submit" />
            </div>
          </Form>
        )}
      </Container>
    </>
  );
};

export default Profile;
