import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import { CurrentUserContext } from "../../App";

//  This component is used to render the homepage
const Hompage = () => {
  // call to find who is current user
  const currentUser = useContext(CurrentUserContext);

  return (
    <Container className={styles.Main}>
      <main>
        {/* display when a user is logged in */}
        {currentUser ? (
          <Row>
            <p>Welcome {currentUser.username}</p>
          </Row>
        ) : (
          // display when a user is not logged in
          <>
            <Row>
              <h1 className={styles.Heading}>
                Welcome to the Control Systems <br /> Automation Jobs Management
                App
              </h1>
            </Row>
            <Row className="py-5">
              <p className={styles.Text}>
                Please sign in to access job details. If you don't have an
                account, contact management to register.
              </p>
            </Row>
            <Row>
              <Link to="/signin">
                <div>
                  <CustomButton text="Sign In" />
                </div>
              </Link>
            </Row>
          </>
        )}
      </main>
    </Container>
  );
};

export default Hompage;
