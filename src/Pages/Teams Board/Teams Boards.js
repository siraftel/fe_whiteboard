import Layout from "./Layout";
import { Link, Outlet, useParams } from "react-router-dom";
import { Container, Modal, FormControl } from "react-bootstrap";
import plus from "../../Assets/Icons/plus blue.png";
import team from "../../Assets/Icons/team.png";
import style from "../../Styling/Pages/Teams Boards/TeamsBoards.module.css";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoard, postBoard } from "../../Redux/Action/Board Action";
import { getTeamDetail } from "../../Redux/Action/Team Action";

export default function TeamsBoards() {
  const { boards, loading, error } = useSelector((state) => state.boardReducer);
  const { teamDetail } = useSelector((state) => state.teamReducer);
  const [newBoard, setNewBoard] = useState("");

  const dispatch = useDispatch();
  const { teamId } = useParams();

  useEffect(() => {
    dispatch(getBoard(teamId));
  }, []);

  useEffect(() => {
    dispatch(getTeamDetail(teamId));
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      title: newBoard,
      createdAt: new Date(),
    };
    dispatch(postBoard(data, teamId));
    setNewBoard("");
    setShow(false);
  };

  return (
    <Layout>
      <div className={`${style.content_wrapper} container`}>
        <div className={style.team_name}>
          <div className={style.title3}>
            {" "}
            One by Meja Putih{" "}
            <div className={style.team_icon_container}>
              <img className={style.team_icon} src={team} alt="icon teams" />
            </div>
          </div>
          <div className={style.link_container}>
            <a href="/teams-boards" className={style.link4}>
              Boards
            </a>
            <span> / </span>
            <a href="/teams-boards" className={style.link3}>
              One by Meja Putih
            </a>
          </div>
        </div>
        <Container>
          <div className={style.column_container}>
            <Link className={style.column} to="/">
              <div className={style.top_container}>
                <p className={style.h4}>Design Task</p>
                <p className={style.body3}>on One by Meja Putih</p>
              </div>
              <div className={style.bottom_container}>
                <div className={style.activity_container}>
                  <p className={style.body3}>Active Issue</p>
                </div>
                <div className={style.button_container}>
                  <button className={style.button_issue}>0</button>
                </div>
              </div>
            </Link>
            <Link to="/" className={style.column}>
              <div className={style.top_container}>
                <p className={style.h4}>Internal Tools</p>
                <p className={style.body3}>on One by Meja Putih</p>
              </div>
              <div className={style.bottom_container}>
                <div className={style.activity_container}>
                  <p className={style.body3}>Active Issue</p>
                </div>
                <div className={style.button_container}>
                  <button className={style.button_issue}>0</button>
                </div>
              </div>
            </Link>
            <Link to="/" className={style.column}>
              <div className={style.top_container}>
                <p className={style.h4}>Dev Ops</p>
                <p className={style.body3}>on One by Meja Putih</p>
              </div>
              <div className={style.bottom_container}>
                <div className={style.activity_container}>
                  <p className={style.body3}>Active Issue</p>
                </div>
                <div className={style.button_container}>
                  <button className={style.button_issue}>0</button>
                </div>
              </div>
            </Link>
            <Link to="/" className={style.column}>
              <div className={style.top_container}>
                <p className={style.h4}>Marketing Colateral</p>
                <p className={style.body3}>on One by Meja Putih</p>
              </div>
              <div className={style.bottom_container}>
                <div className={style.activity_container}>
                  <p className={style.body3}>Active Issue</p>
                </div>
                <div className={style.button_container}>
                  <button className={style.button_issue}>0</button>
                </div>
              </div>
            </Link>
            <div className={style.column_new_board}>
              <div className={style.image_container}>
                <button className={style.plus_button} onClick={handleShow}>
                  <img
                    src={plus}
                    alt="icon for add new Board"
                    className={style.plus_button_image}
                  />
                </button>
              </div>
              <div className={style.text_container}>Create new Board</div>
            </div>
          </div>
        </Container>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={style.modal_header} closeButton>
          <p className={style.modal_title}>New Board | One by Meja Putih</p>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Board Name"
            aria-label="Board Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setNewBoard(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className={style.cancel_button} onClick={handleClose}>
            Cancel
          </button>
          <button className={style.save_button} onClick={(e) => handleClick(e)}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

/* AFTER LOGOUT FUNCTION WORKS
<Container>
          <div className={style.column_container}>
          {loading && error ? (
  <div> Loading Bro </div>
) : (
  boards.map((board, index) => (
  <Link className={style.column} to={`board/${board,_id}`}>
              <div className={style.top_container}>
                <p className={style.h4}>{board.title}</p>
                <p className={style.body3}>on {teamDetail.teamName}</p>
              </div>
              <div className={style.bottom_container}>
                <div className={style.activity_container}>
                  <p className={style.body3}>Active Issue</p>
                </div>
                <div className={style.button_container}>
                  <button className={style.button_issue}>0</button>
                </div>
              </div>
            </Link>
  )) 
)}
              {error && <div>Unexpeccted Error Occured </div>}
            <div className={style.column_new_board}>
              <div className={style.image_container}>
                <button className={style.plus_button} onClick={handleShow}>
                  <img
                    src={plus}
                    alt="icon for add new Board"
                    className={style.plus_button_image}
                  />
                </button>
              </div>
              <div className={style.text_container}>Create new Board</div>
            </div>
          </div>
        </Container>
*/
