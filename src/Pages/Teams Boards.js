import UserNavbar from "../Components/ShareComponent/Navbar/NavbarIsLogin";
import style from "../Styling/Pages/TeamsBoards.module.css";
import Sidebar from "../Components/ShareComponent/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";

export default function TeamsBoards() {
  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <Sidebar />
        <div className={`${style.content_wrapper} container`}>
          <div className={style.team_name}>
            <p className={style.title3}> One by Meja Putih</p>
            <p>
              <a href="/" className={style.link4}>
                Boards /
              </a>{" "}
              <a href="/" className={style.link3}>
                One by Meja Putih
              </a>
            </p>
          </div>
          <Container>
            <Row className={style.column_container}>
              <Col className={style.column}>
                <p className={style.h4}>Design Task</p>
                <p className={style.body3}>on One by Meja Putih</p>
                <div className={style.botom_container}>
                  <p className={style.body3}>Active Issue</p>{" "}
                  <button className={style.button_issue}>0</button>
                </div>
              </Col>
              <Col className={style.column}>
                <p className={style.h4}>Design Task</p>
                <p className={style.body3}>on One by Meja Putih</p>
                <div className={style.botom_container}>
                  <p className={style.body3}>Active Issue</p>{" "}
                  <button className={style.button_issue}>0</button>
                </div>
              </Col>
              <Col className={style.column}>
                <p className={style.h4}>Design Task</p>
                <p className={style.body3}>on One by Meja Putih</p>
                <div className={style.botom_container}>
                  <p className={style.body3}>Active Issue</p>{" "}
                  <button className={style.button_issue}>0</button>
                </div>
              </Col>
              <Col className={style.column}>
                <p className={style.h4}>Design Task</p>
                <p className={style.body3}>on One by Meja Putih</p>
                <div className={style.botom_container}>
                  <p className={style.body3}>Active Issue</p>{" "}
                  <button className={style.button_issue}>0</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className={style.column}>Input</Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
