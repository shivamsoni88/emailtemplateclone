import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./Maincomponent.css";
import "react-calendar/dist/Calendar.css";

const Maincomponent = () => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const arr = [
    "8:00AM",
    "8:30AM",
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:00PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
  ];
  const [value, onChange] = useState(new Date());
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const changeColor = (ele) => {
    // let element = document.getElementById(k);
    setColor(ele);
    // style={{ background: color }}
    // element.style.backgroundColor = color;
  };

  const validationCheck = () => {
    if (!phone || !email) {
      alert("Fill all field");
    }
  };
  // email = validEmailRegex.test(value) ? "" : "Email is not valid!";

  return (
    <div className="middleComponent">
      <div className="middlePart">
        <div className="startingtTimeAndTotalComponentPart">
          <div className="startingTime">
            <div className="selectStartingTime">Select a Starting Time</div>
            <div className="calender">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="totalCompoPart">
            <div className="availableTime">Available Times:</div>
            <div className="grid-container">
              {arr.map((ele, index) => {
                return (
                  <div
                    className="grid-item"
                    style={{ background: ele === color ? "blue" : "white" }}
                    onClick={() => changeColor(ele)}
                  >
                    {ele}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pickupAddress">Pickup Address(Optional)</div>
        <div style={{ "margin-left": "15px" }}>
          <input className="inputField" />
        </div>
        <div className="underlineInputField">
          We need the address of your accomodation in order to arrange pickup
        </div>

        <div className="xyz">
          <div className="mobileAndEmail">
            <div className="mobilePhone">Your mobile phone</div>
            <div>
              <input
                className="inputField1"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="underlineInputField1">
              We will only contact you in case of important updates or last-
              <br />
              minute changes to your activity
            </div>
          </div>

          <div className="mobileAndEmail">
            {/* <div className="inputField1">+370 688 8545</div> */}
            <div className="mobilePhone1">Your email</div>
            <div>
              <input
                className="inputfield12"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="saveBtn">
          <button className="btn" onClick={validationCheck}>
            Save & Book
          </button>
        </div>
        <div className="headerSection">
          <div className="tripaddrightreserved">
            2022 Tripadd all rights reversed
          </div>
          <div className="rightHeaderSection">
            <div>
              <a
                href="https://www.w3schools.com"
                className="tripaddrightreserved"
              >
                Terms of Service
              </a>
            </div>
            <div>
              <a
                href="https://www.w3schools.com"
                className="tripaddrightreserved"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                href="https://www.w3schools.com"
                className="tripaddrightreserved"
              >
                Refund Policy
              </a>
            </div>
            <div>
              <a
                href="https://www.w3schools.com"
                className="tripaddrightreserved"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincomponent;
