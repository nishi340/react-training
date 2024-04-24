import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Calender from "react-calendar";
import { updateEmployee } from "./EmployeeReducer";

function Update() {
  const { id } = useParams("id");
  const employees = useSelector((state) => state.employees);
  const selectedEmployee = employees.find((f) => f.id == id);

  const [date, setDate] = React.useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  const [ufirstName, setFirstName] = useState(selectedEmployee.firstName);
  const [ulastName, setLastName] = useState(selectedEmployee.lastName);
  const [udepartment, setDepartment] = useState(selectedEmployee.department);
  const [uexperience, setExperience] = useState(selectedEmployee.experience);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!ufirstName.trim()) {
      alert("First name cannot be empty.");
      return;
    }

    if (!ulastName.trim()) {
      alert("Last name cannot be empty.");
      return;
    }

    if (!udepartment || udepartment === "--select--") {
      alert("Please select a department.");
      return;
    }

    if (!uexperience || uexperience === "--select--") {
      alert("Please select a experience.");
      return;
    }

    // Regex pattern to match only alphabetic characters (A-Z) with case-insensitive flag
    const alphaRegex = /^[a-zA-Z]+$/;

    if (!alphaRegex.test(ufirstName)) {
      alert("First name should contain only alphabetic characters (A-Z).");
      return;
    }

    if (!alphaRegex.test(ulastName)) {
      alert("Last name should contain only alphabetic characters (A-Z).");
      return;
    }

    dispatch(
      updateEmployee({
        id: id,
        ufirstName,
        ulastName,
        birthDate: date.toLocaleDateString("en-GB"),
        udepartment,
        uexperience,
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
              value={ufirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={ulastName}
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
              value={udepartment}
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
              value={uexperience}
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
              Update
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

export default Update;
