import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatientList, deletePatient } from "../../services/patientService";
import { logoutDoctor } from "../../services/authService";
import "./Docdash.css";

const Docdash = () => {
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
      loadPatients();
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleLogout = () => {
    logoutDoctor();
    navigate("/home");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="/home">SR HOSPITALS</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-success" onClick={() => navigate("/create-patient")}>Admit Patient</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info" onClick={() => navigate("/view-medicine")}>View Medicines</button>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="container">
        <h2 className="text-center">Dashboard</h2>
        <marquee className="marquee">Welcome to Dashboard. Find the patient list below. Click Add Patient to admit patients.</marquee>
        <hr />
        <h3>Patients Admitted in Hospital</h3>

        {/* Patients Table */}
        <div className="tableFixHead">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Health Issue</th>
                <th>Emergency (Yes/No)</th>
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
                  <td>{patient.urgency}</td>
                  <td>
                    <button className="btn btn-info" onClick={() => navigate(`/update-patient/${patient.id}`)}>Update</button>
                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => handleDelete(patient.id)}>Delete</button>
                    <button className="btn btn-success" style={{ marginLeft: "10px" }} onClick={() => navigate(`/view-patient/${patient.id}`)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Docdash;
