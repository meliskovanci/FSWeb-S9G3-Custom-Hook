import { useState } from "react";

export function useLocalStorage(key, value) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  });

  const setValue = (value) => {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}
