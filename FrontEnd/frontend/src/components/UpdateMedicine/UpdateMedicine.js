import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMedicineById, updateMedicine } from "../../services/medicineService";
import "./UpdateMedicine.css";

const UpdateMedicine = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(null); // ✅ Start with null
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    if (id) {
      loadMedicine();
    }
  }, [id]);

  const loadMedicine = async () => {
    try {
      const data = await getMedicineById(id);
      console.log("Fetched Medicine:", data); // ✅ Debugging output
      if (data) {
        setMedicine(data);
      } else {
        console.error("Medicine data is null or undefined");
      }
    } catch (error) {
      console.error("Error fetching medicine details:", error);
    } finally {
      setLoading(false); // ✅ Stop loading after API call
    }
  };

  const handleChange = (e) => {
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMedicine(id, medicine);
      navigate("/view-medicine"); 
    } catch (error) {
      console.error("Error updating medicine:", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-white" href="#">SR HOSPITALS</a>
      </nav>

      <div className="container">
        <h2 className="text-center">Update Medicine</h2>

        {loading ? ( 
          <h3 className="text-center">Loading Medicine Details...</h3>
        ) : medicine ? (  
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Drug Name</label>
              <input type="text" name="drugName" className="form-control" placeholder="Enter Medicine Name" value={medicine.drugName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input type="text" name="stock" className="form-control" placeholder="Enter Stock" value={medicine.stock} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        ) : (
          <h3 className="text-center text-danger">Medicine Not Found</h3>
        )}
      </div>
    </div>
  );
};

export default UpdateMedicine;
