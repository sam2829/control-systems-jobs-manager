import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/AddJobPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import AddJobFormFields from "./AddJobFormFields";
import useJobs from "../../hooks/useJobs";
import LoadingSpinner from "../../components/LoadingSpinner";

// this is a component to render the add job page
const AddJobPage = ({ showAlert }) => {
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

  // Hook to navigate user
  const navigate = useNavigate();

  // Add job custom hook
  const { addJob, loading, error } = useJobs();

  //   handle change function for form inputs
  const handleChange = (event) => {
    setAddJobData({
      ...addJobData,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit new job data
  const handleAddJob = async (event) => {
    event.preventDefault();
    const formData = {
      csa_number: addJobData.csaNumber,
      syspal_number: addJobData.syspalNumber,
      order_number: addJobData.orderNumber,
      quantity: addJobData.quantity,
      description: addJobData.description,
      quote: addJobData.quote,
    };
    await addJob(formData, showAlert, navigate);
  };

  return (
    <Container className={styles.Main}>
      <Row>
        <h1 className={styles.Heading}>Add Job</h1>
      </Row>
      {/* Add job form */}
      <Form onSubmit={handleAddJob} className={`${styles.Form} py-4 my-5`}>
        <Row>
          <Col sm={12} lg={4}>
            <AddJobFormFields
              title="CSA&nbsp;No:"
              type="text"
              name="csaNumber"
              placeholder="CSA number..."
              value={csaNumber}
              onChange={handleChange}
              errors={error}
              fieldName="csa_number"
            />
          </Col>
          <Col sm={12} lg={4}>
            <AddJobFormFields
              title="Syspal&nbsp;No:"
              type="text"
              name="syspalNumber"
              placeholder="Syspal number..."
              value={syspalNumber}
              onChange={handleChange}
              errors={error}
              fieldName="syspal_number"
            />
          </Col>
          <Col sm={12} lg={4}>
            <AddJobFormFields
              title="Order&nbsp;No:"
              type="text"
              name="orderNumber"
              placeholder="Order number..."
              value={orderNumber}
              onChange={handleChange}
              errors={error}
              fieldName="order_number"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={4}>
            <AddJobFormFields
              title="Quantity:"
              type="number"
              min="1"
              name="quantity"
              placeholder="Quantity..."
              value={quantity}
              onChange={handleChange}
              errors={error}
              fieldName="quantity"
            />
          </Col>
          <Col sm={12} lg={8}>
            <AddJobFormFields
              title="Description:"
              type="text"
              name="description"
              placeholder="Description..."
              value={description}
              onChange={handleChange}
              errors={error}
              fieldName="description"
            />
          </Col>
        </Row>
        <AddJobFormFields
          title="Quote:"
          as="textarea"
          name="quote"
          placeholder="Quote..."
          value={quote}
          onChange={handleChange}
          rows={5}
          errors={error}
          fieldName="quote"
        />
        <div className="py-4">
          {/* import custom button */}
          <CustomButton
            text={loading ? <LoadingSpinner buttonSpinner /> : "Add Job"}
            type="submit"
            disabled={loading}
          />
        </div>
      </Form>
    </Container>
  );
};

export default AddJobPage;
