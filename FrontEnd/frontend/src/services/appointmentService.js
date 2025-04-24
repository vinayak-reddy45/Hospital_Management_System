import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v2/appointments";

// Get all appointments
export const getAllAppointments = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Create a new appointment
export const createAppointment = async (appointment) => {
  const response = await axios.post(BASE_URL, appointment);
  return response.data;
};

// Delete an appointment
export const deleteAppointment = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
