import React, { useState } from "react";
import styles from "../../styles/JobDetailCommentForm.module.css";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "../../api/axiosDefaults";

// component to render notes form
const JobDetailCommentForm = ({ jobId }) => {
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

  // handle submit new note
  const handleAddNote = async (event) => {
    event.preventDefault();
    const formData = {
      job: jobId,
      content: addNoteData.note,
    };
    try {
      console.log("attempting to add note");
      await axios.post("http://127.0.0.1:8000/api/notes/", formData);
      console.log("add note successfully");
    } catch (err) {
      console.log("error trying to add note", err.response.data);
    }
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
        fieldName="content"
        rows={5}
        className={styles.FormInput}
        onChange={handleChange}
      />
      {/* import custom button */}
      <div className="my-4">
        <CustomButton text="Create Note" type="submit" />
      </div>
    </Form>
  );
};

export default JobDetailCommentForm;
