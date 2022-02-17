import React from "react";
import Todo from "../../Components/Assets/Todo";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import style from "../Styling/Pages/Home/Task.module.css";
export default function Task() {
  return (
    <div className={style.Task}>
      <div className={style.ContainerSidebar}>
        <SidebarStatic className={style.Sidebar} />
      </div>
      <div className={style.ContainerTodo}>
        <h1 className={style.TaskFont}>Tasks</h1>
        <div className={style.TaskAssigned}>
          <h5>Assigned to me</h5>
          <p className={style.TaskCounter}>0</p>
        </div>
        <div className={style.Line}></div>
        <div className={style.Todos}>
          <Todo />
          <Todo />
          <button className={style.ButtonLoadMore} type="button">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
