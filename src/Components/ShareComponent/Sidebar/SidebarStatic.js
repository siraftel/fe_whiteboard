import React, { useState } from "react";
import style from "../../../Styling/Components/SidebarStatic.module.css";
import Home from "../../../Assets/Icons/home default.png";
import Clipboard from "../../../Assets/Icons/clipboard.png";
import Tasks from "../../../Assets/Icons/checklist.png";
import Plus from "../../../Assets/Icons/plus.png";
import Icons from "./Icons";
import { Modal, FormControl } from "react-bootstrap";
export default function SidebarStatic() {
  const [show, setShow] = useState(false);

  // setSidebarLogic =

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <aside className={style.sidebar}>
        <div className={style.hideSidebar}>
          <ul className={style.unListSidebar}>
            <li className={style.listSidebar}>
              <a className={style.anchorSidebar} href="/">
                <img src={Home} alt="Home" />
                Home
              </a>
            </li>
            <li className={style.listSidebar}>
              <a className={style.anchorSidebar} href="/boards">
                <img src={Clipboard} alt="Clipboard" />
                Boards
              </a>
            </li>
            <li className={style.listSidebar}>
              <a className={style.anchorSidebar} href="/tasks">
                <img src={Tasks} alt="Tasks" />
                Tasks
              </a>
            </li>
          </ul>
          <div className={style.line}></div>
          <div className={style.team_sidebar}>
            <p className={style.team_sidebarText}>TEAM</p>
            <button className={style.plus_button} onClick={handleShow}>
              <img src={Plus} alt="icon for add new Board" />
            </button>
          </div>
          <div className={style.team_section}>
            <ul className={style.unListSidebar}>
              <li className={style.listSidebar}>
                <a className={style.anchorSidebar} href="/">
                  <Icons variant="purple" />
                  <div className={style.projectName}> Idev Project</div>
                </a>
              </li>
              <li className={style.listSidebar}>
                <a className={style.anchorSidebar} href="/">
                  <Icons variant="yellow" />
                  White Project
                </a>
              </li>
              <li className={style.listSidebar}>
                <a className={style.anchorSidebar} href="/">
                  <Icons variant="red" />
                  e-Project
                </a>
              </li>
              <li className={style.listSidebar}>
                <a className={style.anchorSidebar} href="/">
                  <Icons variant="green" />
                  Everyone Education Center
                </a>
              </li>
              <li className={style.listSidebar}>
                <a className={style.anchorSidebar} href="/">
                  <Icons variant="blue" />
                  One by Meja Putih
                </a>
              </li>
              <li className={style.listSidebar}>
                <a className={style.anchorSidebar} href="/">
                  <Icons variant="red" />
                  Millo Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className={style.modal_header} closeButton>
          <p className={style.modal_title}>Create Team</p>
        </Modal.Header>
        <Modal.Body>
          <FormControl placeholder="Team Name" aria-label="Team Name" aria-describedby="basic-addon1" />
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
