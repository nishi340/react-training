import React, { useState } from "react";
import { addEmployee } from "./EmployeeReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Calender from "react-calendar";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName.trim()) {
      alert("First name cannot be empty.");
      return;
    }

    if (!lastName.trim()) {
      alert("Last name cannot be empty.");
      return;
    }

    if (!department || department === "--select--") {
      alert("Please select a department.");
      return;
    }

    if (!experience || experience === "--select--") {
      alert("Please select a experience.");
      return;
    }

    // Regex pattern to match only alphabetic characters (A-Z) with case-insensitive flag
    const alphaRegex = /^[a-zA-Z]+$/;

    if (!alphaRegex.test(firstName)) {
      alert("First name should contain only alphabetic characters (A-Z).");
      return;
    }

    if (!alphaRegex.test(lastName)) {
      alert("Last name should contain only alphabetic characters (A-Z).");
      return;
    }
    
    dispatch(
      addEmployee({
        id: employees[employees.length - 1].id + 1,
        firstName,
        lastName,
        birthDate: date.toLocaleDateString("en-GB"),
        department,
        experience,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center-align-content-center w-100">
      <div className="border p-3">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="birthDate">Birth Date</label>
            <Calender onChange={onChange} value={date}></Calender>
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <select
              className="form-control"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>--select--</option>
              <option>Mechanical</option>
              <option>Electrical</option>
              <option>IT</option>
              <option>Account</option>
            </select>
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <select
              className="form-control"
              onChange={(e) => setExperience(e.target.value)}
            >
              <option>--select--</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>5 Years & More</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-info">
              Add
            </button>
            <button type="reset" className="btn">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
