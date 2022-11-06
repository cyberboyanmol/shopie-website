import { Button } from "@mui/material";
import React from "react";
import "./EmptyWishList.scss";
const EmptyWishList = ({
  text,
  title,
  ClickEvent1,
  ClickEvent2,
  btnText,
  condition,
}) => {
  return (
    <div className="empty_wishlist">
      <div className="empty_wishlist_top">
        <div className="img">
          <img
            src="https://i.imgur.com/Rng1NVi.png"
            loading="lazy"
            alt="wishlist_png"
            className="wish_img"
          />
        </div>
        <span className="textHeading">{title}</span>
        <span className="text">{text}</span>
      </div>
      <div className="empty_wishlist_bottom">
        <Button
          sx={{
            "&:hover": {
              //   backgroundColor: "#00BADB",
              opacity: 0.9,

              borderColor: "#00BADB",
            },

            // width: "80%",
            color: `#00BADB`,
          }}
          onClick={ClickEvent1}
          variant="outlined"
          className="empty_wishlist_bottom_btn"
        >
          Continue Shopping
        </Button>
        {condition && (
          <Button
            sx={{
              "&:hover": {
                backgroundColor: `#00BADB`,
                opacity: 0.8,
                //   color: "#000",
              },
              // width: "80%",
              backgroundColor: `#00BADB`,
            }}
            variant="contained"
            onClick={ClickEvent2}
            className="empty_wishlist_bottom_btn"
          >
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyWishList;
