import React from "react";
import "./HeadingTag.scss";

const HeadingTag = ({ title }) => {
  return (
    <div className="headingtag__heading">
      <span>{title}</span>
    </div>
  );
};

export default HeadingTag;
