import React, { useState } from "react";
import "./MobileFilter.scss";
import { GoSettings } from "react-icons/go";
import { BiSort, BiCategoryAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FillterItem from "./FillterItem";
import { sortoptions } from "../../../../AppConstant";
import { motion } from "framer-motion";
import Backdrop from "../../Modal/Backdrop";
const MobileFilter = (props) => {
  const { currentSortValue, filterorder, setFilterorder } = props;
  const [filter, setFilter] = useState(false);
  const MobileFilterItem = [
    {
      text: "Sort By",
      icon: <BiSort />,
      clickEvent: setFilter,
    },
    {
      text: "Category",
      icon: <BiCategoryAlt />,
    },
    {
      text: "Filter",
      icon: <GoSettings />,
    },
  ];

  const FilterRow = MobileFilterItem?.map((item, index) => {
    return (
      <FillterItem
        key={index}
        text={item.text}
        icon={item.icon}
        clickEvent={item.clickEvent}
      />
    );
  });

  const isRadioSelected = (order) => order === currentSortValue[0].order;
  //   console.log(currentSortValue[0].order);
  const radioHandler = (e) => {
    e.preventDefault();
    setFilterorder(e.target.value);

    setFilter(!filter);
  };
  const sortBy = sortoptions.map((item, index) => {
    return (
      <label key={index} className="radioLabel ">
        <input
          value={item.order}
          checked={isRadioSelected(item.order)}
          type="radio"
          className="radioinput"
          id={item.order}
          onChange={radioHandler}
        />
        <span className="check"></span>
        <div className="radioText" htmlFor={item.order}>
          {item.text}
        </div>
      </label>
    );
  });
  const dropIn = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        dammping: 1000,
        stiffness: 50,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
    },
  };

  return (
    <React.Fragment>
      <div className="MobileFilter">{FilterRow}</div>{" "}
      {filter && (
        <Backdrop clickEvent={setFilter} filter={filter}>
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className={`MobilesortBy ${filter ? "MobilesortByOpen" : ""}`}
          >
            <FillterItem
              clickEvent={setFilter}
              icon={<AiOutlineCloseCircle />}
            />
            <span className="sorttitle">Sort By</span>
            {sortBy}
          </motion.div>
        </Backdrop>
      )}
    </React.Fragment>
  );
};

export default MobileFilter;
