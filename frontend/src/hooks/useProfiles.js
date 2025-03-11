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

  // fetch profiles or by profile id
  const fetchProfiles = async (id = null) => {
    if (!currentUser) return;

    setLoading(true);
    try {
      const endpoint = id
        ? `http://127.0.0.1:8000/api/profiles/${id}`
        : `http://127.0.0.1:8000/api/profiles/`;

      const response = await axios.get(endpoint);
      setProfiles(id ? response.data : response.data.results);
    } catch (err) {
      setError(err.response?.data || err.message);
      console.log("error trying to fetch profiles:", err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { profiles, loading, error, fetchProfiles };
};

export default useProfiles;
