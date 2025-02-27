import React, { useState } from "react";
import styles from "../../styles/EditCommentForm.module.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";
import JobDetailFormButtons from "./JobDetailFormButtons";

// component to render edit notes form
const EditCommentForm = ({
  jobId,
  error,
  loading,
  noteData,
  id,
  toggleEditForm,
}) => {
  // use state for note data
  const [editNoteData, setEditNoteData] = useState({
    note: noteData.content,
  });
  const { note } = editNoteData;

  // handle change function for add note form fields
  const handleChange = (event) => {
    setEditNoteData({
      ...editNoteData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle cancel button to close form
  const handleCancel = (event) => {
    event.preventDefault(); // Prevent form submission or page refresh
    toggleEditForm(id); // Toggle the edit form visibility
  };

  // handle submit of new note
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = {
  //     job: jobId,
  //     content: addNoteData.note,
  //   };
  //   handleAddNote(formData);
  //   setAddNoteData({ note: "" });
  // };

  return (
    <Form className={`${styles.NotesForm} mt-5`}>
      <h3 className={`${styles.Heading} mt-3`}>Edit Note</h3>
      <Form.Label className={styles.FormLabel}></Form.Label>
      <Form.Control
        as="textarea"
        name="note"
        value={note}
        placeholder={note}
        rows={5}
        className={styles.FormInput}
        onChange={handleChange}
        required
      />
      <AuthFormErrorMessage errors={error} fieldName="content" />
      {/* import custom button */}
      <Row className="my-4">
        {/* import form buttons */}
        <JobDetailFormButtons noteButtons onClick={handleCancel} />
      </Row>
    </Form>
  );
};

export default EditCommentForm;
