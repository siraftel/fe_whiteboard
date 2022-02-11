import { Overlay, Popover, Modal, FormControl } from "react-bootstrap";
import team from "../Assets/Icons/team.png";
import profile from "../Assets/Icons/default pofile picture.png";
import lowest from "../Assets/Icons/lowest.png";
import attach from "../Assets/Icons/attach.png";
import check from "../Assets/Icons/check.png";
import plus from "../Assets/Icons/plus blue.png";
import todoPlus from "../Assets/Icons/plus.png";

import UserNavbar from "../Components/ShareComponent/Navbar/NavbarIsLogin";
import Sidebar from "../Components/ShareComponent/Sidebar/Sidebar";

import { useState, useRef } from "react";
import style from "../Styling/Pages/TeamsDetail.module.css";

export default function TeamsDetail() {
  //FOR MODALS
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FOR POPOVER
  const [showInvite, setShowInvite] = useState(false);
  const [targetInvite, setTargetInvite] = useState(null);
  const ref = useRef(null);

  const handleClickInvite = (event) => {
    setShowInvite(!showInvite);
    setTargetInvite(event.target);
  };
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
                  placement="bottom"
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
                    <button className={style.box_hover_button}>...</button>
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
              <button className={style.add_todo}>
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
              <button className={style.add_todo}>
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
              <button className={style.add_todo}>
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
