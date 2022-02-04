import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Col, Row } from "react-bootstrap";
import Logo from "../Assets/Logos/Grey Logo.png";
import SignUp from "../Assets/Icons/right white.png";
import Learn from "../Assets/Icons/right blue.png";
import Sally from "../Assets/Images/Saly-22.png";
import saly24 from "../Assets/Images/Saly-24.png";
import saly5 from "../Assets/Images/Saly-5.png";
import saly1 from "../Assets/Images/Saly-1.png";
import saly11 from "../Assets/Images/Saly-11.png";
import oneone from "../Assets/Images/1 1.png";
import saly10 from "../Assets/Images/Saly-10.png";

import "../Styling/Pages/Homepage.css";
export default function Homepage() {
  return (
    <>
      <Navbar variant="white">
        <Container className="d-flex align-items-center justify-content-start">
          <Navbar.Brand>
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Nav>
            <NavDropdown title="Products" menuVariant="light">
              <NavDropdown.Item href="/">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="/">Item 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Supports" menuVariant="light">
              <NavDropdown.Item href="/">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="/">Item 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
        <Container className="d-flex align-items-center justify-content-end">
          <Nav.Link href="/">Log In</Nav.Link>
          <Button variant="SignUp">
            Sign up free <img src={SignUp} alt="Button" />
          </Button>
        </Container>
      </Navbar>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center">
          Where distributed <br />
          teams <span className="text-primary">get work done</span> ✨
        </h1>
        <p className="text-center">
          The online collaborative to-do list platform to <br /> bring teams together, anytime, anywhere.
        </p>
        <Button variant="board">
          Start a board <img src={SignUp} alt="Button" />{" "}
        </Button>
      </div>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <h3>Work with any team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Quisque eget pretium augue, quis ornare nisl. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <a href="http://">
              Learn more about Whiteboard board <img src={Learn} alt="Linkto" />
            </a>
          </Col>
          <Col>
            <img src={Sally} alt="WorkWithTeam" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <img src={saly24} alt="WorkWithHand" />
          </Col>
          <Col>
            <h3>Information at glance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Quisque eget pretium augue, quis ornare nisl. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <a href="http://">
              Learn more about Whiteboard board <img src={Learn} alt="Linkto" />
            </a>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <h3>Built-in workflow</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Quisque eget pretium augue, quis ornare nisl. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <a href="http://">
              Learn more about Whiteboard board <img src={Learn} alt="Linkto" />
            </a>
          </Col>
          <Col>
            <img src={saly5} alt="WorkWithBycicle" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-center">Whiteboard your way</h1>
            <h2 className="text-center">
              Use Whiteboard the way your team works best. We’ve
              <br /> got the flexibility & features to fit any team’s style.
            </h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <img src={saly1} alt="WorkWith1" />
            <p className="text-center">
              <span>Light & Fast</span>
              <br />
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Quisque{" "}
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <img src={saly11} alt="WorkWith11" />
            <p className="text-center">
              <span>Light & Fast</span>
              <br />
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Quisque{" "}
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <img src={oneone} alt="WorkWithone" />
            <p className="text-center">
              <span>Light & Fast</span>
              <br />
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Quisque{" "}
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <h1>
              Scale collaboration <br />
              with confidence
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Quisque eget pretium augue, quis ornare nisl. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <a href="http://">
              Learn more about Whiteboard board <img src={Learn} alt="Linkto" />
            </a>
          </Col>
          <Col>
            <img src={saly10} alt="WorkWithDesk" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <h1>Join over 10 million users</h1> <p>Start planning today – Save time, stay focused and work smarter with Whiteboard</p>{" "}
            <Button variant="board">
              Get Started – It’s FREE <img src={SignUp} alt="Button" />{" "}
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
