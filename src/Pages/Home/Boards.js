import React from "react";
import NavbarIsLogin from "../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import style from "../Styling/Pages/Home/Boards.module.css";
import Card from "../../Components/ShareComponent/Navbar/Card";
export default function Boards() {
  return (
    <>
      <NavbarIsLogin />
      <div className={style.boardsContainer}>
        <div className={style.SidebarStatic}>
          <SidebarStatic />
        </div>
        <div className={style.Boards}>
          <h1>Boards</h1>
          <div className={style.Board}>
            <h5>Idev Project</h5>
            <div className={style.cards}>
              <Card />
            </div>
          </div>
          <div className={style.Board}>
            <h5>e-Project</h5>
            <div className={style.cards}>
              <Card />
              <Card />
            </div>
          </div>
          <div className={style.Board}>
            <h5>Everyone Education Center</h5>
            <div className={style.cards}>
              <Card />
            </div>
          </div>
          <div className={style.Board}>
            <h5>One by Meja Putih</h5>
            <div className={style.cards}>
              <Card />
            </div>
          </div>
          <div className={style.Board}>
            <h5>One by Meja Putih</h5>
            <div className={style.cards}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
