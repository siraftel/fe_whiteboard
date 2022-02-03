import React from "react";
import "../../../Styling/Components/Sidebar.css";
import Home from "../../../Assets/Icons/home default.png";
import Clipboard from "../../../Assets/Icons/clipboard.png";
import Tasks from "../../../Assets/Icons/checklist.png";
import Plus from "../../../Assets/Icons/plus.png";
import Right from "../../../Assets/Icons/Sidebar left.png";
import Team from "../../../Assets/Icons/Team a.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="btn-iconSidebar">
        <img src={Right} alt="SidebarImages" />
      </button>
      <ul className="unListSidebar">
        <li>
          <a className="listSidebar" href="/">
            <img src={Home} alt="Home" />
            Home
          </a>
        </li>
        <li>
          <a className="listSidebar" href="/boards">
            <img src={Clipboard} alt="Clipboard" />
            Boards
          </a>
        </li>
        <li>
          <a className="listSidebar" href="/tasks">
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
        <ul>
          <li>
            <a className="listSidebar" href="/">
              <img src={Team} alt="team" />
              Idev Project
            </a>
          </li>
          <li>
            <a className="listSidebar" href="/">
              <img src={Team} alt="team" />
              Idev Project
            </a>
          </li>
          <li>
            <a className="listSidebar" href="/">
              <img src={Team} alt="team" />
              e-Project
            </a>
          </li>
          <li>
            <a className="listSidebar" href="/">
              <img src={Team} alt="team" />
              Everyone Education Center
            </a>
          </li>
          <li>
            <a className="listSidebar" href="/">
              <img src={Team} alt="team" />
              One by Meja Putih
            </a>
          </li>
          <li>
            <a className="listSidebar" href="/">
              <img src={Team} alt="team" />
              Millo Project
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
