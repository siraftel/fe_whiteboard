import {
  Overlay,
  Popover,
  Modal,
  FormControl,
  OverlayTrigger,
  PopoverBody,
  Form,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
  Container,
} from "react-bootstrap";
import team from "../Assets/Icons/team.png";
import profile from "../Assets/Icons/default pofile picture.png";

import lowest from "../Assets/Icons/lowest.png";
import low from "../Assets/Icons/low.png";
import high from "../Assets/Icons/high.png";
import highest from "../Assets/Icons/highest.png";
import archive from "../Assets/Icons/archive.png";
import changePriority from "../Assets/Icons/change priority.png";
import label from "../Assets/Icons/label.png";
import assignTo from "../Assets/Icons/arrow right.png";
import download from "../Assets/Icons/download.png"
import share from "../Assets/Icons/share.png"

import attach from "../Assets/Icons/attach.png";
import check from "../Assets/Icons/check.png";
import plus from "../Assets/Icons/plus blue.png";
import todoPlus from "../Assets/Icons/plus.png";

import UserNavbar from "../Components/ShareComponent/Navbar/NavbarIsLogin";
import Sidebar from "../Components/ShareComponent/Sidebar/Sidebar";
import InputMember from "../Components/Modals/InputMember"
import InputPriority from "../Components/Modals/InputPriority";
import InputDate from "../Components/Modals/InputDate";
import InputLabels from "../Components/Modals/InputLabels";

import { useState, useRef } from "react";
import style from "../Styling/Pages/TeamsDetail.module.css";

