import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";

// component to render bustom buttons for modifying
// profile username and password
const ProfileAuthEditButtons = () => {
  return (
    <>
      <Row className="mt-4 justify-content-center">
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
      </Row>
    </>
  );
};

export default ProfileAuthEditButtons;
