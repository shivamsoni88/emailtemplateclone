import React, { useState } from "react";
import Citytour from "./Citytour";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  function myFunction() {
    // console.log("Hello");
    setToggle(!toggle);

    console.log(toggle);
  }
  return (
    <div>
      <div className="header">
        <img
          src="https://tripadd-qa-images.s3.us-west-2.amazonaws.com/email-assets/logo.png"
          alt="logo"
          className="imgLogo"
        />

        <div className="topnav" id="myTopnav">
          <a href="javascript:void(0);" className="icon">
            <i
              class="fa fa-bars"
              style={{ "margin-top": "5px" }}
              onClick={myFunction}
            ></i>
          </a>

          {toggle && (
            <div>
              <button className="signupbtn">Sign Up</button>
            </div>
          )}
        </div>
      </div>

      <div className="abcd">
        <hr className="hrline" />
        <div className="touristHeading">Schedule Your Tours And Activities</div>
        <div className="mainCityComponent">
          <Citytour />
        </div>
      </div>
    </div>
  );
};

export default Header;
