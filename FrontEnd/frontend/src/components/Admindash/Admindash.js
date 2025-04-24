import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatientList, deletePatient } from "../../services/patientService";
import { logoutAdmin } from "../../services/authServiceAdmin";
import "./Admindash.css";

const AdminDash = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const data = await getPatientList();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      loadPatients(); // Refresh patient list
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/home");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="#">SR HOSPITALS</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="btn btn-primary" onClick={() => navigate("/appointmentlist")}>Appointments</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h2 className="text-center">Admin Dashboard</h2>
        <marquee>Welcome to Admin Dashboard. Click Appointments to view or update appointments.</marquee>
        <h3>Current Patients Admitted in Hospital</h3>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Health Issue</th>
              <th>Fees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.prescription}</td>
                <td>{patient.fees}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(patient.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDash;
