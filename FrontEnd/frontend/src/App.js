import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Admindash from "./components/Admindash/Admindash";
import CreateAppointment from "./components/CreateAppointment/CreateAppointment";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import Docdash from "./components/Docdash/Docdash";
import CreatePatient from "./components/CreatePatient/CreatePatient";
import MedicineList from "./components/MedicineList/MedicineList";
import CreateMedicine from "./components/CreateMedicine/CreateMedicine";
import UpdatePatient from "./components/UpdatePatient/UpdatePatient";
import ViewPatient from "./components/ViewPatient/ViewPatient";
import UpdateMedicine from "./components/UpdateMedicine/UpdateMedicine";
import DocLogin from "./components/DocLogin/DocLogin";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminAuthGuard from "./auth/AdminAuthGuard";
import DoctorAuthGuard from "./auth/DoctorAuthGuard";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/doclogin" element={<DocLogin />} />
        <Route path="/adlogin" element={<AdminLogin />} />
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminAuthGuard>
              <Admindash />
            </AdminAuthGuard>
          }
        />
        <Route
          path="/create-appointment"
          element={
            <AdminAuthGuard>
              <CreateAppointment />
            </AdminAuthGuard>
          }
        />
        <Route
          path="/appointmentlist"
          element={
            <AdminAuthGuard>
              <AppointmentList />
            </AdminAuthGuard>
          }
        />
        {/* Protected Doctor Routes */}
        <Route
          path="/docdash"
          element={
            <DoctorAuthGuard>
              <Docdash />
            </DoctorAuthGuard>
          }
        />
        <Route
          path="/create-patient"
          element={
            <DoctorAuthGuard>
              <CreatePatient />
            </DoctorAuthGuard>
          }
        />
        <Route
          path="/view-medicine"
          element={
            <DoctorAuthGuard>
              <MedicineList />
            </DoctorAuthGuard>
          }
        />
        <Route
          path="/create-medicine"
          element={
            <DoctorAuthGuard>
              <CreateMedicine />
            </DoctorAuthGuard>
          }
        />
        <Route
          path="/update-patient/:id"
          element={
            <DoctorAuthGuard>
              <UpdatePatient />
            </DoctorAuthGuard>
          }
        />
        <Route
          path="/view-patient/:id"
          element={
            <DoctorAuthGuard>
              <ViewPatient />
            </DoctorAuthGuard>
          }
        />
         <Route
          path="/update-medicine/:id"
          element={
            <DoctorAuthGuard>
              <UpdateMedicine />
            </DoctorAuthGuard>
          }
        />
      </Routes>
    </Router>

  );
};

export default App;
