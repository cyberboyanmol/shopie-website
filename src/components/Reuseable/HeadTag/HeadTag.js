import React from "react";
import { Helmet } from "react-helmet";
import Shopie from "../../../assests/Shopie.png";
const HeadTag = ({ text }) => {
  return (
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={Shopie} />
      <title>{text} | Shopie</title>
    </Helmet>
  );
};

export default HeadTag;
