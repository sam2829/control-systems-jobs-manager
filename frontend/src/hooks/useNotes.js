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
  const [addNoteError, setAddNoteError] = useState(null);
  const [localNotesCount, setLocalNotesCount] = useState(0);

  // fetch notes by job id
  const fetchNotes = async (jobId, notesCount) => {
    if (!currentUser) return;
    if (!jobId) return;
    setLocalNotesCount(notesCount);
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
      setError(null);
    } catch (err) {
      // console.log("error trying to fetch notes", err.response.data);
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
      setLocalNotesCount((prevCount) => prevCount + 1);
      setAddNoteError(null);
      showAlert("success", `You have successfully added new note!`);
    } catch (err) {
      // console.log("error trying to add note:", err.response.data);
      setAddNoteError(err.response?.data || {});
      showAlert("warning", "Error trying to add note!");
    } finally {
      setLoading(false);
    }
  };

  // delete note
  const deleteNote = async (noteId, showAlert, jobId) => {
    setLoading(true);

    try {
      await axios.delete(`http://127.0.0.1:8000/api/notes/${noteId}/`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      setLocalNotesCount((prevCount) => prevCount - 1);
      showAlert("success", `You have successfully deleted your note!`);
    } catch (err) {
      console.log("error trying to delete note:", err.response.data);
      setAddNoteError(err.response?.data || {});
      showAlert("warning", "Error trying to delete note!");
    } finally {
      setLoading(false);
    }
  };

  return {
    notes,
    setNotes,
    loading,
    error,
    addNoteError,
    localNotesCount,
    fetchNotes,
    addNote,
    deleteNote,
  };
};

export default useNotes;
