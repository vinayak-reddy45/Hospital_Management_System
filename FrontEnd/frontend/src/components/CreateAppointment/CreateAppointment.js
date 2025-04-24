import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../../services/appointmentService";
import "./CreateAppointment.css";

const CreateAppointment = () => {
  const [appointment, setAppointment] = useState({
    name: "",
    age: "",
    symtomps: "",
    number: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const saveAppointment = async (e) => {
    e.preventDefault();
    try {
      await createAppointment(appointment);
      navigate("/appointmentlist"); // Redirect to appointment list
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="#">SR HOSPITALS</a>
      </nav>

      <div className="container">
        <hr />
        <h2 className="text-center">Add New Appointment</h2>
        <form onSubmit={saveAppointment}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name" value={appointment.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="text" name="age" className="form-control" placeholder="Enter Age" value={appointment.age} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Symptoms</label>
            <input type="text" name="symtomps" className="form-control" placeholder="Enter Symptoms" value={appointment.symtomps} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Number</label>
            <input type="text" name="number" className="form-control" placeholder="Enter Number" value={appointment.number} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointment;
