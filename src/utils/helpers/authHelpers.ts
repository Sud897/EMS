import { __LOGGED_IN_USER__ } from "../../constant";
import { getItemFromLocalStorage } from "./commonHelpers";

export const getToken = (): string | undefined => {
  const key = getItemFromLocalStorage(__LOGGED_IN_USER__);
  if (key) {
    const token = JSON.parse(key)?.token;
    return token;
  }
};
export const getEmail = (): string | undefined => {
  const key = getItemFromLocalStorage(__LOGGED_IN_USER__);
  if (key) {
    const email = JSON.parse(key)?.email;
    return email;
  }
};
