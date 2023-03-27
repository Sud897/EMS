import { AppRoutes } from "../constant";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("pages/Login"));
const AddOrEditEmployee = lazy(() => import("pages/AddOrEditEmployee"));
const ListOfEmployee = lazy(() => import("pages/ListOfEmployee"));

export const routes = (token: string | undefined) => [
  {
    path: AppRoutes.LOGIN,
    element: token ? <Navigate to={AppRoutes.EMPLOYEE_LIST} /> : <Login />,
  },
  {
    path: AppRoutes.EMPLOYEE_LIST,
    element: token ? <ListOfEmployee /> : <Login />,
  },
  {
    path: AppRoutes.ADD_EMPLOYEE,
    element: token ? <AddOrEditEmployee /> : <Login />,
  },
  {
    path: AppRoutes.EDIT_EMPLOYEE,
    element: token ? <AddOrEditEmployee /> : <Login />,
  },
  {
    path: "*",
    element: <Navigate replace to={AppRoutes.LOGIN} />,
  },
  {
    path: "/",
    element: <Navigate replace to={AppRoutes.LOGIN} />,
  },
];
