import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatientById, updatePatient } from "../../services/patientService";
import "./UpdatePatient.css";

const UpdatePatient = () => {
  const { id } = useParams(); // Get patient ID from URL
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    blood: "",
    prescription: "",
    dose: "",
    fees: "",
    urgency: ""
  });

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

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePatient(id, patient);
      navigate("/docdash"); // Redirect to Doctor Dashboard after update
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="#">SR HOSPITALS</a>
      </nav>

      <div className="container">
        <h2 className="text-center">Update Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name" value={patient.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="text" name="age" className="form-control" placeholder="Enter Age" value={patient.age} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Blood</label>
            <input type="text" name="blood" className="form-control" placeholder="Enter Blood Group" value={patient.blood} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Health Issue</label>
            <input type="text" name="prescription" className="form-control" placeholder="Enter Health Issue" value={patient.prescription} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Referred By Doctor</label>
            <input type="text" name="dose" className="form-control" placeholder="Enter Doctor Name" value={patient.dose} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Fees</label>
            <input type="text" name="fees" className="form-control" placeholder="Enter Fees" value={patient.fees} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Emergency (Yes/No)</label>
            <input type="text" name="urgency" className="form-control" placeholder="Enter Yes/No" value={patient.urgency} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePatient;
