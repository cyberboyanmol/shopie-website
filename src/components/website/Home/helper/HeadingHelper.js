import React from "react";
import "./HeadingHelper.scss";
const HeadingHelper = (props) => {
  const { heading, subtitle } = props;
  return (
    <div className="HeadingHelper">
      <div className="Categories_heading">
        <span className="design"></span>
        <span className="heading">{heading}</span>
        <span className="design"></span>
      </div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

export default HeadingHelper;
