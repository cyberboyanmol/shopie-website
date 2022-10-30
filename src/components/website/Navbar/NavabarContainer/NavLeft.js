import React from "react";
import { links1, links2 } from "../../../../AppConstant";
import Logo from "../../../Reuseable/logo/logo";
import NavbarLinks from "../NavbarLink/NavbarLinks";
import Search from "../Search/Search";
const NavLeft = () => {
  const linkpart1 = links1?.map((item, index) => {
    return <NavbarLinks key={index} navlink={item} />;
  });
  const linksPart2 = links2?.map((item, index) => {
    return <NavbarLinks key={index} navlink={item} />;
  });
  return (
    <div className="navbar__bottom">
      <div className="navbar__bottom__container">
        <div className="navbar__bottom__container__navlinks">{linkpart1}</div>
        <Logo link={false} />
        <div className="navbar__bottom__container__navlinks">{linksPart2}</div>
        <div className="navbar__bottom__container__mb_search"></div>
      </div>
    </div>
  );
};

export default NavLeft;
