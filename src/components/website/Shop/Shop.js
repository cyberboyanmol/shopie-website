import React, { useEffect, useState } from "react";
import HeadTag from "../../Reuseable/HeadTag/HeadTag";
import FilterBanner from "./FilterBanner/FilterBanner";
import MobileTop from "./MobileTop/MobileTop";
import MobileFilter from "./MobileFilter/MobileFilter";
import Backdrop from "../Modal/Backdrop";
import ProductContainer from "../Product/ProductContainer/ProductContainer";
import AllProducts from "../../../Products.json";
import { sortoptions } from "../../../AppConstant";
import "./Shop.scss";
const Shop = ({ route }) => {
  const filterkeyword = "";

  const [searchquery, setSearchquery] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState([0, Infinity]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gender, setGender] = useState([]);
  const [filterorder, setFilterorder] = useState("recommended");
  const sortItem = sortoptions.filter((item) => item.order === filterorder);
  useEffect(() => {}, []);

  return (
    <div>
      <HeadTag text={route.text} />
      <MobileTop
        title={route.breadcrumbs.title}
        searchbox={true}
        Breadlink={
          filterkeyword !== ""
            ? route.breadcrumbs.link.concat({
                text: filterkeyword,
              })
            : route.breadcrumbs.link
        }
      />
      <FilterBanner
        colors={colors}
        setColors={setColors}
        sizes={sizes}
        setSizes={setSizes}
        price={price}
        setPrice={setPrice}
        filterorder={filterorder}
        setFilterorder={setFilterorder}
        filtered={filtered}
        setFiltered={setFiltered}
        sortItem={sortItem}
      />

      <MobileFilter
        currentSortValue={sortItem}
        filterorder={filterorder}
        setFilterorder={setFilterorder}
      />
      <div className="shop">
        <ProductContainer products={AllProducts} />
      </div>
    </div>
  );
};

export default Shop;
