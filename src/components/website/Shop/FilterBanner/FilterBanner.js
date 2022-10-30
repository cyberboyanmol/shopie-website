import React, { useState } from "react";
import "./FilterBanner.scss";
import FilterHeading from "./FilterHeading/FilterHeading";
import { AllColors, allsizes, sortoptions } from "../../../../AppConstant";
import { GoSettings } from "react-icons/go";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

import { Slider } from "@mui/material";
const FilterBanner = (props) => {
  const {
    colors,
    setColors,
    sizes,
    setSizes,
    price,
    setPrice,
    filterorder,
    setFilterorder,

    sortItem,
  } = props;

  const [showMore, setShowMore] = useState(false);

  const [dropdown, setDropDown] = useState(false);
  const DropIcon = dropdown ? (
    <MdOutlineArrowDropUp className="sortIcon" />
  ) : (
    <MdOutlineArrowDropDown className="sortIcon" />
  );
  const lessColor = ["Black", "Blue", "Grey", "Red", "Navy", "White", "Yellow"];
  const ColorsFilter = showMore ? AllColors : lessColor;

  const Pricelabel = [
    {
      value: 0,
      label: "₹0",
    },
    {
      value: 199,
      label: "₹199",
    },

    {
      value: 499,
      label: "₹499",
    },

    {
      value: 999,
      label: "₹999",
    },
    {
      value: 1499,
      //   value: Math.max.apply(
      //     Math,
      //     allproducts.map((o) => {
      //       return parseInt(o.price);
      //     })
      //   ),
      label: "₹" + 1499,
      // Math.max.apply(
      //   Math,
      //   allproducts.map((o) => {
      //     return parseInt(o.price);
      //   })
      // ),
    },
  ];
  const onChangePrice = (e, newValue) => {
    setPrice(newValue);
  };

  console.log(price);

  const updateFilterItem = (values, value, setValue) => {
    if (values.includes(value.toLowerCase())) {
      const index = values.indexOf(value.toLowerCase());
      setValue(values.filter((item, i) => i !== index));
    } else {
      setValue((prev) => [...prev, value.toLowerCase()]);
    }
  };
  const SizeColumn = allsizes?.map((size, index) => {
    return (
      <span
        key={index}
        className={
          sizes.includes(size.toLowerCase()) ? "size_div selected" : "size_div"
        }
        onClick={() => updateFilterItem(sizes, size, setSizes)}
      >
        <span className="size">{size}</span>
      </span>
    );
  });

  const ColorColumn = ColorsFilter?.map((color, index) => {
    return (
      <div
        key={index}
        className={
          colors.includes(color.toLowerCase())
            ? "color_div selected"
            : "color_div"
        }
      >
        <span
          onClick={() => updateFilterItem(colors, color, setColors)}
          className="color"
          style={{ backgroundColor: color }}
        ></span>
      </div>
    );
  });

  return (
    <div className="filter">
      <div className="filter_top">
        <h3 className="Heading"> Product Filter </h3>
        <button className="Advance_filter">
          More Filter
          <GoSettings className="icon" />
        </button>
      </div>

      <div className="filterBanner">
        <FilterHeading title="Sort By">
          <span className="sortBy">
            <span onMouseOver={() => setDropDown(true)} className="currentSort">
              {sortItem[0].text}
              {DropIcon}
            </span>

            <span
              onMouseOver={() => setDropDown(true)}
              onMouseOut={() => setDropDown(false)}
              className={`dropdown  ${dropdown ? "dropdownOpen " : ""}`}
            >
              {" "}
              {sortoptions?.map((Option, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      setDropDown(!dropdown);
                      setFilterorder(Option.order);
                    }}
                    className="option"
                  >
                    {Option.text}
                  </span>
                );
              })}
            </span>
          </span>
        </FilterHeading>
        <FilterHeading
          array={colors}
          reset={setColors}
          showMore={showMore}
          title={`${showMore ? "All Colors" : "Colors"}`}
        >
          <span className="colors">{ColorColumn}</span>
          <div className="showMore" onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "show more"}
          </div>
        </FilterHeading>
        <FilterHeading title="Sizes" array={sizes} reset={setSizes}>
          <span className="sizes">{SizeColumn}</span>
        </FilterHeading>
        <FilterHeading title="Price">
          <span className="Priceslider">
            <Slider
              marks={Pricelabel}
              style={{ color: "#000" }}
              onChange={onChangePrice}
              step={10}
              value={price}
              max={Pricelabel[Pricelabel.length - 1]?.value}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </span>
        </FilterHeading>
      </div>
    </div>
  );
};

export default FilterBanner;
