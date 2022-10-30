import React from "react";

import "./Login.scss";
import LoginMain from "./InputField/LoginMain";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__container">
      <Link to="/" className="back_to_site">
        <i className="fad fa-long-arrow-left left-arrow"> </i>
        Back
      </Link>
      <div className="login__container__image"></div>
      <div className="login__container__form">
        <LoginMain />
      </div>
    </div>
  );
};

export default Login;
