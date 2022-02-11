import React from "react";
import style from "../../../Styling/Components/card.module.css";
import Icon from "../../../Components/ShareComponent/Sidebar/Icons";
export default function Card() {
  return (
    <section className={style.Card}>
      <div className={style.stripedCard}></div>
      <div className={style.Icons}>
        <Icon variant="blue" />
      </div>
      <div className={style.containerTeam}>
        <h2 className={style.projectTitle}>Idev Internal System</h2>
        <p className={style.teamProject}>on Idev Project</p>
        <h2 className={style.projectShortcut}>QUICK LINKS</h2>
        <div className={style.projectTask}>
          <a href="/" className={style.teamTask}>
            My open tasks
          </a>
          <p className={style.counter}>2</p>
        </div>
        <div className={style.projectTask}>
          <a href="/" className={style.taskDone}>
            Done
          </a>
          <p className={style.counter}>2</p>
        </div>
      </div>
    </section>
  );
}
