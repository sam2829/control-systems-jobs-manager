import React from "react";
import styles from "../styles/CustomModal.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "./CustomButton";

// component to render the sign out modal
const CustomModal = ({ onConfirm, onCancel, message, noteModal }) => {
  return (
    <>
      <div
        className={`${styles.ModalBackdrop} ${
          noteModal ? styles.NoteBackdrop : ""
        }`}
        onClick={() => onCancel(false)}
      >
        <Container className={styles.Modal}>
          <p className={`${styles.Text} mb-4`}>{message}</p>
          {/* import custom buttons */}
          <Row>
            <Col className="mt-3" xs={12} lg={6}>
              <CustomButton onClick={onConfirm} text="Yes" />
            </Col>
            <Col className="mt-3" xs={12} lg={6}>
              <CustomButton onClick={() => onCancel(false)} text="No" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CustomModal;
