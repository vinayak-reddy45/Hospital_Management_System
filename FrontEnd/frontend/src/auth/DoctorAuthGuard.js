import { Navigate } from "react-router-dom";
import { isDoctorLoggedIn } from "../services/authService"; // Import authentication function

const DoctorAuthGuard = ({ children }) => {
  return isDoctorLoggedIn() ? children : <Navigate to="/doclogin" />;
};

export default DoctorAuthGuard;
