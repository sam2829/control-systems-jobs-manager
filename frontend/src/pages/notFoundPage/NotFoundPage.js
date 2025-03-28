import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NotFoundPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NotFoundImage from "../../images/404-image.webp";
import CustomButton from "../../components/CustomButton";

// component to render 404 page
const NotFoundPage = () => {
  return (
    <Container className={styles.Main}>
      <main>
        <h1 className={styles.Heading}>Oops! Page Not Found</h1>
        <Row className="justify-content-center my-4">
          <div className={styles.ImageContainer}>
            {/* 404 image */}
            <img
              className={styles.Image}
              src={NotFoundImage}
              alt="Broken electrical cable for not found page"
            />
          </div>
        </Row>
        <Row>
          <p className={styles.Text}>
            Looks like your lost! Click the button below to take you back to the
            homepage.
          </p>
        </Row>
        <Row>
          <Link to="/">
            <div className="mt-3">
              {/* import custom button */}
              <CustomButton text="Homepage" />
            </div>
          </Link>
        </Row>
      </main>
    </Container>
  );
};

export default NotFoundPage;
