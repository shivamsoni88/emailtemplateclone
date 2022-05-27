import React from "react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Maincomponent.css";
import "react-calendar/dist/Calendar.css";

const Maincomponent = () => {
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
  const initialValues = { email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeColor = (ele) => {
    setColor(ele);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexphone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (!values.phone) {
      errors.phone = "phone is required!";
    } else if (!regexphone.test(values.phone)) {
      errors.phone = "This is not a valid phone format!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

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
                    style={{
                      background: ele === color ? "#0081ab" : "white",
                    }}
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
            <div className="phonerequired">{formErrors.phone}</div>
            <div>
              <input
                className="inputField1"
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
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
            <div className="emailrequired">{formErrors.email}</div>
            <div>
              <input
                className="inputfield12"
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="saveBtn">
          <button className="btn" onClick={handleSubmit}>
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
