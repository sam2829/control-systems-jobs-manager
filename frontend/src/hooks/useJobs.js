import { useState, useContext } from "react";
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

  const [nextPage, setNextPage] = useState(null);

  // Fetch jobs or job by id
  const fetchJobs = async (id = null, searchQuery = "", append = false) => {
    if (!currentUser) return;

    // Reset jobs and nextPage for new searches
    if (!append && !id && searchQuery !== "") {
      setJobs([]);
      setNextPage(null);
    }

    if (append === false) {
      setLoading(true);
    }

    try {
      const endpoint = id
        ? `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/jobs/${id}/`
        : !append
        ? `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/jobs/?search=${searchQuery}`
        : nextPage;
      const response = await axios.get(endpoint);
      setJobs((prevJobs) =>
        append
          ? [...prevJobs, ...response.data.results]
          : id
          ? response.data
          : response.data.results
      );
      // Save next page URL for infinite scroll
      setNextPage(response.data.next || null);
    } catch (err) {
      setError(err.response?.data || err.message);
      console.error("Error in fetchJobs:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add a new job
  const addJob = async (formData, showAlert, navigate) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/jobs/",
        formData
      );
      setJobs((prevJobs) => [...prevJobs, response.data]);
      showAlert("success", `You have successfully added new job!`);
      navigate("/");
    } catch (err) {
      // console.log("error trying to add job:", err.response.data);
      setError(err.response?.data || {});
      showAlert("warning", "Error trying to add new job!");
    } finally {
      setLoading(false);
    }
  };

  // edit existing job
  const editJob = async (id, formData, showAlert) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/jobs/${id}/`,
        formData
      );
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job.id === id ? response.data : job))
      );
      showAlert("success", `You have successfully modified the job!`);
    } catch (err) {
      // console.log("Error trying to edit job:", err.response?.data || err);
      setError(err.response?.data || {});
      showAlert("warning", "Error trying to edit the job!");
    } finally {
      setLoading(false);
    }
  };

  // delete job
  const deleteJob = async (id, showAlert, navigate) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://control-systems-jobs-8e7c07b4a83a.herokuapp.com/api/jobs/${id}/`
      );
      // Update state to remove the deleted job
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      showAlert("success", `You have successfully deleted job!`);
      navigate("/");
    } catch (err) {
      // console.log("Error trying to delete job:", err.response?.data || err);
      setError(err.response?.data || {});
      showAlert("warning", "Error trying to delete job!");
    } finally {
      setLoading(false);
    }
  };

  return {
    jobs,
    loading,
    error,
    fetchJobs,
    addJob,
    editJob,
    deleteJob,
    nextPage,
  };
};

export default useJobs;
