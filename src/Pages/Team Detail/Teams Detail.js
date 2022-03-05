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
import lowest from "../../Assets/Icons/lowest.png";
import archive from "../../Assets/Icons/archive.png";
import changePriority from "../../Assets/Icons/change priority.png";
import label from "../../Assets/Icons/label.png";
import assignTo from "../../Assets/Icons/arrow right.png";
import pp1 from "../../Assets/Icons/pp1.png";
import pp2 from "../../Assets/Icons/pp2.png";
import pp3 from "../../Assets/Icons/pp3.png";
import pp4 from "../../Assets/Icons/pp4.png";
import pp5 from "../../Assets/Icons/pp5.png";
import attach from "../../Assets/Icons/attach.png";
import check from "../../Assets/Icons/check.png";
import plus from "../../Assets/Icons/plus blue.png";
import todoPlus from "../../Assets/Icons/plus.png";

import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";

//for popover
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import PopoverCardAssign from "./PopoverCardAssign";
import PopoverCardLabel from "./PopoverCardLabel";
// import PopoverCardPriority from "./PopoverCardPriority";
import PopoverTodo from "./PopoverTodo";

import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getMembers,
  getMember,
  getBoardDetail,
  postList,
  putArchiveList,
  putInviteMember,
} from "../../Redux/Action/Board Action";

// for testing
import greenCheck from "../../Assets/Icons/green check.png";
import low from "../../Assets/Icons/low.png";
import high from "../../Assets/Icons/high.png";
import highest from "../../Assets/Icons/highest.png";

