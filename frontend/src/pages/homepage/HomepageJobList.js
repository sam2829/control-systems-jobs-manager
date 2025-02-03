import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import styles from "../../styles/HomepageJobList.module.css";

// component to render list of jobs
const HomepageJobList = ({
  csa_number,
  syspal_number,
  description,
  quantity,
  order_number,
  workshop_status,
  syspal_status,
}) => {
  return (
    <>
      <Container className={`${styles.Container} my-5 py-4`}>
        <Row className="py-2 my-2">
          <Col xs={6} lg={2}>
            <p className={styles.Text}>CSA&nbsp;No:</p>
            <p className={styles.Data}>{csa_number}</p>
          </Col>
          <Col xs={6} lg={2}>
            <p className={styles.Text}>Syspal&nbsp;No:</p>
            <p className={styles.Data}>{syspal_number}</p>
          </Col>
          <Col xs={12} lg={2}>
            <p className={styles.Text}>Description:</p>
            <p className={styles.Data}>{description}</p>
          </Col>
          <Col xs={6} lg={2}>
            <p className={styles.Text}>Quantity:</p>
            <p className={styles.Data}>{quantity}</p>
          </Col>
          <Col xs={6} lg={2}>
            <p className={styles.Text}>Order&nbsp;No:</p>
            <p className={styles.Data}>{order_number}</p>
          </Col>
          <Col xs={12} lg={2}>
            <p className={styles.Text}>
              Completed: {workshop_status && syspal_status ? "Yes" : "No"}
            </p>
          </Col>
        </Row>
        {/* import custom button */}
        <div className={`${styles.Button} py-4`}>
          <CustomButton text="View Job" />
        </div>
      </Container>
    </>
  );
};

export default HomepageJobList;
