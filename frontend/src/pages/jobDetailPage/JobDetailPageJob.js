import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/JobDetailPageJob.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import useJobs from "../../hooks/useJobs";
import AuthFormErrorMessage from "../auth/AuthFormErrorMessage";
import JobDetailFormFields from "./JobDetailFormFields";
import JobDetailDropDownField from "./JobDetailDropDownField";
import JobDetailFormButtons from "./JobDetailFormButtons";
import { MoreDropdown } from "../../components/MoreDropdown";
import useModal from "../../hooks/useModal";
import CustomModal from "../../components/CustomModal";

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
  fetchJobs,
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
  } = jobData;

  // store initial state
  const [initialJobData] = useState(jobData);

  // Hook to navigate user
  const navigate = useNavigate();

  // custom hook to edit and delete job
  const { editJob, loading, error, deleteJob } = useJobs();

  // use modal custom hook
  const { isModalOpen, openModal, closeModal } = useModal();

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
      fetchJobs(id);
    } else {
      showAlert("success", `No edits have been made to job!`);
    }
  };

  // handle deleting job
  const handleDelete = async () => {
    await deleteJob(id, showAlert, navigate);
    closeModal();
  };

  return (
    <>
      {/* show are you sure about delete modal */}
      {isModalOpen && (
        <CustomModal
          onConfirm={handleDelete}
          onCancel={closeModal}
          message="Are you sure you want to delete this job?"
        />
      )}
      <Form onSubmit={handleEditJob}>
        <section className={`${styles.DataContainer} my-5 py-4`}>
          {/* dropdown icon for super user */}
          {currentUser.is_superuser && (
            <div className={styles.DropdownContainer}>
              <MoreDropdown handleShowModal={openModal} />
            </div>
          )}
          <AuthFormErrorMessage errors={error} fieldName="csaNumber" />
          <Row>
            <Col xs={6} lg={3}>
              <JobDetailFormFields
                title="CSA Number:"
                type="text"
                name="csaNumber"
                placeholder={csaNumber}
                value={csaNumber}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
                fieldName="csa_number"
                errors={error}
              />
            </Col>
            <Col xs={6} lg={3}>
              <JobDetailFormFields
                title="Syspal Number:"
                type="text"
                name="syspalNumber"
                placeholder={syspalNumber}
                value={syspalNumber}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
                fieldName="syspal_number"
                errors={error}
              />
            </Col>
            <Col xs={6} lg={3}>
              <JobDetailFormFields
                title="Order Number:"
                type="text"
                name="orderNumber"
                placeholder={orderNumber}
                value={orderNumber}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
                fieldName="order_number"
                errors={error}
              />
            </Col>
            <Col xs={6} lg={3}>
              <JobDetailFormFields
                title="Quantity:"
                type="number"
                name="jobQuantity"
                placeholder={jobQuantity}
                value={jobQuantity}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
                fieldName="quantity"
                min="1"
                errors={error}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} lg={3}>
              <JobDetailDropDownField
                title="Workshop Status"
                name="workshopStatus"
                value={workshopStatus}
                disabled={
                  currentUser.work_location !== "WORKSHOP" &&
                  !currentUser.is_superuser
                }
                onChange={handleChange}
                optionType="workplace"
                fieldName="workshop_status"
                errors={error}
              />
            </Col>
            <Col xs={6} lg={3}>
              <JobDetailDropDownField
                title="Syspal Status"
                name="syspalStatus"
                value={syspalStatus}
                disabled={
                  currentUser.work_location !== "SYSPAL" &&
                  !currentUser.is_superuser
                }
                onChange={handleChange}
                optionType="workplace"
                fieldName="syspal_status"
                errors={error}
              />
            </Col>
            <Col xs={6} lg={3}>
              <JobDetailDropDownField
                title="Delivered Status"
                name="deliveredStatus"
                value={deliveredStatus ? deliveredStatus.toString() : "false"}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
                optionType="delivered"
                fieldName="delivered_status"
                errors={error}
              />
            </Col>
            <Col xs={6} lg={3}>
              <JobDetailFormFields
                title="Date Delivered:"
                type="text"
                name="deliveredDate"
                placeholder={deliveredDate}
                value={deliveredDate}
                disabled
                fieldName="delivered_date"
                errors={error}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <JobDetailFormFields
                title="Description:"
                as="textarea"
                name="jobDescription"
                placeholder={jobDescription}
                value={jobDescription}
                disabled={!currentUser.is_superuser}
                onChange={handleChange}
                fieldName="description"
                rows={3}
                errors={error}
              />
            </Col>
            {/* import of custom buttons and spinner if loading*/}
            <JobDetailFormButtons loading={loading} />
          </Row>
        </section>
        {/* quote section */}
        <section className="px-0">
          <JobDetailFormFields
            title="Quote:"
            as="textarea"
            name="jobQuote"
            placeholder={jobQuote}
            value={jobQuote}
            disabled={!currentUser.is_superuser}
            onChange={handleChange}
            fieldName="quote"
            quote
            errors={error}
          />
        </section>
      </Form>
    </>
  );
};

export default JobDetailPageJob;
