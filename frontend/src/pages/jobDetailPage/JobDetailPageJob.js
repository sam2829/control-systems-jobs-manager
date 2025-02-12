import React from "react";
import styles from "../../styles/JobDetailPageJob.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";

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
}) => {
  return (
    <>
      <section className={`${styles.DataContainer} my-5 py-4`}>
        <Row>
          <Col xs={6} lg={3} className="justify-content-center">
            <p className={styles.Text}>CSA Number:</p>
            <p className={styles.Data}>{csa_number}</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Syspal Number:</p>
            <p className={styles.Data}>{syspal_number}</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Order Number:</p>
            <p className={styles.Data}>{order_number}</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Quantity:</p>
            <p className={styles.Data}>{quantity}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Workshop Status:</p>
            <p className={styles.Data}>{workshop_status}</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Syspal Status:</p>
            <p className={styles.Data}>{syspal_status}</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Date Delivered:</p>
            <p className={styles.Data}>{delivered ? "yes" : "No"}</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className={styles.Text}>Date Delivered:</p>
            <p className={styles.Data}>
              {delivered_date ? delivered_date : "Not delivered"}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <p className={styles.Text}>Description:</p>
            <p className={styles.Data}>{description}</p>
          </Col>
          {/* import of custom buttons */}
          <Col xs={12} sm={6} lg={3}>
            <div className={`${styles.Button} py-1`}>
              <CustomButton text="Save Changes" />
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className={`${styles.Button} py-1`}>
              <CustomButton text="Cancel" />
            </div>
          </Col>
        </Row>
      </section>
      {/* quote section */}
      <section className="px-0">
        <h2 className={styles.SubHeading}>Quote</h2>
        <p className={`${styles.Data} ${styles.QuoteContainer} my-4`}>
          {quote}
        </p>
      </section>

      <p>{notes_count}</p>
    </>
  );
};

export default JobDetailPageJob;
