import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "./EmployeeReducer";

function Home() {
  //Fetch employee list
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  /**
   * Function: Deletes employee based on id
   * @param {id} id employee id
   */
  const handleDelete = (id) => {
    dispatch(deleteEmployee({ id: id }));
  };

  return (
    <div className="container">
      <Link to="/create" className="btn btn-success my-2">
        Add
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>
                {employee.firstName} {employee.lastName}
              </td>
              <td>{employee.birthDate}</td>
              <td>{employee.department}</td>
              <td>{employee.experience}</td>
              <td>
                <Link to={`/edit/${employee.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
