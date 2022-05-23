import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./Maincomponent.css";
import "react-calendar/dist/Calendar.css";

const Maincomponent = () => {
  const [value, onChange] = useState(new Date());
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

            <div class="grid-container">
              <div class="grid-item">8:00AM</div>
              <div class="grid-item"> 8:30AM</div>
              <div class="grid-item"> 9:00AM</div>
              <div class="grid-item2"> 9:30AM</div>
              <div class="grid-item1"> 10:00AM</div>
              <div class="grid-item1"> 10:30AM</div>
              <div class="grid-item1">11:00AM</div>
              <div class="grid-item1">11:30AM</div>
              <div class="grid-item1">12:00PM</div>
              <div class="grid-item">1:00PM</div>
              <div class="grid-item">1:30PM</div>
              <div class="grid-item3">2:00PM</div>
              <div class="grid-item">2:30PM</div>
              <div class="grid-item">3:00PM</div>
              <div class="grid-item">3:30PM</div>
              <div class="grid-item">4:00PM</div>
              <div class="grid-item">4:30PM</div>
              <div class="grid-item">5:00PM</div>
            </div>
          </div>
        </div>
        <div className="pickupAddress">Pickup Address(Optional)</div>
        <div className="inputField"></div>
        <div className="underlineInputField">
          We need the address of your accomodation in order to arrange pickup
        </div>

        <div className="xyz">
          <div className="mobileAndEmail">
            <div className="mobilePhone">Your mobile phone</div>
            <div className="inputField1">+370 688 8545</div>
            {/* <div className="mobilePhone1">Your email</div> */}
          </div>

          <div className="mobileAndEmail">
            {/* <div className="inputField1">+370 688 8545</div> */}
            <div className="mobilePhone1">Your email</div>
            <div className="inputfield12">darius@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="saveBtn">
          <button className="btn">Save & Book</button>
        </div>
      </div>
    </div>
  );
};

export default Maincomponent;
