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
  const [editNoteError, setEditNoteError] = useState(null);
  const [localNotesCount, setLocalNotesCount] = useState(0);

  const [nextPage, setNextPage] = useState(null);

  // fetch notes by job id
  const fetchNotes = async (jobId, notesCount, append = false) => {
    if (!currentUser) return;
    if (!jobId) return;

    setLocalNotesCount(notesCount);

    // Reset notes and next page
    if (!append) {
      setLoading(true);
      setNotes([]); // Reset when fetching fresh data
      setNextPage(null);
    }

    try {
      const endpoint =
        append && nextPage
          ? nextPage
          : `http://127.0.0.1:8000/api/notes/?job=${jobId}`;

      const response = await axios.get(endpoint);
      setNotes((prevNotes) =>
        append
          ? [
              ...prevNotes,
              ...response.data.results.filter(
                (newNote) =>
                  !prevNotes.some(
                    (existingNote) => existingNote.id === newNote.id
                  )
              ),
            ]
          : response.data.results
      );
      setNextPage(response.data.next || null);
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

  // Edit note
  const editNote = async (formData, showAlert, noteId) => {
    setLoading(true);

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/notes/${noteId}/`,
        formData
      );
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note.id === noteId ? response.data : note))
      );
      setEditNoteError(null);
      showAlert("success", "You have succesffully edited note!");
    } catch (err) {
      // console.log("error trying to edit note:", err.response.data);
      setEditNoteError(err.response?.data || {});
      showAlert(
        "warning",
        "Error trying to edit note, please check edit form!"
      );
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
      // console.log("error trying to delete note:", err.response.data);
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
    editNoteError,
    localNotesCount,
    fetchNotes,
    addNote,
    editNote,
    deleteNote,
    nextPage,
  };
};

export default useNotes;
