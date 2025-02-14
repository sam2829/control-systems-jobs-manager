import React, { useState } from "react";
import styles from "../../styles/JobDetailPageJob.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton";
import useJobs from "../../hooks/useJobs";
import LoadingSpinner from "../../components/LoadingSpinner";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";

const JobDetailPageJob = ({
  id,
  csa_number,
  syspal_number,
  order_number,
  quantity,
  description,
  quote,
  workshop_status,
  syspal_status,
  delivered,
  delivered_date,
  notes_count,
  currentUser,
  showAlert,
}) => {
  // // use state for job detail data
  const [jobData, setJobData] = useState({
    csaNumber: csa_number,
    syspalNumber: syspal_number,
    orderNumber: order_number,
    jobQuantity: quantity,
    jobDescription: description,
    jobQuote: quote,
    workshopStatus: workshop_status,
    syspalStatus: syspal_status,
    deliveredStatus: delivered ?? false,
    deliveredDate: delivered_date,
    notesCount: notes_count,
  });
  const {
    csaNumber,
    syspalNumber,
    orderNumber,
    jobQuantity,
    jobDescription,
    jobQuote,
    workshopStatus,
    syspalStatus,
    deliveredStatus,
    deliveredDate,
    notesCount,
  } = jobData;

  const [initialJobData] = useState(jobData); // Store initial state

  // custom hook to edit job
  const { editJob, loading, error } = useJobs();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setJobData((prevData) => ({
      ...prevData,
      [name]: name === "deliveredStatus" ? value === "true" : value,
    }));
  };

  //  handle editing job submission
  const handleEditJob = async (event) => {
    event.preventDefault();

    // Convert deliveredDate to YYYY-MM-DD format if it's a valid date
    const formattedDeliveredDate = jobData.deliveredDate
      ? new Date(jobData.deliveredDate).toISOString().split("T")[0]
      : null;

    // Construct formData with only changed fields
    const formData = {};

    Object.keys(jobData).forEach((key) => {
      if (jobData[key] !== initialJobData[key]) {
        // Convert key names to backend format
        const backendKey = key
          .replace("csaNumber", "csa_number")
          .replace("syspalNumber", "syspal_number")
          .replace("orderNumber", "order_number")
          .replace("jobQuantity", "quantity")
          .replace("jobDescription", "description")
          .replace("jobQuote", "quote")
          .replace("workshopStatus", "workshop_status")
          .replace("syspalStatus", "syspal_status")
          .replace("deliveredStatus", "delivered")
          .replace("deliveredDate", "delivered_date");

        formData[backendKey] = jobData[key];
      }
    });

    // Ensure delivered_date is properly formatted
    if ("delivered_date" in formData) {
      formData["delivered_date"] = formattedDeliveredDate;
    }

    if (Object.keys(formData).length > 0) {
      await editJob(id, formData, showAlert);
    } else {
      showAlert("success", `No edits have been made to job!`);
    }
  };

  // drop down status options
  const statusOptions = ["Not Started", "Ongoing", "Complete"];

  // drop down options for delivered
  const deliveredOptions = [
    { value: "true", label: "✔ Delivered" },
    { value: "false", label: "✖ Not Delivered" },
  ];

  return (
    <>
      <Form onSubmit={handleEditJob}>
        <section className={`${styles.DataContainer} my-5 py-4`}>
          <AuthFormErrorMessage errors={error} fieldName="csaNumber" />
          <Row>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>CSA Number:</Form.Label>
              <Form.Control
                type="text"
                name="csaNumber"
                placeholder={csaNumber}
                value={csaNumber}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
              />
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="csa_number" />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Syspal Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="syspalNumber"
                placeholder={syspalNumber}
                value={syspalNumber}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
              />
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="syspal_number" />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Order Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="orderNumber"
                placeholder={orderNumber}
                value={orderNumber}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
              />
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="order_number" />
            </Col>

            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="jobQuantity"
                placeholder={jobQuantity}
                value={jobQuantity}
                min="1"
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
              />
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="quantity" />
            </Col>
          </Row>
          <Row>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Workshop Status:
              </Form.Label>
              <Form.Select
                name="workshopStatus"
                value={workshopStatus}
                className={styles.FormData}
                required
                disabled={
                  currentUser.work_location !== "WORKSHOP" &&
                  !currentUser.is_superuser
                }
                onChange={handleChange}
              >
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </Form.Select>
              {/* error message component */}
              <AuthFormErrorMessage
                errors={error}
                fieldName="workshop_status"
              />
            </Col>

            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Syspal Status:
              </Form.Label>
              <Form.Select
                name="syspalStatus"
                value={syspalStatus}
                className={styles.FormData}
                required
                disabled={
                  currentUser.work_location !== "SYSPAL" &&
                  !currentUser.is_superuser
                }
                onChange={handleChange}
              >
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </Form.Select>
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="syspal_status" />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Delivered Status:
              </Form.Label>
              <Form.Select
                name="deliveredStatus"
                value={deliveredStatus ? deliveredStatus.toString() : "false"}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
              >
                {deliveredOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
              {/* error message component */}
              <AuthFormErrorMessage
                errors={error}
                fieldName="delivered_status"
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Date Delivered:
              </Form.Label>
              <Form.Control
                type="text"
                name="deliveredDate"
                placeholder={deliveredDate}
                value={deliveredDate}
                className={styles.FormData}
                required
                disabled
              />
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="delivered_date" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <Form.Label className={styles.FormLabel}>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="jobDescription"
                placeholder={jobDescription}
                value={jobDescription}
                className={styles.FormData}
                required
                rows={3}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
              />
              {/* error message component */}
              <AuthFormErrorMessage errors={error} fieldName="description" />
            </Col>
            {/* import of custom buttons and spinner if loading*/}
            {!loading && (
              <>
                <Col xs={12} sm={6} lg={3}>
                  <div className={`${styles.Button} py-1`}>
                    <CustomButton type="submit" text="Save Changes" />
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <div className={`${styles.Button} py-1`}>
                    <CustomButton text="Cancel" />
                  </div>
                </Col>
              </>
            )}
            {/* import spinner instead of buttons when loading */}
            {loading && (
              <Col xs={12} lg={6} className="mt-5">
                <LoadingSpinner />
              </Col>
            )}
          </Row>
        </section>
        {/* quote section */}
        <section className="px-0">
          <Form.Label className={styles.SubHeading}>Quote</Form.Label>
          <Form.Control
            type="text"
            name="jobQuote"
            placeholder={jobQuote}
            value={jobQuote}
            className={`${styles.FormData} ${styles.QuoteContainer} my-4`}
            required
            disabled={!currentUser.is_superuser}
            onChange={handleChange}
          />
          {/* error message component */}
          <AuthFormErrorMessage errors={error} fieldName="quote" />
        </section>
      </Form>

      <p>{notesCount}</p>
    </>
  );
};

export default JobDetailPageJob;
