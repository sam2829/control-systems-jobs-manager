import { useState, useContext } from "react";
import axios from "../api/axiosDefaults";
import { CurrentUserContext } from "../App";

//  custom hook to handle profile requests
const useProfiles = (profileId = null) => {
  // check for current user
  const currentUser = useContext(CurrentUserContext);

  // set states for managing profiles
  const [profiles, setProfiles] = useState(profileId ? null : []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [nextPage, setNextPage] = useState(null);

  // fetch profiles or by profile id
  const fetchProfiles = async (id = null, append = false) => {
    if (!currentUser) return;

    // Reset profiles and nextPage for new searches
    if (!append && !id) {
      setProfiles([]);
      setNextPage(null);
    }

    if (append === false) {
      setLoading(true);
    }

    try {
      const endpoint = id
        ? `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/profiles/${id}`
        : append && nextPage
        ? nextPage
        : `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/profiles/`;

      const response = await axios.get(endpoint);

      setProfiles((prevProfiles) =>
        append
          ? [...prevProfiles, ...response.data.results]
          : id
          ? response.data
          : response.data.results
      );
      setNextPage(response.data.next || null);
    } catch (err) {
      setError(err.response?.data || err.message);
      // console.log(
      //   "error trying to fetch profiles:",
      //   err.response?.data || err.message
      // );
    } finally {
      setLoading(false);
    }
  };

  // edit profiles
  const editProfile = async (id, formData, showAlert) => {
    setLoading(true);

    try {
      const response = await axios.patch(
        `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/profiles/${id}`,
        formData
      );
      setProfiles((prevProfile) =>
        Array.isArray(prevProfile)
          ? prevProfile.map((profile) =>
              profile.id === id ? response.data : profile
            )
          : response.data
      );
      showAlert("success", `You have successfully modified the profile!`);
    } catch (err) {
      // console.log("Error trying to modify profile:", err.response?.data || err);
      setError(err.response?.data || {});
      showAlert("warning", "Error trying to modify the profile!");
    } finally {
      setLoading(false);
    }
  };

  // delete profiles
  const deleteProfile = async (id, showAlert, navigate) => {
    setLoading(true);

    try {
      await axios.delete(
        `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/profiles/${id}`
      );
      // update state and remove deleted profile
      setProfiles((prevProfiles) =>
        prevProfiles.filter((profile) => profile.id !== id)
      );
      showAlert("success", `You have successfully deleted profile!`);
      navigate("/profiles");
    } catch (err) {
      // console.log("Error trying to delete profile:", err.response?.data || err);
      setError(err.response?.data || {});
      showAlert("warning", "Error trying to delete this profile!");
    } finally {
      setLoading(false);
    }
  };

  return {
    profiles,
    loading,
    error,
    fetchProfiles,
    editProfile,
    deleteProfile,
    nextPage,
  };
};

export default useProfiles;
