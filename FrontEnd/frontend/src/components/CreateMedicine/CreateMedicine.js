import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMedicine } from "../../services/medicineService";
import "./CreateMedicine.css";

const CreateMedicine = () => {
  const [medicine, setMedicine] = useState({
    drugName: "",
    stock: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const saveMedicine = async (e) => {
    e.preventDefault();
    try {
      await createMedicine(medicine);
      navigate("/view-medicine"); // Redirect to Medicine List after adding medicine
    } catch (error) {
      console.error("Error creating medicine:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="#">SR HOSPITALS</a>
      </nav>

      <div className="container">
        <h2 className="text-center">Add New Medicine</h2>
        <form onSubmit={saveMedicine}>
          <div className="form-group">
            <label>Drug Name</label>
            <input type="text" name="drugName" className="form-control" placeholder="Enter Drug Name" value={medicine.drugName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input type="text" name="stock" className="form-control" placeholder="Enter Stock" value={medicine.stock} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateMedicine;
