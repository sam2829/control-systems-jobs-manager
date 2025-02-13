import React from "react";
import styles from "../../styles/JobDetailPageJob.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
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
  currentUser,
}) => {
  return (
    <>
      <Form>
        <section className={`${styles.DataContainer} my-5 py-4`}>
          <Row>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>CSA Number:</Form.Label>
              <Form.Control
                type="text"
                name="csaNumber"
                placeholder={csa_number}
                value={csa_number}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Syspal Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="syspalNumber"
                placeholder={syspal_number}
                value={syspal_number}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Order Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="orderNumber"
                placeholder={order_number}
                value={order_number}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder={quantity}
                value={quantity}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Workshop Status:
              </Form.Label>
              <Form.Control
                type="text"
                name="workshopStatus"
                placeholder={workshop_status}
                value={workshop_status}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Syspal Status:
              </Form.Label>
              <Form.Control
                type="text"
                name="syspalStatus"
                placeholder={syspal_status}
                value={syspal_status}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Delivered Status:
              </Form.Label>
              <Form.Control
                type="text"
                name="deliveredStatus"
                placeholder={delivered ? "Yes" : "No"}
                value={delivered}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
            <Col xs={6} lg={3}>
              <Form.Label className={styles.FormLabel}>
                Date Delivered:
              </Form.Label>
              <Form.Control
                type="text"
                name="deliveredDate"
                placeholder={delivered_date ? delivered_date : "Not delivered"}
                value={delivered_date}
                className={styles.FormData}
                required
                disabled={!currentUser.is_superuser}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <Form.Label className={styles.FormLabel}>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder={description}
                value={description}
                className={styles.FormData}
                required
                rows={3}
                disabled={!currentUser.is_superuser}
              />
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
          <Form.Label className={styles.SubHeading}>Quote</Form.Label>
          <Form.Control
            type="text"
            name="quote"
            placeholder={quote}
            value={quote}
            className={`${styles.FormData} ${styles.QuoteContainer} my-4`}
            required
            disabled={!currentUser.is_superuser}
          />
        </section>
      </Form>

      <p>{notes_count}</p>
    </>
  );
};

export default JobDetailPageJob;
