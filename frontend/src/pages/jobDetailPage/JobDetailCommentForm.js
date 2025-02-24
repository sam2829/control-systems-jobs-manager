import React, { useState } from "react";
import styles from "../../styles/JobDetailCommentForm.module.css";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import useNotes from "../../hooks/useNotes";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

// component to render notes form
const JobDetailCommentForm = ({ jobId, showAlert }) => {
  // use state for note data
  const [addNoteData, setAddNoteData] = useState({
    note: "",
  });
  const { note } = addNoteData;

  const { loading, error, addNote } = useNotes();

  // handle change function for add note form fields
  const handleChange = (event) => {
    setAddNoteData({
      ...addNoteData,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit new note
  const handleAddNote = async (event) => {
    event.preventDefault();
    const formData = {
      job: jobId,
      content: addNoteData.note,
    };
    addNote(formData, showAlert);
  };

  return (
    <Form onSubmit={handleAddNote} className={`${styles.NotesForm} mt-5`}>
      <h3 className={`${styles.Heading} mt-3`}>Add Note</h3>
      <Form.Label className={styles.FormLabel}></Form.Label>
      <Form.Control
        as="textarea"
        name="note"
        value={note}
        placeholder="Create new note..."
        rows={5}
        className={styles.FormInput}
        onChange={handleChange}
        required
      />
      <AuthFormErrorMessage errors={error} fieldName="content" />
      {/* import custom button */}
      <div className="my-4">
        <CustomButton
          text={loading ? <LoadingSpinner buttonSpinner /> : "Create Note"}
          type="submit"
          disabled={loading}
        />
      </div>
    </Form>
  );
};

export default JobDetailCommentForm;
