// src/services/storage.js

export const getStorageData = () => {
  let data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
};

export const setStorageData = (data) => {
  localStorage.setItem("products", JSON.stringify(data));
};
