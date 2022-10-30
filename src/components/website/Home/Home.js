import React from "react";
import HeadTag from "../../Reuseable/HeadTag/HeadTag";
import HomeSlider from "../HomeSlider/HomeSlider";
import Header from "./mobileHeader/MobileHeader";
import TopCategories from "./TopCategories";
import "./Home.scss";
import DealOfDay from "./DealOfDay";
import NewArrivals from "./NewArrivals";
import Products from "../../../Products.json";
const Home = () => {
  return (
    <div>
      <HeadTag text="Home" />
      <Header />
      <HomeSlider />
      <TopCategories />
      <DealOfDay />
      <NewArrivals
        heading="New Arrivals"
        filter
        productList={Products}
        link="arrivals"
        subtitle="Shop popular and new arrivals from Shopie"
      />
      <NewArrivals
        heading="Winter 2022 Trends"
        productList={Products}
        subtitle="Discover our latest fashion trends for the winter!"
      />

    </div>
  );
};

export default Home;
