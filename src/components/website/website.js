import React from "react";
import { Helmet } from "react-helmet";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
const Website = () => {
  return (
    <div className="app">
      <Navbar />
      <Body />
    </div>
  );
};

export default Website;
