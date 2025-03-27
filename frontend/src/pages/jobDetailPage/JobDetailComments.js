import React, { useEffect, useState } from "react";
import styles from "../../styles/JobDetailComments.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JobDetailCommentForm from "./JobDetailCommentForm";
import useNotes from "../../hooks/useNotes";
import JobDetailComment from "./JobDetailComment";
import useModal from "../../hooks/useModal";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../../components/LoadingSpinner";

// component to render comment content for jobs
const JobDetailComments = ({ jobId, notesCount, showAlert }) => {
  // custom hook to fetch
  const {
    notes,
    loading,
    error,
    addNoteError,
    editNoteError,
    fetchNotes,
    addNote,
    editNote,
    deleteNote,
  } = useNotes();

  // use modal custom hook to display modal
  const { isModalOpen, openModal, closeModal } = useModal();

  // use state to handle note count
  const [pageNoteCount, setPageNoteCount] = useState(notesCount);

  useEffect(() => {
    fetchNotes(jobId, notesCount, false);

    // eslint-disable-next-line
  }, [jobId, notesCount]);

  // function to handle add notes
  const handleAddNote = async (formData) => {
    await addNote(formData, showAlert);
    setPageNoteCount((prevCount) => prevCount + 1);

    await fetchNotes(jobId, notesCount, false);
  };

  // function to handle editing notes
  const handleEditNote = async (noteId, formData) => {
    await editNote(formData, showAlert, noteId);
  };

  // delete note function
  const handleDeleteNote = async (noteId) => {
    await deleteNote(noteId, showAlert, jobId);
    closeModal();
    setPageNoteCount((prevCount) => prevCount - 1);
    await fetchNotes(jobId, notesCount, false);
  };

  // infinite scroll and job detail notes
  const infiniteScrollJobNotes = (
    <InfiniteScroll
      dataLength={notes.length}
      next={() => {
        if (notes.length < notesCount) {
          fetchNotes(jobId, notesCount, true);
        }
      }}
      hasMore={notes.length < pageNoteCount}
      loader={notes.length < pageNoteCount ? <LoadingSpinner /> : null}
    >
      <JobDetailComment
        notes={notes}
        error={error}
        editError={editNoteError}
        loading={loading}
        handleDelete={handleDeleteNote}
        handleEditNote={handleEditNote}
        handleShowModal={openModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </InfiniteScroll>
  );

  return (
    <section>
      <h3 className={`${styles.SubHeading} mt-5`}>
        Notes <span className={styles.NotesCount}>{pageNoteCount}</span>
      </h3>
      {/* import add note form and notes */}
      <Row>
        {/* display only in large screens */}
        <Col xs={12} lg={6} className="d-none d-lg-block">
          {/* import job notes and infinte scroll */}
          {infiniteScrollJobNotes}
        </Col>
        <Col xs={12} lg={6}>
          <JobDetailCommentForm
            jobId={jobId}
            showAlert={showAlert}
            loading={loading}
            error={addNoteError}
            handleAddNote={handleAddNote}
          />
        </Col>
        {/* display only in small screens */}
        <Col xs={12} lg={6} className="d-lg-none d-block">
          {/* import job notes and infinte scroll */}
          {infiniteScrollJobNotes}
        </Col>
      </Row>
    </section>
  );
};

export default JobDetailComments;
