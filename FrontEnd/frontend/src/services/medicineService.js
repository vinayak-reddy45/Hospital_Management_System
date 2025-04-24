import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v3/medicines";

// Get all medicines
export const getMedicines = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Create a new medicine
export const createMedicine = async (medicine) => {
  const response = await axios.post(BASE_URL, medicine);
  return response.data;
};

// Get medicine by ID
export const getMedicineById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Update medicine details
export const updateMedicine = async (id, medicine) => {
  await axios.put(`${BASE_URL}/${id}`, medicine);
};

// Delete a medicine
export const deleteMedicine = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
