import React from "react";
import { GrPowerReset } from "react-icons/gr";
const FilterHeading = (props) => {
  const { title, reset, array } = props;

  return (
    <div className="FilterColumn">
      <div className="top">
        <span className="title">{title}</span>
        {array?.length >= 1 && reset && (
          <span className="reset" onClick={() => reset([])}>
            <GrPowerReset />
          </span>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default FilterHeading;
