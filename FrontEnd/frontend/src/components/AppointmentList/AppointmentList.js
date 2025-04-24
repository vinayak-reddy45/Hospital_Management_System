import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAppointments, deleteAppointment } from "../../services/appointmentService";
import "./AppointmentList.css";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  // Fetch appointments on component load
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const data = await getAllAppointments();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      loadAppointments(); // Reload after deletion
    } catch (error) {
      console.error("Error deleting appointment:", error);
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
              <button className="btn btn-success" onClick={() => navigate("/create-appointment")}>Add Appointment</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary" onClick={() => navigate("/admin")}>Back</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Appointments Table */}
      <div className="container">
        <hr />
        <h2 className="text-center">Appointments</h2>
        <marquee style={{ color: "rgb(86, 86, 86)", fontSize: "x-large" }}>
          Welcome to Appointment Dashboard. Click Add Appointment to create a new appointment.
        </marquee>
        <hr />
        <h3 style={{ color: "rgb(86, 86, 86)" }}>Current Appointments</h3>

        <div className="tableFixHead">
          <br />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Symptoms</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.symtomps}</td>
                  <td>{appointment.number}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(appointment.id)}>Delete</button>
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

export default AppointmentList;
