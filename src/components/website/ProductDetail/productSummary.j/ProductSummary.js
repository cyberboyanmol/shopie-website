import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const ProductSummary = () => {
  let otherDetail = false;

  return (
    <div className="productSpec">
      <div className="productDetail">Other Details</div>

      {/* <ul className="detailList">
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span>100% nylon</span>
        </li>
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span> Product Code: 460763678009</span>
        </li>
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span> Zipper and button placket</span>
        </li>
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span>Hood with drawcords</span>
        </li>
      </ul> */}
      <ul className="detailList">
        {" "}
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span className="first">Country Of Origin </span>
          <span className="colon">:</span>
          <span className="Itemdesc"> INDIA</span>
        </li>
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span className="first">Marketed By </span>
          <span className="colon">:</span>
          <span className="Itemdesc">
            Reliance Retail Limited Shed No-77/80, Indian Corporation Godown
            Mankoli Naka, Village Dapode Taluka, Bhiwandi Dist. Thane
            Maharashtra PIN-421302
          </span>
        </li>
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span className="first">Manufactured By</span>
          <span className="colon">:</span>
          <span className="Itemdesc">
            Reliance Retail Limited Shed No-77/80, Indian Corporation Godown
            Mankoli Naka, Village Dapode Taluka, Bhiwandi Dist. Thane
            Maharashtra PIN-421302
          </span>
        </li>
        <li className="listItem">
          <GoPrimitiveDot className="icon" />
          <span className="first">Customer Care Address </span>
          <span className="colon">:</span>
          <span className="Itemdesc">
            AJIO, c/o Reliance Retail Limited, SS Plaza, 74/2 Outer Ring Road,
            29th Main Road, BTM 1st Stage, BTM Layout, Bangalore 560068,
            Karnataka, INDIA. Ph. 1800-889-9991. E-mail - customercare@ajio.com
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductSummary;
