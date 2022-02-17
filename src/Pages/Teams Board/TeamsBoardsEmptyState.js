import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import Sidebar from "../../Components/ShareComponent/Sidebar/Sidebar";
import team from "../../Assets/Icons/team.png";
import saly17 from "../../Assets/Images/Saly-17.png";
import style from "../../Styling/Pages/Teams Boards/TeamsBoards.module.css";

export default function TeamsBoardsEmptyState() {
  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <Sidebar />
        <div className={`${style.content_wrapper} container`}>
          <div className={style.team_name}>
            <div className={style.title3}>
              {" "}
              One by Meja Putih{" "}
              <div className={style.team_icon_container}>
                <img className={style.team_icon} src={team} alt="icon teams" />
              </div>
            </div>
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
          <div className={style.empty_state}>
            <img src={saly17} alt="icon for add new Board" />
            <p className={style.empty_state_p1}>No Boards Created</p>
            <p className={style.empty_state_p2}>Let's Make One For Your Team</p>
            <button className={style.create_board_button}>Create Board</button>
          </div>
        </div>
      </div>
    </>
  );
}
