import React from "react";
import LoginBtn from "./LoginBtn";
import "./LoginBtn.scss";
const ButtonWrapper = (props) => {
  const {
    btnText,
    text1,
    text2,
    changeState,
    resetPassword,
    clickEventHandler,
  } = props;
  return (
    <div className="ButtonWrapper">
      <LoginBtn btnText={btnText} clickEventHandler={clickEventHandler} />
      <div className="next_btn">
        <span>
          {text1}
          <strong
            className={`${resetPassword ? "backlogin" : "change"}`}
            onClick={() => changeState()}
          >
            {resetPassword && (
              <i className="fad fa-long-arrow-left left-arrow"></i>
            )}
            {text2}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default ButtonWrapper;
