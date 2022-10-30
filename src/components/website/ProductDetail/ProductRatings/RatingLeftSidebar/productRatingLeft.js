import { AvatarGroup, Box, Button, LinearProgress } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./productRatingLeft.scss";
import { GrStar } from "react-icons/gr";
const ProductRatingLeft = () => {
  // three things need to be done
  // heading and button
  //chart
  //images upload by customers
  let number = [5, 4, 3, 2, 1];
  let background = "https://i.imgur.com/dLgZZdl.jpg";

  const AllImageHandler = () => {
    console.log("AllImage");
  };
  return (
    <div className="product_rating_left">
      <div className="heading">
        <span>Ratings & Reviews </span>
        <Button
          variant="contained"
          sx={{
            "&:hover": { background: "#fff", opacity: 0.9, color: "#000" },
            backgroundColor: `#00BADB`,
          }}
        >
          Rate Product
        </Button>
      </div>
      <div className="Rating_Main">
        <div className="Rating_Main_left">
          <span className="stars">
            4.5 <GrStar className="icon" />
          </span>
          <span className="reviewText"> {`1054 rating & ${100} reviews`}</span>
        </div>
        <div className="Rating_Main_right">
          <ul className="ratingList">
            {number.map((item, index) => {
              return (
                <li className="listItem" key={index}>
                  <span className="stars">
                    {item} <GrStar className="icon" />
                  </span>
                  <LinearProgress
                    sx={{
                      width: "80%",
                      borderRadius: "12px",
                      "& .MuiLinearProgress-colorPrimary": {
                        backgroundColor: "grey",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: `${"green"}`,
                      },
                    }}
                    variant="buffer"
                    valueBuffer={100}
                    value={item * 20}
                  />
                  <span className="stars">5868</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="allImage">
        <span className="title">Images upload by customers</span>
        <div className="images">
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/gCJoNZY.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/gCJoNZY.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox">
            <img src="https://i.imgur.com/dLgZZdl.jpg" />
          </Box>
          <Box className="imageBox" onClick={AllImageHandler}>
            <span
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <AiOutlinePlus />
              24
            </span>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProductRatingLeft;
