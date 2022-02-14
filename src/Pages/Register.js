import React from "react";
import { Formik } from "formik";
import style from "../Styling/Pages/FormRegister.module.css";
import Logo from "../Assets/Logos/Grey Logo.png";
import Right from "../Assets/Icons/right blue.png";
export default function Register() {
  return (
    <div>
      <nav className={style.nav}>
        <img src={Logo} alt="Logo" />
        <button className={style.navButton} type="button">
          Sign in <img src={Right} alt="Right" />
        </button>
      </nav>
      <div className={style.containerLogin}>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Yang bener apa";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={style.formSubmit}>
              <div className={style.text}>
                <h1>Get started free today</h1>
              </div>
              <input className={style.formInput} type="name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="Name" />
              {errors.name && touched.name && errors.name}
              <input className={style.formInput} type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email" />
              {errors.email && touched.email && errors.email}
              <input className={style.formInput} type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Password 5+ characters" />
              {errors.password && touched.password && errors.password}
              <div className={style.checkboxTerms}>
                <input className={style.checkboxInput} type="checkbox" />
                <label>I agree with Whiteboard’s terms & conditions</label>
              </div>
              <button type="submit" className={style.buttonSubmit} disabled={isSubmitting}>
                Submit
              </button>
              <p className={style.text}>or sign up with:</p>
              <div className={style.signInMedia}>
                <button type="button" className={style.btn_sosialMedia}>
                  <svg className={style.icon} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_19_358)">
                      <path
                        d="M6.64863 18.1294L5.60437 22.0277L1.78764 22.1085C0.646992 19.9928 0 17.5723 0 15C0 12.5126 0.604922 10.167 1.67719 8.10164H1.67801L5.07598 8.72461L6.56449 12.1022C6.25295 13.0104 6.08314 13.9854 6.08314 15C6.08326 16.1011 6.28271 17.1561 6.64863 18.1294Z"
                        fill="#FBBB00"
                      />
                      <path
                        d="M29.738 12.1978C29.9102 13.1052 30.0001 14.0423 30.0001 15C30.0001 16.0739 29.8872 17.1214 29.6721 18.1319C28.9419 21.5704 27.0339 24.5728 24.3908 26.6975L24.39 26.6967L20.11 26.4783L19.5043 22.697C21.2581 21.6684 22.6287 20.0588 23.3507 18.1319H15.3298V12.1978H23.4677H29.738Z"
                        fill="#518EF8"
                      />
                      <path
                        d="M24.3898 26.6967L24.3906 26.6975C21.82 28.7637 18.5546 30 15 30C9.2876 30 4.32113 26.8072 1.7876 22.1085L6.64859 18.1294C7.91533 21.5102 11.1766 23.9168 15 23.9168C16.6433 23.9168 18.1829 23.4725 19.5041 22.697L24.3898 26.6967Z"
                        fill="#28B446"
                      />
                      <path
                        d="M24.5745 3.45328L19.7152 7.43156C18.3479 6.57691 16.7316 6.0832 15.0001 6.0832C11.0902 6.0832 7.76789 8.60021 6.56461 12.1022L1.67807 8.10164H1.67725C4.17369 3.28846 9.20279 0 15.0001 0C18.6396 0 21.9767 1.29645 24.5745 3.45328Z"
                        fill="#F14336"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19_358">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Sign in with Google
                </button>
                <button type="button" className={`${style.btn_sosialMedia} ${style.btnFB}`}>
                  <svg className={style.icon} width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.49744 24.375H8.49744V14.3625H13.0024L13.4974 9.3875H8.49744V6.875C8.49744 6.54348 8.62914 6.22554 8.86356 5.99112C9.09798 5.7567 9.41592 5.625 9.74744 5.625H13.4974V0.625H9.74744C8.08984 0.625 6.50013 1.28348 5.32802 2.45558C4.15592 3.62769 3.49744 5.2174 3.49744 6.875V9.3875H0.997441L0.502441 14.3625H3.49744V24.375Z"
                      fill="white"
                    />
                  </svg>
                  Sign in with Facebook
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
