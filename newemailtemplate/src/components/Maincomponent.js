import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./Maincomponent.css";
import "react-calendar/dist/Calendar.css";

const Maincomponent = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="middlePart">
        <div className="startingTime">Select a Starting Time</div>
        <div className="totalCompoPart">
          <div className="calender">
            <Calendar onChange={onChange} value={value} />
          </div>
          {/* <div>Available Times</div> */}
          <div class="grid-container">
            <div class="grid-item" style={{ "border-radius": "30px" }}>
              1
            </div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincomponent;
