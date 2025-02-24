import { useState, useContext } from "react";
import axios from "../api/axiosDefaults";
import { CurrentUserContext } from "../App";

// custom hook to handle note requests
const useNotes = () => {
  // check for current user
  const currentUser = useContext(CurrentUserContext);
  // set states for when fetching notes
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch notes by job id
  const fetchNotes = async (jobId) => {
    if (!currentUser) return;
    if (!jobId) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/notes/?job=${jobId}`
      );
      // check if response is paginated or plain list
      const notesData = response.data.results
        ? response.data.results
        : response.data;
      setNotes(notesData);
    } catch (err) {
      console.log("error trying to fetch notes", err.response.data);
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add new note
  const addNote = async (formData, showAlert) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/notes/",
        formData
      );
      setNotes((prevNotes) => [...prevNotes, response.data]);
      showAlert("success", `You have successfully added new note!`);
    } catch (err) {
      console.log("error trying to add note:", err.response.data);
      setError(err.response?.data || {});
      showAlert("warning", "Error trying to add note!");
    } finally {
      setLoading(false);
    }
  };

  return { notes, loading, error, fetchNotes, addNote };
};

export default useNotes;
