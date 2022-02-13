import React from "react";
import { NavDropdown } from "react-bootstrap";
import style from "../Styling/Pages/Account.module.css";
import sally11 from "../Assets/Images/Saly-11.png";
export default function Account() {
  return (
    <body className={style.bodyAccount}>
      <div className={style.account}>
        <div className={style.accountPict}>
          <h1>Your Photo</h1>
          <div className={style.accountImage}>
            <img src={sally11} alt="sally11" className={style.Image} />
          </div>
          <input type="file" className={style.photo} />
          <button type="button">Remove</button>
        </div>
        <div className={style.accountNameRole}>
          <div className={style.accountName}>
            <p>Name</p>
            <input type="text" placeholder="name" />
          </div>
          <div className={style.accountRole}>
            <p>Role</p>
            <NavDropdown className={style.NavDropdown} title="Supports" menuVariant="light">
              <NavDropdown.Item href="/">Designer</NavDropdown.Item>
              <NavDropdown.Item href="/">Foreigner</NavDropdown.Item>
              <NavDropdown.Item href="/">Caster</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className={style.accountIndustryCompany}>
          <div className={style.accountIndustry}>
            <p>Industry</p>
            <NavDropdown className={style.NavDropdown} title="Supports" menuVariant="light">
              <NavDropdown.Item href="/">Metal</NavDropdown.Item>
              <NavDropdown.Item href="/">Kata</NavDropdown.Item>
              <NavDropdown.Item href="/">Drifflon</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className={style.accountCompanyName}>
            <p>Company Name</p>
            <input type="text" placeholder="name" />
          </div>
        </div>
        <div className={style.Line}></div>
        <div className={style.containerEmail}>
          <div className={style.Email}>
            <h2>Email Address</h2>
            <p>Your email address is hi@hello.mail</p>
          </div>
          <button type="button">Change</button>
        </div>
        <div className={style.Line}></div>
        <div className={style.containerEmail}>
          <div className={style.Email}>
            <h2>Password</h2>
          </div>
          <button type="button">Change</button>
        </div>
      </div>
    </body>
  );
}
