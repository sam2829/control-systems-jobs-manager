import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";

// component to render bustom buttons for modifying
// profile username and password
const ProfileAuthEditButtons = ({ loading }) => {
  return (
    <>
      <Row className="mt-4 justify-content-center">
        {!loading && (
          <>
            <Col xs={12} sm={6}>
              <div className="py-2">
                <CustomButton text="Save" type="submit" />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="py-2">
                <CustomButton text="Go Back" goBackButton />
              </div>
            </Col>
          </>
        )}
        {loading && <LoadingSpinner />}
      </Row>
    </>
  );
};

export default ProfileAuthEditButtons;
