import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";

//  This component is used to render the homepage
const Hompage = () => {
  return (
    <Container className={styles.Main}>
      <main>
        <Row>
          <h1 className={styles.Heading}>
            Welcome to the Control Systems <br /> Automation Jobs Management App
          </h1>
        </Row>
        <Row className="py-5">
          <p className={styles.Text}>
            Please sign in to access job details. If you don't have an account,
            contact management to register.
          </p>
        </Row>
        <Row>
          <Link to="/signin">
            <div>
              <CustomButton text="Sign In" />
            </div>
          </Link>
        </Row>
      </main>
    </Container>
  );
};

export default Hompage;
