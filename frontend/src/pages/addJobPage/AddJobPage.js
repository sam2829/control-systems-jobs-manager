import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/AddJobPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import axios from "../../api/axiosDefaults";
import AddJobFormFields from "./AddJobFormFields";

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

  //Error state for sign in form
  const [errors, setErrors] = useState({});

  // Hook to navigate user
  const navigate = useNavigate();

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
    try {
      await axios.post("http://127.0.0.1:8000/api/jobs/", formData);
      showAlert("success", `You have successfully added new job!`);
      navigate("/");
    } catch (err) {
      console.log("error trying to add job:", err.response.data);
      setErrors(err.response?.data || {});
      showAlert("warning", "Error trying to add new job!");
    }
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
              errors={errors}
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
              errors={errors}
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
              errors={errors}
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
              errors={errors}
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
              errors={errors}
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
          errors={errors}
        />
        <div className="py-4">
          {/* import custom button */}
          <CustomButton text="Add Job" type="submit" />
        </div>
      </Form>
    </Container>
  );
};

export default AddJobPage;