export default function TeamsDetail() {
  //FOR MODALS NEW BOARD
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FOR MODALS NEW CARD
  const [showNewCard, setShowNewCard] = useState(false);
  const handleCloseNewCard = () => setShowNewCard(false);
  const handleShowNewCard = () => setShowNewCard(true);

  //FOR POPOVER INVIE
  const [showInvite, setShowInvite] = useState(false);
  const [targetInvite, setTargetInvite] = useState(null);
  const ref = useRef(null);


  const handleClickInvite = (event) => {
    setShowInvite(!showInvite);
    setTargetInvite(event.target);
  };
  //POP OVER CARD
  const popoverCard = (
    <Popover id="popover-basic">
      <Popover.Body className={style.popover_card_body}>
        <button className={style.card_hovered_button}>
          <img
            className={style.card_hovered_img}
            src={label}
            alt="label button"
          />
          Add Lavel
        </button>
        <button className={style.card_hovered_button}>
          <img
            className={style.card_hovered_img}
            src={changePriority}
            alt="change Prioritybutton"
          />
          Change Priority
        </button>
        <button className={style.card_hovered_button}>
          <img className={style.card_hovered_img} src={assignTo} alt="button" />
          Assign to
        </button>
        <button className={style.card_hovered_button}>
          <img className={style.card_hovered_img} src={archive} alt="button" />
          Archieve
        </button>
      </Popover.Body>
    </Popover>
  );
  const popoverCardLabel = (
    <Popover id="popover-basic">
      <PopoverBody className={style.popover_label_body}>
        Testing Popover
      </PopoverBody>
    </Popover>
  );
  const popoverCardPriority = (
    <Popover id="popover-basic">
      <PopoverBody className={style.popover_priority_body}>
        Testing Popover
      </PopoverBody>
    </Popover>
  );
  const popoverCardAssign = (
    <Popover id="popover-basic">
      <PopoverBody className={style.popover_assign_body}>
        Testing Popover
      </PopoverBody>
    </Popover>
  );
  const popoverCardArchive = (
    <Popover id="popover-basic">
      <PopoverBody className={style.popover_archive_body}>
        Testing Popover
      </PopoverBody>
    </Popover>
  );
  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <Sidebar />
        <div className={style.content_wrapper}>
          <div className={style.title3}>
            <span>Design Task</span>
            <div className={style.team_icon_container}>
              <img className={style.team_icon} src={team} alt="icon teams" />
            </div>
          </div>
          <div className={style.team_name}>
            <div className={style.left_container}>
              <div className={style.link_container}>
                <a href="/" className={style.link4}>
                  Boards
                </a>
                <span> / </span>
                <a href="/" className={style.link3}>
                  One by Meja Putih
                </a>
              </div>
            </div>
            <div className={style.header_right_container}>
              <div className={style.team_member_container}>
                <img
                  className={style.todo_profile_picture1}
                  src={profile}
                  alt="profile"
                />
                <img
                  className={style.todo_profile_picture2}
                  src={profile}
                  alt="profile"
                />
                <img
                  className={style.todo_profile_picture3}
                  src={profile}
                  alt="profile"
                />
                <img
                  className={style.todo_profile_picture4}
                  src={profile}
                  alt="profile"
                />
                <span className={style.leftover}>+2</span>
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
                          className={style.invite_input}
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
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.CEKLAGI}>TO DO</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>10</button>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom-end"
                      overlay={popoverCard}
                    >
                      <button className={style.box_hover_button}>...</button>
                    </OverlayTrigger>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.category_container}>
                    <div className={style.box_category}>Category</div>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.category_container}>
                    <div className={style.box_category}>Category</div>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.category_container}>
                    <div className={style.box_category}>Category</div>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <button className={style.add_todo} onClick={handleShowNewCard} >
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.CEKLAGI}>TO DO</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>10</button>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.category_container}>
                    <div className={style.box_category}>Category</div>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <button className={style.add_todo} onClick={handleShowNewCard}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.CEKLAGI}>TO DO</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>10</button>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.category_container}>
                    <div className={style.box_category}>Category</div>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <button className={style.add_todo} onClick={handleShowNewCard}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.CEKLAGI}>TO DO</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>10</button>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.category_container}>
                    <div className={style.box_category}>Category</div>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>Header Seasional</div>
                  </div>
                </div>
                <div className={style.box_footer}>
                  <div className={style.left_footer}>
                    <img
                      className={style.todo_attach}
                      src={attach}
                      alt="attacment"
                    />
                    <img
                      className={style.todo_checklist}
                      src={check}
                      alt="checklist"
                    />
                    <span className={style.finish_todo}>3/5</span>
                  </div>
                  <div className={style.right_footer}>
                    <img
                      className={style.todo_priority}
                      src={lowest}
                      alt="priority"
                    />
                    <img
                      className={style.todo_profile_picture}
                      src={profile}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <button className={style.add_todo} onClick={handleShowNewCard}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.column_new_board}>
              <div className={style.image_container}>
                <button className={style.plus_button} onClick={handleShow}>
                  <img src={plus} alt="icon for add new Board" />
                </button>
              </div>
              <div className={style.text_container}>Create new Board</div>
            </div>
          </div>
        </div>
      </div>
      {/* MODALS NEW BOARD */}
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
          />
        </Modal.Body>
        <Modal.Footer>
          <button className={style.cancel_button} onClick={handleClose}>
            Cancel
          </button>
          <button className={style.save_button} onClick={handleClose}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
      {/* MODALS NEW CARD */}
      <Modal
        show={showNewCard}
        onHide={handleCloseNewCard}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal_title">
            <div className="title">
              <p>Design Tasks | One by Meja Putih</p>
            </div>
            <div className="btn_header">  
              <a>
                <img className="btn_download" alt="button download" src={download} />
              </a>
              <a>
                <img className="btn_share" alt="button share" src={share} />
              </a>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Container>
          <Row>
            <Col xs={11} md={7}>
              <InputGroup className="input_title" placeholder="Card Title" >
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Card Title" />
              </InputGroup>
              <div className="description_section">
                <p className="description_title">Description</p>
                <Form.Group className="input_description" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Button variant="light" className="btn_description cancel">Cancel</Button>
                <Button variant="light" className="btn_description save">Save</Button>
              </div>
              <div className="comment_section">
                <p className="comment_title">Comments</p>
                <div className="comment">
                  <a className="profile_wrapper">
                    <img className="image_profile" src={profile} />
                  </a>
                  <Form.Group className="input_comment" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                </div>
                <Button size="" variant="light" className="btn_description cancel">Cancel</Button>
                <Button variant="light" className="btn_description save">Save</Button>
                <div className="comment_wrapper">
                  <a>
                    <img className="image_profile" src={profile} alt="image-profile"/>
                  </a>
                  <p className="name_profile">Susi Susanti</p>
                  <p className="date_comment">Wed, 27 Jan 2022 | 5:03 PM</p>
                </div>
                <p className="this_comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti ex facere quam animi, suscipit voluptatem obcaecati similique optio maxime illum natus</p>
              </div>
            </Col>

            <Col xs={7} md={5}>
              <DropdownButton 
                color="grey" 
                className="dropdown_button" 
                title="TO DO "
                size="sm"
                variant="light" >
                  <Dropdown.Item href="#/action-1">TO DO 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">TO DO 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">TO DO 3</Dropdown.Item>
              </DropdownButton>
              <div className="assign_member"> 
                <p>Assign To</p>
                <InputMember/>
              </div>
              <div className="add_priority" >
                <p>Priority</p>
                <InputPriority className="label" />
              </div>
              <div className="add_date" >
                <p>Due Date</p>
                <InputDate />
              </div>
              <div className="add_labels" >
                <p>labels</p>
                <InputLabels />
              </div>
            </Col>
          </Row>
        </Container>
          
        </Modal.Body>
      </Modal>
    </>
  );
}
