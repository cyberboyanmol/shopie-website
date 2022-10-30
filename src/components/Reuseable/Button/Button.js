import React from "react";
import "./Button.scss";
const Button = (props) => {
  const { text, icon, clickEvent, disabled } = props;

  return (
    <button
      className="button"
      onClick={() => clickEvent && clickEvent()}
      disabled={disabled}
    >
      {text && <span>{text}</span>}
      {icon && <i className={icon}></i>}
    </button>
  );
};
export default Button;
