import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import MobileTop from "../../Shop/MobileTop/MobileTop";
import "./Overview.scss";
const Overview = () => {
  const [icon, setIcon] = useState(false);
  const [gender, setGender] = useState("female");

  const RadioChangeHandler = (e) => {
    setGender(e.target.value);
  };
  const FormHandler = (event) => {
    event.preventDefault();
  };
  console.log(gender);
  return (
    <div className="OverviewMain">
      <MobileTop title="Profile" />

      <div className="overview">
        <div className="imageUpload">
          <img
            src="https://i.imgur.com/gCJoNZY.jpg"
            onMouseOver={() => setIcon(true)}
            onMouseOut={() => setIcon(false)}
            alt="profile_image"
          />
          <AiFillCamera
            onMouseOver={() => setIcon(true)}
            onMouseOut={() => setIcon(false)}
            className={`icon ${icon ? "icon_click" : ""}`}
          />
        </div>
        <form onSubmit={FormHandler} className="userInformationEdit">
          <span className="userInfo">User Information</span>
          <div className="inputField">
            <span className="username">Full Name</span>
            <input
              //   readOnly
              autoFocus={true}
              text="text"
              required
              name="username"
              placeholder="username"
              className="usernameInput"
            />
          </div>
          <div className="inputField">
            <span className="username">Email Id</span>
            <input
              // readOnly
              required
              text="email"
              name="email"
              placeholder="Email id"
              className="usernameInput"
            />
          </div>
          <div className="inputField">
            <span className="username">Phone No</span>
            <input
              required
              type="tel"
              name="phoneno"
              placeholder="Phone No eg: +91 7455987462"
              className="usernameInput"
            />
          </div>
          <div className=" radioGender">
            <FormLabel className="username" id="demo-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              className="radio__group"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={"female"}
              value={gender}
              name="radio-buttons-group"
              onChange={RadioChangeHandler}
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      " &.Mui-checked": {
                        color: "#00badb",
                      },
                    }}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      " &.Mui-checked": {
                        color: "#00badb",
                      },
                    }}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    sx={{
                      " &.Mui-checked": {
                        color: "#00badb",
                      },
                    }}
                  />
                }
                label="Other"
              />
            </RadioGroup>
          </div>

          <Button type="submit" variant="contained" className="Edit_Btn">
            Edit Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Overview;
