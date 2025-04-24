import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/patients";

// Get all patients
export const getPatientList = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Delete patient by ID
export const deletePatient = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

// Create a new patient
export const createPatient = async (patient) => {
  const response = await axios.post(BASE_URL, patient);
  return response.data;
};

// Get patient by ID
export const getPatientById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Update patient details
export const updatePatient = async (id, patient) => {
  await axios.put(`${BASE_URL}/${id}`, patient);
};
