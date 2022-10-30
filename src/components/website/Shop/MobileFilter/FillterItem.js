import React from "react";

const FillterItem = (props) => {
  const { icon, text, clickEvent } = props;
  return (
    <div
      className="Button"
      onClick={(e) => {
        e.stopPropagation();
        clickEvent && clickEvent((prev) => !prev);
      }}
    >
      {icon && <span className="icon"> {icon}</span>}
      {text && <span className="text">{text}</span>}
    </div>
  );
};

export default FillterItem;