export default function TeamsDetail() {
  const { boards, boardDetail, loading, error, members, member } = useSelector(
    (state) => state.boardReducer
  );
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getMembers(boardId));
  });

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

  //FOR POPOVER
  const [showCard, setShowCard] = useState(false);
  const [targetCard, setTargetCard] = useState(null);

  //Popover todo
  const addCardClick = () => {
    alert("Testing");
  };
  const copyListClick = () => {
    alert("Testing");
  };
  const moveAllCardClick = () => {
    alert("Testing");
  };
  const archiveAllCardClick = () => {
    alert("Testing");
  };
  const archiveListClick = () => {
    alert("Testing");
  };

  const handleClickCard = (event) => {
    setShowCard(!showCard);
    setTargetCard(event.target);
  };

  //testing popover
  const [priority, setPriority] = useState("");
  const popoverCardPriority = (
    <Popover id="popover-basic" className={style.popover_card_priority}>
      <PopoverHeader className={style.popover_priority_header}>
        Select an Option
      </PopoverHeader>
      <PopoverBody className={style.popover_priority_body}>
        <div className={style.form_group}>
          <div
            onClick={() => setPriority("highest")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img
                className={style.priority_image_check}
                src={highest}
                alt="Highest"
              />
              <span>Highest</span>
            </div>
            <div className={style.check_container}>
              {priority === "highest" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            onClick={() => setPriority("high")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img
                className={style.priority_image_check}
                src={high}
                alt="High"
              />
              <span>High</span>
            </div>
            <div className={style.check_container}>
              {priority === "high" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            onClick={() => setPriority("low")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img className={style.priority_image_check} src={low} alt="Low" />
              <span>Low</span>
            </div>
            <div className={style.check_container}>
              {priority === "low" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            onClick={() => setPriority("lowest")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img
                className={style.priority_image_check}
                src={lowest}
                alt="Lowest"
              />
              <span>Lowest</span>
            </div>
            <div className={style.check_container}>
              {priority === "lowest" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
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
            <span>Design Task</span>
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
                <a href="/" className={style.link3}>
                  One by Meja Putih
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
                <img
                  className={style.todo_profile_picture_top}
                  src={pp2}
                  alt="profile"
                  style={{
                    right: "75px",
                    zIndex: 80,
                  }}
                />
                <img
                  className={style.todo_profile_picture_top}
                  src={pp3}
                  alt="profile"
                  style={{
                    right: "50px",
                    zIndex: 60,
                  }}
                />
                <img
                  className={style.todo_profile_picture_top}
                  src={pp4}
                  alt="profile"
                  style={{
                    right: "25px",
                    zIndex: 40,
                  }}
                />
                <span
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
                </span>
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
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>TO DO</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>4</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    {/* POPOVER FOR CARD */}
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>
                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Reveral For Cryptosional
                    </div>
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
                    <span className={style.finish_todo}>1/6</span>
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
                    <div className={style.box_title}>
                      UEFA Championship sional
                    </div>
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
                    <span className={style.finish_todo}>3/7</span>
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
                    <div className={style.box_title}>FIFA Interview</div>
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
                    <span className={style.finish_todo}>1/2</span>
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
                    <div className={style.box_title}>Rescheduling sional</div>
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
                    <span className={style.finish_todo}>9/10</span>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>IN PROGRESS</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>2</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    {/* POPOVER FOR CARD */}
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>

                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Bug for Stack Leadsional
                    </div>
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
                    <span className={style.finish_todo}>3/4</span>
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
                    <div className={style.box_title}>Problem for UI/UX</div>
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
                    <span className={style.finish_todo}>5/6</span>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>ON HOLD 2</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>2</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    {/* POPOVER FOR CARD */}
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>
                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Problem for UI/UXsional
                    </div>
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
                    <span className={style.finish_todo}>7/8</span>
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
                    <div className={style.box_title}>
                      API Quality Checkersional
                    </div>
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
                    <span className={style.finish_todo}>3/4</span>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>ON REVIEW</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>1</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    {/* POPOVER FOR CARD */}
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>
                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Waiting for Project Ownersional
                    </div>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.new_list_input_container}>
                <input
                  placeholder="List Name"
                  type="text"
                  className={`${style.input_new_list} form-control`}
                />
              </div>
              <button className={style.add_todo}>
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
    </>
  );
}

/*
  <>
      <UserNavbar />
      <div className={style.main_container}>
        <SidebarStatic />
        <div className={style.content_wrapper}>
          <div className={style.title3}>
            <span>Design Task</span>
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
                <a href="/teams-boards" className={style.link4}>
                  Boards
                </a>
                <span> / </span>
                <a href="/teams-boards" className={style.link3}>
                  One by Meja Putih
                </a>
              </div>
            </div>
            <div className={style.header_right_container}>
              <div className={style.team_member_container}>
                       {loading && error ? (
  <div> Loading Bro </div>
) : (
  boards.map((board, index) => (
            <img
                  className={style.todo_profile_picture_top}
                  style={{
                    right: `100px - ${index} * 20`,
                    zIndex: {10 - index},
                     // right: "100px",
                     // zIndex: 100,
                  }}
                  src={pp1}
                  alt="profile"
                />
                )) 
              )}
              {error && <div>Unexpeccted Error Occured </div>}
                <span
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
                </span>
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
        //   CONTAINER FOR CARD 
          <div className={style.multiple_container}>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>TO DO</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>4</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    // POPOVER FOR CARD 
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>
                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Reveral For Cryptosional
                    </div>
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
                    <span className={style.finish_todo}>1/6</span>
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
                    <div className={style.box_title}>
                      UEFA Championship sional
                    </div>
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
                    <span className={style.finish_todo}>3/7</span>
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
                    <div className={style.box_title}>FIFA Interview</div>
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
                    <span className={style.finish_todo}>1/2</span>
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
                    <div className={style.box_title}>Rescheduling sional</div>
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
                    <span className={style.finish_todo}>9/10</span>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>IN PROGRESS</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>2</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    // POPOVER FOR CARD 
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>

                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Bug for Stack Leadsional
                    </div>
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
                    <span className={style.finish_todo}>3/4</span>
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
                    <div className={style.box_title}>Problem for UI/UX</div>
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
                    <span className={style.finish_todo}>5/6</span>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>ON HOLD 2</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>2</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                    // POPOVER FOR CARD 
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>
                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Problem for UI/UXsional
                    </div>
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
                    <span className={style.finish_todo}>7/8</span>
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
                    <div className={style.box_title}>
                      API Quality Checkersional
                    </div>
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
                    <span className={style.finish_todo}>3/4</span>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.todo_header}>
                <div className={style.todo_container}>
                  <p className={style.todo}>ON REVIEW</p>
                </div>
                <div className={style.total_todo}>
                  <button className={style.todo_button}>1</button>
                </div>
                <div className={style.todo_button_cotaniner}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={
                      <PopoverTodo
                        addCardClick={addCardClick}
                        copyListClick={copyListClick}
                        moveAllCardClick={moveAllCardClick}
                        archiveAllCardClick={archiveAllCardClick}
                        archiveListClick={archiveListClick}
                      />
                    }
                  >
                    <button className={style.todo_hover_button}>...</button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={style.detail_box}>
                <div className={style.box_header}>
                  <div className={style.box_header_content}>
                    <div className={style.category_container}>
                      <div className={style.box_category}>Category</div>
                    </div>
                  //   POPOVER FOR CARD 
                    <Overlay
                      show={showCard}
                      target={targetCard}
                      placement="bottom-end"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-basic">
                        <Popover.Body className={style.popover_card_body}>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardLabel}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={label}
                                alt="label button"
                              />
                              <div className={style.card_hovered_button}>
                                Add Label
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popoverCardPriority}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={changePriority}
                                alt="change Prioritybutton"
                              />
                              <div className={style.card_hovered_button}>
                                Change Priority
                              </div>
                            </button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={PopoverCardAssign}
                          >
                            <button className={style.card_button_container}>
                              <img
                                className={style.card_hovered_img}
                                src={assignTo}
                                alt="button"
                              />
                              <div className={style.card_hovered_button}>
                                Assign to
                              </div>
                            </button>
                          </OverlayTrigger>
                          <button className={style.card_button_container}>
                            <img
                              className={style.card_hovered_img}
                              src={archive}
                              alt="button"
                            />
                            <div className={style.card_hovered_button}>
                              Archieve
                            </div>
                          </button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                    <button
                      className={style.box_hover_button}
                      onClick={handleClickCard}
                    >
                      ...
                    </button>
                  </div>
                  <div className={style.title_container}>
                    <div className={style.box_title}>
                      Waiting for Project Ownersional
                    </div>
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
              <button className={style.add_todo}>
                <img className={style.todo_plus} src={todoPlus} alt="Plus" />
                <p className={style.add_todo_text}>Add New Card</p>
              </button>
            </div>
            <div className={style.content_column}>
              <div className={style.new_list_input_container}>
                <input
                  placeholder="List Name"
                  type="text"
                  className={`${style.input_new_list} form-control`}
                />
              </div>
              <button className={style.add_todo}>
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
    </>

*/
