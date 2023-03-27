import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer, employeeListReducer } from "./reducer";
import { EmployeeListState } from "./reducer/employee.reducer";
import { UserState } from "./reducer/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  employee: employeeListReducer,
});

export type RootState = {
  user: UserState;
  employee: EmployeeListState;
};

export const store = createStore(rootReducer);

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
