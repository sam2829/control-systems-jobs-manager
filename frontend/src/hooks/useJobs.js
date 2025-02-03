import { useState, useEffect, useContext } from "react";
import axios from "../api/axiosDefaults";
import { CurrentUserContext } from "../App";

// custom hook to handle job requests
const useJobs = (jobId = null) => {
  // check for current user
  const currentUser = useContext(CurrentUserContext);
  // set states for when fetching jobs
  const [jobs, setJobs] = useState(jobId ? null : []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch jobs or job by id
  const fetchJobs = async (id = null) => {
    if (!currentUser) return;

    setLoading(true);
    try {
      const endpoint = id
        ? "http://127.0.0.1:8000/api/jobs/${id}/"
        : "http://127.0.0.1:8000/api/jobs/";
      const response = await axios.get(endpoint);
      setJobs(id ? response.data : response.data.results);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchJobs(jobId);
    }
  }, [currentUser, jobId]);

  return { jobs, loading, error, fetchJobs };
};

export default useJobs;
