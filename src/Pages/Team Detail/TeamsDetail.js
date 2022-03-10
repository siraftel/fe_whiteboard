import {
  Overlay,
  Popover,
  Modal,
  FormControl,
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
} from "react-bootstrap";

import teampict from "../../Assets/Icons/team.png";
import profile from "../../Assets/Icons/default pofile picture.png";
import pp1 from "../../Assets/Icons/pp1.png";
import attach from "../../Assets/Icons/attach.png";
import check from "../../Assets/Icons/check.png";
import plus from "../../Assets/Icons/plus blue.png";
import todoPlus from "../../Assets/Icons/plus.png";
import highest from "../../Assets/Icons/highest.png";

import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";

import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  getMembers,
  getMember,
  putArchiveList,
  putInviteMember,
} from "../../Redux/Action/BoardAction";
import {
  getList,
  postList,
  archiveList,
  copyList,
} from "../../Redux/Action/ListAction";
import { ListCard } from "./ListCard";

export default function TeamsDetail() {
  const { loading, error, boardMembers, member } =
    useSelector((state) => state.boardReducer);
  const { list } = useSelector((state) => state.listReducer);
  const { oneTeam } = useSelector((state) => state.teamReducer);

  const boardUser = boardMembers?.members;

  //CONSOLE FOR TESTING
  console.log(list);
  console.log(boardUser);

  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getList(boardId));
    dispatch(getMembers(boardId));
  }, [""]);

  //for Archive List
  const [archive, setArchive] = useState(false);

  //For New List
  const [newList, setNewList] = useState("");

  //FOR MODALS
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FOR POPOVER INVIE
  const [showInvite, setShowInvite] = useState(false);
  const [targetInvite, setTargetInvite] = useState(null);
  const ref = useRef(null);

  const handleClickInvite = (event) => {
    setShowInvite(!showInvite);
    setTargetInvite(event.target);
  };

  const handleClickNewList = (e) => {
    e.preventDefault();

    const data = {
      title: newList,
    };
    dispatch(postList(data, boardId));
    setNewList("");
    setShow(false);
  };

  //FOR POPOVER
  const [showCard, setShowCard] = useState(false);
  const [targetCard, setTargetCard] = useState(null);

  //Popover todo
  const addCardClick = () => {
    alert("Fungsi Card Fakhri");
  };
  const copyListClick = () => {
    alert("Copy List Click");
    //dispatch(copyList(data, boardId, ListId))
  };
  const moveAllCardClick = () => {
    alert("Move all card");
  };
  const archiveAllCardClick = () => {
    alert("Archive Card");
  };
  const archiveListClick = () => {
    alert("Archive List");
    // if (archive === false) {
    //   setArchive(true);
    // } else {
    //   setArchive(false);
    // }
    // const data = {
    //    isArchieved = archive
    // }
    // dispatch(archiveList(data, listId));
    // Tentuin dulu listIdnya, buatin di click
  };

  const handleClickCard = (event) => {
    setShowCard(!showCard);
    setTargetCard(event.target);
  };

  // Popover Todo
  const popoverTodo = (
    <Popover id="popover-basic" className={style.popover_todo}>
      <PopoverHeader className={style.todo_popover_header}>
        Action List
      </PopoverHeader>
      <PopoverBody className={style.popover_todo_body}>
        <div className={style.popover_todo_body_container1}>
          <button onClick={addCardClick} className={style.todo1_button}>
            Add Card
          </button>
          <button onClick={copyListClick} className={style.todo2_button}>
            Copy List
          </button>
        </div>
        <div className={style.popover_todo_body_container2}>
          <button onClick={moveAllCardClick} className={style.todo3_button}>
            Move All Card in This List
          </button>
          <button onClick={archiveAllCardClick} className={style.todo4_button}>
            Archive All Card in This List
          </button>
        </div>
        <div className={style.popover_todo_body_container3}>
          <button onClick={archiveListClick} className={style.todo5_button}>
            Archive This List
          </button>
        </div>
      </PopoverBody>
    </Popover>
  );

  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <SidebarStatic />
        <div className={style.content_wrapper}>
          <div className={style.title3}>
            <span>{list?.title}</span>
            <div className={style.team_icon_container}>
              <img
                className={style.team_icon}
                src={teampict}
                alt="icon teams"
              />
            </div>
          </div>
          <div className={style.team_name}>
            <div className={style.left_container}>
              <div className={style.link_container}>
                <a href="/" className={style.link4}>
                  Boards
                </a>
                <span> / </span>
                <a href="/teams-boards" className={style.link4}>
                  {oneTeam?.teamName}
                </a>
                <span> / </span>
                <a href="/teams-boards" className={style.link3}>
                  {list?.title}
                </a>
              </div>
            </div>
            <div className={style.header_right_container}>
              <div className={style.team_member_container}>
                 <img
                  className={style.todo_profile_picture_top}
                  style={{
                    right: "100px",
                    zIndex: 100,
                  }}
                  src={pp1}
                  alt="profile"
                />
                {/* {boardUser.map=((user, index) => (
                <img
                  className={style.todo_profile_picture_top}
                  style={{
                    right: `${100 - (index * 20)}px`,
                    zIndex: 10 - index,
                  }}
                  src={pp1}
                  alt="profile"
                />
                ))} */}
                {/* <span
                  className={style.todo_profile_picture_top}
                  style={{
                    right: "0px",
                    zIndex: 10,
                    backgroundImage: `url(${pp5})`,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  +2
                </span> */}
              </div>
              <div ref={ref} className={style.invite_button_wrapper}>
                <button
                  className={style.invite_button}
                  onClick={handleClickInvite}
                >
                  Invite
                </button>
                <Overlay
                  show={showInvite}
                  target={targetInvite}
                  placement="bottom-end"
                  container={ref}
                  containerPadding={20}
                >
                  <Popover
                    id="popover-contained"
                    className={style.popover_invite}
                  >
                    <Popover.Header
                      as="h3"
                      className={style.invite_popover_header}
                    >
                      Invite to Board
                    </Popover.Header>
                    <Popover.Body className={style.invite_popover_body}>
                      <div className={style.invite_input_container}>
                        <input
                          className={`${style.invite_input} form-control`}
                          required
                          type="text"
                          placeholder="Email Adress or Name"
                        />
                      </div>
                      <div className={style.invite_popover_text}>
                        <div className={style.invite_with_link}>
                          <strong>Invite with Link</strong>
                        </div>
                        <div className={style.invite_body3}>
                          Anyone with link can join as board member
                        </div>
                        <div className={style.create_link_invite_container}>
                          <a className={style.create_link_invite} href="/">
                            Create Link
                          </a>
                        </div>
                      </div>
                      <button className={style.send_invitation_button}>
                        Send Invitation
                      </button>
                    </Popover.Body>
                  </Popover>
                </Overlay>
              </div>
            </div>
          </div>
          {/* CONTAINER FOR CARD */}
          <div className={style.multiple_container}>
            {list.map((userList, index) => (
            <div className={style.content_column} key={index}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>{userList?.title}</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>0</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={popoverTodo}
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box_container}>
                {/* PLACE OUR CARD HERE */}
                <ListCard props={userList?._id}/>
                </div>
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            ))}
            <div className={style.column_new_board}>
              <div className={style.image_container}>
                <button className={style.plus_button} onClick={handleShow}>
                  <img src={plus} alt="icon for add new Board" />
                </button>
              </div>
              <div className={style.text_container}>Add Another List</div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={style.modal_header} closeButton>
          <p className={style.modal_title}>Add Another List</p>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="List Name"
            aria-label="List Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setNewList(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className={style.cancel_button} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={style.save_button}
            onClick={(e) => handleClickNewList(e)}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}