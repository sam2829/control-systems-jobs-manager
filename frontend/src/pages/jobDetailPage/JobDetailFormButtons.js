import React from "react";
import styles from "../../styles/JobDetailFormButtons.module.css";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";

const JobDetailFormButtons = ({ loading }) => {
  return (
    <>
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
    </>
  );
};

export default JobDetailFormButtons;
