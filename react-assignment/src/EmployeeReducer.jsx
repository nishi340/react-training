import { createSlice } from "@reduxjs/toolkit";
import { employeeList } from "./EmployeeListData";

const employeeSlice = createSlice({
  name: "employees",
  initialState: employeeList,
  reducers: {
    // Adds employee to the list
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    // updates employee to the list
    updateEmployee: (state, action) => {
      const { id } = action.payload;
      const editEmployee = state.find((employee) => employee.id == id);
      if (editEmployee) {
        editEmployee.firstName = action.payload.ufirstName;
        editEmployee.lastName = action.payload.ulastName;
        editEmployee.birthDate = action.payload.birthDate;
        editEmployee.department = action.payload.udepartment;
        editEmployee.experience = action.payload.uexperience;
      }
    },
    //deletes employee from the list
    deleteEmployee: (state, action) => {
      const { id } = action.payload;
      const deleteEmployee = state.find((employee) => employee.id == id);
      if (deleteEmployee) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
