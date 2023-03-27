export const getItemFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setItemInLocalStorage = (key: string, value: any): void => {
  let valueToStore = typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, valueToStore);
};

export const clearItemFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
