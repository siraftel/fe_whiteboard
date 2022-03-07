import { Overlay, Popover } from "react-bootstrap";
import saly6 from "../../Assets/Images/Saly-6.png";
import pp1 from "../../Assets/Icons/pp1.png";
import pp2 from "../../Assets/Icons/pp2.png";
import pp3 from "../../Assets/Icons/pp3.png";
import pp4 from "../../Assets/Icons/pp4.png";
import pp5 from "../../Assets/Icons/pp5.png";
import teampict from "../../Assets/Icons/team.png";


import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";

import { useState, useRef } from "react";
import style from "../../Styling/Pages/Team Detail/TeamsDetailEmpty.module.css";

export default function TeamsDetail() {
  //FOR POPOVER INVITE
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
          <div className={style.empty_state}>
            <img src={saly6} alt="icon for add new Board" />
            <p className={style.empty_state_p1}>No List Created</p>
            <p className={style.empty_state_p2}>Let's Make One For Your Team</p>
            <button className={style.create_board_button}>Create List</button>
          </div>
        </div>
      </div>
    </>
  );
}
