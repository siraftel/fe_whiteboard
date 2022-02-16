import logo from "../../../Assets/Logos/BlueLogo.png";
import search from "../../../Assets/Icons/search.png";
import notification from "../../../Assets/Icons/ringing bell.png";
import help from "../../../Assets/Icons/help.png";
import profile from "../../../Assets/Icons/default pofile picture.png";
import style from "../../../Styling/Components/navbarUser.module.css";

export default function UserNavbar() {
  return (
    <>
      <nav
        className={`${style.navbar} navbar fixed-top navbar-expand-lg navbar-expand-md navbar-expand-sm mx-auto`}
      >
        <div className={`${style.main_container} container`}>
          <a className={style.left_container} href="/">
            <img src={logo} alt="whiteboard" className={style.logo} />
          </a>
          <div className={style.right_container}>
            <div
              className={`${style.search} d-flex align-items-center p-2 bg-light`}
            >
              <div className={style.logo_wrapper}>
                <img
                  className={style.search_icon}
                  src={search}
                  alt="search-icon"
                />
              </div>
              <div className={style.input_wrapper}>
                <form className="form-input d-flex align-items-center">
                  <input
                    className={`${style.input} form-control mx-2 px-0 bg-light`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ border: "none" }}
                  />
                </form>
              </div>
            </div>
            <button className={style.notification_wrapper}>
              <img
                className={style.notification_pict}
                src={notification}
                alt="notification bell"
              />
            </button>
            <a className={style.help_wrapper} href="/">
              <img className={style.help_pict} src={help} alt="helpdesk" />
            </a>
            <a className={style.profile_wrapper} href="/">
              <img
                className={style.profile_pict}
                src={profile}
                alt="default profile"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
