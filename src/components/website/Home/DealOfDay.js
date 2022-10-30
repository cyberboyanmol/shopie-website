import React from "react";
import HeadingHelper from "./helper/HeadingHelper";
import Products from "../../../Products.json";
import Product from "../Product/Product";
import Countdown from "react-countdown";

import CountBox from "./helper/CountBox";
import ProductContainer from "../Product/ProductContainer/ProductContainer";
const DealOfDay = () => {
  const products = Products.slice(0, 5);
  const month = 9 - 1;
  const year = 2022;
  const date = 17;
  const expires = new Date(year, month, date);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="TimerExpire">Sale Expired</span>;
    } else {
      return (
        <React.Fragment>
          <CountBox text="Days" time={days} />
          <CountBox text="Hours" time={hours} />
          <CountBox text="Minutes" time={minutes} />
          <CountBox text="Seconds" time={seconds} />
        </React.Fragment>
      );
    }
  };
  return (
    <div className="DealOfDay">
      <HeadingHelper heading="Deal Of The Day" />
      <div className="CountDown">
        <Countdown date={expires} renderer={renderer} />
      </div>
      <ProductContainer products={products} />
    </div>
  );
};

export default DealOfDay;
