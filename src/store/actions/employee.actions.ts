import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "store/actionTypes";
import { EmployeeFormValues } from "types/types";

export const addEmployee = (payload: EmployeeFormValues) => ({
  type: ADD_EMPLOYEE,
  payload: payload,
});
export const editEmployee = (payload: EmployeeFormValues) => ({
  type: EDIT_EMPLOYEE,
  payload: payload,
});

export const deleteEmployee = (payload:EmployeeFormValues) => ({
  type: DELETE_EMPLOYEE,
  payload: payload,
});

export type EmployeeAction = {
  type: "ADD_EMPLOYEE" | "EDIT_EMPLOYEE" | "DELETE_EMPLOYEE";
  payload: EmployeeFormValues ;
};
