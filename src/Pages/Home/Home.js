import React from "react";
import Card from "../../Components/ShareComponent/Navbar/Card";
import style from "../../Styling/Pages/Home/Home.module.css";
import Todo from "../../Components/Assets/Todo";
import Sidebar from "../../Components/ShareComponent/Sidebar/Sidebar";
import NavbarIsLogin from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
export default function Home() {
  return (
    <>
      <NavbarIsLogin />
      <div className={style.Home}>
        <Sidebar />
        <section className={style.section}>
          <h1 className={style.AssignedHome}>Home</h1>
          <div className={style.recentContainer}>
            <div className={style.recentUp}>
              <h3>Your recent whiteboards</h3>
              <a href="/">View all boards</a>
            </div>
            <div className={style.recentDown}>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className={style.recentTodo}>
            <div className={style.assignedCounter}>
              <h2 className={style.Assigned}>Assigned to me</h2>
              <h2 className={style.counter}>2</h2>
            </div>
            <div className={style.lineHome}></div>
            <h2 className={style.Assigned}>TODO</h2>
            <Todo />
          </div>
        </section>
      </div>
    </>
  );
}
