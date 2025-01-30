import React, { useState } from "react";
import styles from "../../styles/AddJobPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";

// this is a component to render the add job page
const AddJobPage = () => {
  // use state hook for add job data
  const [addJobData, setAddJobData] = useState({
    csaNumber: "",
    syspalNumber: "",
    orderNumber: "",
    quantity: 1,
    description: "",
    quote: "",
  });
  const { csaNumber, syspalNumber, orderNumber, quantity, description, quote } =
    addJobData;

  //   handle change function for form inputs
  const handleChange = (event) => {
    setAddJobData({
      ...addJobData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className={styles.Main}>
      <Row>
        <h1 className={styles.Heading}>Add Job</h1>
      </Row>
      {/* Add job form */}
      <Form className={`${styles.Form} py-4 my-5`}>
        <Form.Label className={styles.FormLabel}>CSA&nbsp;No:</Form.Label>
        <Form.Control
          type="text"
          name="csaNumber"
          placeholder="CSA number here..."
          value={csaNumber}
          onChange={handleChange}
          className={`${styles.FormInput} py-2 my-2`}
        />
        <Form.Label className={styles.FormLabel}>Syspal&nbsp;No:</Form.Label>
        <Form.Control
          type="text"
          name="syspalNumber"
          placeholder="Syspal number here..."
          value={syspalNumber}
          onChange={handleChange}
          className={`${styles.FormInput} py-2 my-2`}
        />
        <Form.Label className={styles.FormLabel}>Order&nbsp;No:</Form.Label>
        <Form.Control
          type="text"
          name="orderNumber"
          placeholder="Order number here..."
          value={orderNumber}
          onChange={handleChange}
          className={`${styles.FormInput} py-2 my-2`}
        />
        <Form.Label className={styles.FormLabel}>Quantity:</Form.Label>
        <Form.Control
          type="number"
          min="1"
          name="quantity"
          placeholder="Quantity here..."
          value={quantity}
          onChange={handleChange}
          className={`${styles.FormInput} py-2 my-2`}
        />
        <Form.Label className={styles.FormLabel}>Description:</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Description here..."
          value={description}
          onChange={handleChange}
          className={`${styles.FormInput} py-2 my-2`}
        />
        <Form.Label className={styles.FormLabel}>Quote:</Form.Label>
        <Form.Control
          type="text"
          name="quote"
          placeholder="Quote here..."
          value={quote}
          onChange={handleChange}
          className={`${styles.FormInput} py-2 my-2`}
        />
      </Form>
    </Container>
  );
};

export default AddJobPage;
