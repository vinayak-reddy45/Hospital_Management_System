import { Navigate } from "react-router-dom";
import { isAdminLoggedIn } from "../services/authServiceAdmin";

const AdminAuthGuard = ({ children }) => {
  
  return isAdminLoggedIn() ? children : <Navigate to="/adlogin" />;
};

export default AdminAuthGuard;
