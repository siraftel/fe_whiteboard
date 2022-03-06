import React, { useEffect } from "react";
import style from "../../Styling/Pages/Profile/Account.module.css";
import BlueLogo from "../../Assets/Logos/BlueLogo.png";
import squareHome from "../../Assets/Icons/SquareHome.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/Action/UserAction";
import { getProfile } from "../../Redux/Action/ProfileAction";
import { useNavigate } from "react-router";

export default function Account() {
  const image = useSelector((state) => state.getProfile.image);
  console.log(image);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnChange = (evt) => {
    console.log(evt.target.value);
  };
  const handleOnClick = () => {
    dispatch(logOut());
    navigate("/");
  };
  useEffect(() => {
    dispatch(getProfile());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <body className={style.bodyAccount}>
      <nav className={style.navbar}>
        <div className={style.navbarLeft}>
          <a href="/">
            <img src={BlueLogo} alt="logo" />
          </a>
          <a className={style.linkbBoards} href="/boards">
            <img src={squareHome} alt="logo" />
            <h5>Back to boards</h5>
          </a>
        </div>
        <div className={style.accountImageNav}>
          <img src={image} alt="sally11" className={style.ImageNavbar} />
        </div>
      </nav>
      <div className={style.account}>
        <div className={style.accountPict}>
          <h1>Your Photo</h1>
          <div className={style.accountImage}>
            <img src={image} alt="sally11" className={style.Image} />
          </div>
          <input type="file" placeholder="ganti" id="file" className={style.photo} />
          <label className={style.btnUpload} for="file">
            Upload
          </label>
          <a className={style.remove} href="/">
            Remove
          </a>
        </div>
        <div className={style.accountNameRole}>
          <div className={style.accountName}>
            <p>Name</p>
            <input className={style.inputName} type="text" placeholder="name" />
          </div>
          <div className={style.accountRole}>
            <p>Role</p>
            <div className={style.containerDropdown}>
              <select id="category" name="Role" className={style.Dropdown} onChange={handleOnChange}>
                <option value="All Category">All Category</option>
                <option value="Photography">Photography</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Music">Music</option>
              </select>
            </div>
            {/* <NavDropdown className={style.NavDropdown} title="Role" menuVariant="light">
              <NavDropdown.Item>Designer</NavDropdown.Item>
              <NavDropdown.Item>Foreigner</NavDropdown.Item>
              <NavDropdown.Item>Caster</NavDropdown.Item>
            </NavDropdown> */}
          </div>
        </div>
        <div className={style.accountIndustryCompany}>
          <div className={style.accountIndustry}>
            <p>Industry</p>
            <select id="category" name="Role" className={style.Dropdown} onChange={handleOnChange}>
              <option value="All Category">All Category</option>
              <option value="Photography">Photography</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div className={style.accountCompanyName}>
            <p>Company Name</p>
            <div>
              <input className={style.inputName} type="text" placeholder="Company Name" />
            </div>
          </div>
        </div>
        <div className={style.Line}></div>
        <div className={style.containerEmail}>
          <div className={style.Email}>
            <h2>Email Address</h2>
            <p>Your email address is hi@hello.mail</p>
          </div>
          <div className={style.btnChangeContainer}>
            <button className={style.btnChange} type="button">
              Change
            </button>
          </div>
        </div>
        <div className={style.Line}></div>
        <div className={style.containerPassword}>
          <div className={style.Email}>
            <h2>Password</h2>
          </div>
          <div className={style.btnChangeContainer}>
            <button className={style.btnChange} type="button">
              Change
            </button>
          </div>
        </div>
        <div className={style.containerSaveLogout}>
          <button className={style.btnChangelogout} type="button">
            Save
          </button>
          <button className={style.btnChangelogout} type="button" onClick={handleOnClick}>
            Log Out
          </button>
        </div>
      </div>
    </body>
  );
}
