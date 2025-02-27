import React, { useState } from "react";
import styles from "../../styles/EditCommentForm.module.css";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

// component to render edit notes form
const EditCommentForm = ({ jobId, error, loading }) => {
  // use state for note data
  const [addNoteData, setAddNoteData] = useState({
    note: "",
  });
  const { note } = addNoteData;

  // handle change function for add note form fields
  const handleChange = (event) => {
    setAddNoteData({
      ...addNoteData,
      [event.target.name]: event.target.value,
    });
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
          text={loading ? <LoadingSpinner buttonSpinner /> : "Edit Note"}
          type="submit"
          disabled={loading}
        />
      </div>
    </Form>
  );
};

export default EditCommentForm;
