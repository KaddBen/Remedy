import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./form.css";
import Modal from "../Modal/modal";
import Input from "../input/input";
import { addUserInfos } from "../../reducers/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  console.log(useSelector((state) => state.reducer));
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let count = 0;
    document
      .querySelectorAll("span")
      .forEach((span) =>
        window.getComputedStyle(span).display === "block"
          ? count++
          : console.log(count)
      );
    document.querySelectorAll("input").forEach((input) => {
      if (input.value.length === 0) {
        count++;
        if (input.nextSibling) input.nextSibling.style.display = "block";
      }
    });
    if (count === 0) {
      setIsOpen(true);
      if (stateValue.length === "<empty string>")
        setStateValue(document.querySelectorAll("select")[0].value);
      if (saleValue.length === "<empty string>")
        setSaleValue(document.querySelectorAll("select")[1].value);
      setData({
        name: firstNameValue,
        lastname: lastNameValue,
        startdate: startValue,
        birthdate: birthValue,
        street: streetValue,
        city: cityValue,
        state: stateValue,
        department: saleValue,
      });
    } else {
      console.log(count);
    }
  };
  const [data, setData] = useState({
    name: "hello",
    lastname: "hello",
    startdate: "hello",
    birthdate: "hello",
    street: "hello",
    city: "hello",
    state: "hello",
    department: "hello",
  });
  const [isOpen, setIsOpen] = useState(false);

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [birthValue, setBirthValue] = useState("");
  const [startValue, setStartValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const [saleValue, setSaleValue] = useState("");
  const states = [
    "Alabama","Alaska","American Samoa","Arizona","Arkansas","California",
    "Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia",
    "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana",
    "Iowa", "Kansas","Kentucky","Louisiana","Maine","Marshall Islands",
    "Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
    "Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
    "New York", "North Carolina","North Dakota","Northern Mariana Islands",
    "Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island",
    "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island",
    "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
  ];

  return (
    <main>
      <form action="#" id="create-employee">
        <label for="first-name">First Name</label>
        <Input
          type="text"
          id="first-name"
          pattern="^[A-Za-z0_9]{3,16}$"
          onChange={(e) => setFirstNameValue(e.target.value)}
          value={firstNameValue}
        />

        <label for="last-name">Last Name</label>
        <Input
          type="text"
          id="last-name"
          pattern="^[A-Za-z0_9]{3,16}$"
          onChange={(e) => setLastNameValue(e.target.value)}
          value={lastNameValue}
        />

        <label for="date-of-birth">Date of Birth</label>
        <Input
          id="date-of-birth"
          type="date"
          pattern="^[0-9]*$"
          onChange={(e) => setBirthValue(e.target.value)}
          value={birthValue}
        />

        <label for="start-date">Start Date</label>
        <Input
          id="start-date"
          type="date"
          pattern="^[0-9]*$"
          onChange={(e) => setStartValue(e.target.value)}
          value={startValue}
        />

        <fieldset class="address">
          <legend>Address</legend>

          <label for="street">Street</label>
          <Input
            id="street"
            type="text"
            pattern="^[A-Za-z0_9]{6,16}$"
            onChange={(e) => setStreetValue(e.target.value)}
            value={streetValue}
          />

          <label for="city">City</label>
          <Input
            id="city"
            type="text"
            pattern="^[A-Za-z0_9]{3,16}$"
            onChange={(e) => setCityValue(e.target.value)}
            value={cityValue}
          />

          <label for="state">State</label>
          <select
            name="state"
            id="state"
            onChange={(e) => setStateValue(e.target.value)}
            value={stateValue}
          >
            {states.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              );
            })}
          </select>

          <label for="zip-code">Zip Code</label>
          <Input
            id="zip-code"
            type="number"
            pattern="^[0-9]*$"
            onChange={(e) => setCodeValue(e.target.value)}
            value={codeValue}
          />
        </fieldset>

        <label for="department">Department</label>
        <select
          name="department"
          id="department"
          onChange={(e) => setSaleValue(e.target.value)}
          value={saleValue}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          data={data}
        ></Modal>
      </form>
    </main>
  );
};

export default Form;
