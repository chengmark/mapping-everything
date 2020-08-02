/*
 * 11551144832 Cheng Mo
 * 1155116199  Yousif Alebyary
 * 1155086631  Anju Otsuka
 * 1155098386  Dineth Perera
 */
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SignUp from "./SignUp";
import Login from "./Login";

const LoginSignUp = (props) => {
  return (
    <Container className="mt-3">
      <div className="grey-container">
        <Row>
          <Col>
            <h3 className="title-text">Login</h3>
            <Login />
          </Col>
          <Col>
            <h3 className="title-text">Sign Up</h3>
            <SignUp />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginSignUp;
