import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatientById } from "../../services/patientService";
import "./ViewPatient.css";

const ViewPatient = () => {
  const { id } = useParams(); // Get patient ID from URL
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  // Fetch patient details when component loads
  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    try {
      const data = await getPatientById(id);
      setPatient(data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="#">SR HOSPITALS</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-secondary" onClick={() => navigate("/docdash")}>Back</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Patient Details */}
      <div className="container">
        {patient ? (
          <>
            <label>ID: <b>{patient.id}</b></label><br />
            <label>Name: <b>{patient.name}</b></label><br />
            <label>Age: <b>{patient.age}</b></label><br />
            <label>Blood Group: <b>{patient.blood}</b></label><br />
            <label>Health Issue: <b>{patient.prescription}</b></label><br />
            <label>Referred By: <b>{patient.dose}</b></label><br />
            <label>Fees: <b>{patient.fees}</b></label><br />
            <label>Emergency (Yes/No): <b>{patient.urgency}</b></label><br />
          </>
        ) : (
          <p>Loading patient details...</p>
        )}
      </div>
    </div>
  );
};

export default ViewPatient;
