import UserNavbar from "../Components/Navbar/NavbarIsLogin";
import style from "../Styling/Pages/TeamsBoards.module.css";

export default function TeamsBoards() {
  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <div>SIDEBAR ADAM</div>
        <div className={`${style.content_wrapper} container`}>
          <div className={style.team_name}>
            <p className={style.title3}> One by Meja Putih</p>
          </div>
        </div>
      </div>
    </>
  );
}
