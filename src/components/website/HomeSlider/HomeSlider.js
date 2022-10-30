import React, { Component, useEffect, useState } from "react";
import "./HomeSlider.scss";
import { Heroslide } from "../../../AppConstant";
import Slide from "./Slides/Slides";
const HomeSlider = () => {
  const [timeduration] = useState(8000);
  const [position, setPosition] = useState(0);
  const [playSlider, setPlaySlider] = useState(true);

  const SlidesItem = Heroslide?.map((slide, index) => {
    return (
      <Slide
        key={index}
        class={`slide ${position % Heroslide.length === index ? "active" : ""}`}
        slide={slide}
      />
    );
  });

  const SliderItem = Heroslide.map((slide, i) => {
    return (
      <div
        key={i}
        className={`Slidericon ${
          position % Heroslide.length === i ? "activeSliderItem" : ""
        }`}
        onClick={() => {
          setPosition(i);
          setPlaySlider(false);
          setTimeout(() => {
            setPlaySlider(true);
          }, 0);
        }}
      >
        <i className="fal fa-dot-circle"></i>
      </div>
    );
  });

  // first time Component mounted it set position to zero
  useEffect(() => {
    setPosition(0);
  }, []);

  useEffect(() => {
    let timer;
    if (playSlider) {
      timer = setInterval(() => {
        setPosition((prev) => prev + 1);
      }, timeduration);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [playSlider, timeduration]);

  return (
    <div className="HeroSlider">
      <div className="slides">{SlidesItem}</div>
      <div className="SliderControls">
        {SliderItem}
        <div className="pause">
          <i
            onClick={() => setPlaySlider(!playSlider)}
            className={playSlider ? "fal fa-pause" : "fal fa-play"}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
