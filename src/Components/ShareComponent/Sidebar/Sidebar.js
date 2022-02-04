import React from "react";
import "../../../Styling/Components/Sidebar.css";
import Home from "../../../Assets/Icons/home default.png";
import Clipboard from "../../../Assets/Icons/clipboard.png";
import Tasks from "../../../Assets/Icons/checklist.png";
import Plus from "../../../Assets/Icons/plus.png";
import Right from "../../../Assets/Icons/Sidebar left.png";

import Icons from "./Icons";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="btn-iconSidebar">
        <img src={Right} alt="SidebarImages" />
      </button>
      <ul className="unListSidebar">
        <li className="listSidebar">
          <a className="anchorSidebar" href="/">
            <img src={Home} alt="Home" />
            Home
          </a>
        </li>
        <li className="listSidebar">
          <a className="anchorSidebar" href="/boards">
            <img src={Clipboard} alt="Clipboard" />
            Boards
          </a>
        </li>
        <li className="listSidebar">
          <a className="anchorSidebar" href="/tasks">
            <img src={Tasks} alt="Tasks" />
            Tasks
          </a>
        </li>
      </ul>
      <div className="line"></div>
      <div className="team-sidebar">
        <p>TEAM</p>
        <input type="image" name="popout" className="" src={Plus} alt="Plus" />
      </div>
      <div className="team-section">
        <ul className="unListSidebar">
          <li className="listSidebar">
            <a className="anchorSidebar" href="/">
              <Icons variant="purple" />
              Idev Project
            </a>
          </li>
          <li className="listSidebar">
            <a className="anchorSidebar" href="/">
              <Icons variant="yellow" />
              White Project
            </a>
          </li>
          <li className="listSidebar">
            <a className="anchorSidebar" href="/">
              <Icons variant="red" />
              e-Project
            </a>
          </li>
          <li className="listSidebar">
            <a className="anchorSidebar" href="/">
              <Icons variant="green" />
              Everyone Education Center
            </a>
          </li>
          <li className="listSidebar">
            <a className="anchorSidebar" href="/">
              <Icons variant="blue" />
              One by Meja Putih
            </a>
          </li>
          <li className="listSidebar">
            <a className="anchorSidebar" href="/">
              <Icons variant="red" />
              Millo Project
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
