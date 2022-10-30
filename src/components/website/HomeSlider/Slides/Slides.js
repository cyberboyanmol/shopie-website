import React, { useEffect } from "react";
import "./Slides.scss";

import { Link } from "react-router-dom";
import Button from "../../../Reuseable/Button/Button";
const Slide = (props) => {
  const { slide } = props;

  return (
    <div
      className={props.class}
      style={{ backgroundImage: `url(${slide.img})` }}
    >
      <div className="content">
        <span className="subtitle">{slide.subtitle}</span>
        <span className="title">{slide.title}</span>
        <Link to={`/website/${slide.link}`}>
          <Button icon="fal fa-chevron-right" text={slide.btntext} />
        </Link>
      </div>
    </div>
  );
};

export default Slide;
