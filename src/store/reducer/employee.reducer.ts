import { EmployeeAction } from "store/actions";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
} from "store/actionTypes";
import { EmployeeFormValues } from "types/types";

export type EmployeeListState = {
  employeeList: EmployeeFormValues[];
  isLoading: boolean;
};

const initialState: EmployeeListState = {
  employeeList: [],
  isLoading: false,
};

const employeeListReducer = (
  state: EmployeeListState = initialState,
  action: EmployeeAction
) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, action.payload],
      };
    case EDIT_EMPLOYEE:
      const indexOfEmployee = state.employeeList.findIndex(
        (emp) => emp.id === action.payload.id
      );
      state.employeeList[indexOfEmployee] = action.payload;
      return state;

    case DELETE_EMPLOYEE:
      const filteredList = state.employeeList.filter(
        (list) => list.id !== action.payload.id
      );
      return {
        ...state,
        employeeList: filteredList,
      };
    default:
      return state;
  }
};

export default employeeListReducer;
