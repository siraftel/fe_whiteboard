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
import aplle from "../Assets/Icons/appstore.png";
import playstore from "../Assets/Icons/playstore.png";
import style from "../Styling/Pages/Homepage.module.css";
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
          <Button className={style.btn_SignUp} variant="SignUp">
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
        <Button className={style.btn_board} variant="board">
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
      <div className={style.footer}>
        <Row>
          <Col className="d-flex align-items-center justify-content-center flex-column">
            <h1>Join over 10 million users</h1> <p>Start planning today – Save time, stay focused and work smarter with Whiteboard</p>{" "}
            <Button className={style.btn_board} variant="board">
              Get Started – It’s FREE <img src={SignUp} alt="Button" />{" "}
            </Button>{" "}
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <h2>Product</h2>
              <ul>
                <li>
                  <a href="http://">Our Whiteboard</a>
                </li>
                <li>
                  <a href="http://">Templates</a>
                </li>
                <li>
                  <a href="http://">Slack Integration</a>
                </li>
                <li>
                  <a href="http://">Dropbox Integration</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="http://">About</a>
                </li>
                <li>
                  <a href="http://">Careers</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>Support</h2>
              <ul>
                <li>
                  <a href="http://">Help Center</a>
                </li>
                <li>
                  <a href="http://">FAQ</a>
                </li>
                <li>
                  <a href="http://">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col xs={5} className={style.cobaFooter}>
              <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3103 7.53569L12.9433 14.7197L10.6769 7.53569H7.75588L5.48955 14.7197L3.1225 7.53569H0L4.07939 18.8392H6.89972L9.21641 11.5547L11.5331 18.8392H14.3534L18.4328 7.53569H15.3103Z" fill="white" />
                <path
                  d="M29.7751 11.7054C29.7751 8.867 27.3073 7.03331 24.8143 7.03331C23.8071 7.03331 22.7243 7.30962 21.9688 8.11343V0H18.9471V18.8392H21.9688V12.1073C21.9688 10.8514 23.0768 9.74616 24.487 9.74616C25.8216 9.74616 26.7533 10.6253 26.7533 11.831V18.8392H29.7751V11.7054Z"
                  fill="white"
                />
                <path d="M35.0711 0H32.0493V3.26547H35.0711V0ZM35.0711 7.53569H32.0493V18.8392H35.0711V7.53569Z" fill="white" />
                <path d="M43.375 7.53569H41.3605V0H38.3387V7.53569H36.3242V10.1732H38.3387V18.8392H41.3605V10.1732H43.375V7.53569Z" fill="white" />
                <path
                  d="M56.4655 13.1875C56.4655 9.7964 53.6955 7.03331 50.296 7.03331C46.8965 7.03331 44.1265 9.7964 44.1265 13.1875C44.1265 16.5785 46.8965 19.3416 50.296 19.3416C52.5875 19.3416 54.5768 18.1108 55.6345 16.2771L53.0911 14.77C52.5875 15.9254 51.5299 16.7041 50.296 16.7041C48.9614 16.7041 47.8282 15.7747 47.375 14.4685H56.3395C56.4151 14.0666 56.4655 13.6396 56.4655 13.1875ZM47.4001 11.831C47.8786 10.55 48.9866 9.67081 50.296 9.67081C51.6054 9.67081 52.7134 10.5751 53.1919 11.831H47.4001Z"
                  fill="white"
                />
                <path
                  d="M70.5631 13.1875C70.5631 9.31914 67.4406 7.05843 64.4692 7.05843C63.3109 7.05843 62.1777 7.4101 61.246 8.13855V0H58.2242V18.8392H61.246V18.2364C62.1777 18.9648 63.3109 19.3165 64.4692 19.3165C67.4406 19.3165 70.5631 17.0558 70.5631 13.1875ZM67.5414 13.1875C67.5414 15.1216 66.1312 16.7041 64.3937 16.7041C62.6562 16.7041 61.246 15.1216 61.246 13.1875C61.246 11.2533 62.6562 9.67081 64.3937 9.67081C66.1312 9.67081 67.5414 11.2533 67.5414 13.1875Z"
                  fill="white"
                />
                <path
                  d="M84.17 13.1875C84.17 9.7964 81.4 7.03331 78.0005 7.03331C74.601 7.03331 71.831 9.7964 71.831 13.1875C71.831 16.5785 74.601 19.3416 78.0005 19.3416C81.4 19.3416 84.17 16.5785 84.17 13.1875ZM81.1482 13.1875C81.1482 15.1216 79.738 16.7041 78.0005 16.7041C76.263 16.7041 74.8528 15.1216 74.8528 13.1875C74.8528 11.2533 76.263 9.67081 78.0005 9.67081C79.738 9.67081 81.1482 11.2533 81.1482 13.1875Z"
                  fill="white"
                />
                <path
                  d="M97.764 7.53569H94.7422V8.13855C93.8105 7.4101 92.6774 7.05843 91.519 7.05843C88.5476 7.05843 85.4251 9.31914 85.4251 13.1875C85.4251 17.0558 88.5476 19.3165 91.519 19.3165C92.6774 19.3165 93.8105 18.9648 94.7422 18.2364V18.8392H97.764V7.53569ZM94.7422 13.1875C94.7422 15.1216 93.3321 16.7041 91.5946 16.7041C89.857 16.7041 88.4469 15.1216 88.4469 13.1875C88.4469 11.2533 89.857 9.67081 91.5946 9.67081C93.3321 9.67081 94.7422 11.2533 94.7422 13.1875Z"
                  fill="white"
                />
                <path
                  d="M106.662 7.15891C106.158 7.08355 105.655 7.03331 105.176 7.03331C104.169 7.03331 103.212 7.25939 102.431 8.11343V7.53569H99.4097V18.8392H102.431V12.0822C102.431 10.7509 103.514 9.59545 105.075 9.59545C105.529 9.59545 106.335 9.74616 106.662 9.84664V7.15891Z"
                  fill="white"
                />
                <path
                  d="M119.769 0H116.747V8.13855C115.816 7.4101 114.683 7.05843 113.524 7.05843C110.553 7.05843 107.43 9.31914 107.43 13.1875C107.43 17.0558 110.553 19.3165 113.524 19.3165C114.683 19.3165 115.816 18.9648 116.747 18.2364V18.8392H119.769V0ZM116.747 13.1875C116.747 15.1216 115.337 16.7041 113.6 16.7041C111.862 16.7041 110.452 15.1216 110.452 13.1875C110.452 11.2533 111.862 9.67081 113.6 9.67081C115.337 9.67081 116.747 11.2533 116.747 13.1875Z"
                  fill="white"
                />
              </svg>
              <p>Available on</p>
              <div>
                <img src={aplle} alt="aplle" />
                <img src={playstore} alt="playstore" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
