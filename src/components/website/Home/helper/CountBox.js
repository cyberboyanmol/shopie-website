import React from "react";

const CountBox = (props) => {
  const { time, text } = props;
  return (
    <div className="timerbox">
      <strong>{time}</strong>
      <small className="text">{text}</small>
    </div>
  );
};
export default CountBox;
