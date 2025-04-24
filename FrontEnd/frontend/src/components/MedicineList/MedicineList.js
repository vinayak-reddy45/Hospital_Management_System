import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMedicines, deleteMedicine } from "../../services/medicineService";
import "./MedicineList.css";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    try {
      const data = await getMedicines();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMedicine(id);
      loadMedicines();
    } catch (error) {
      console.error("Error deleting medicine:", error);
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
            <li className="nav-item">
              <button className="btn btn-success" onClick={() => navigate("/create-medicine")}>Add Medicine</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Medicine Table */}
      <div className="container">
        <h2 className="text-center">Medicine List</h2>
        <p className="text-center">Welcome to the Medicine List Page. Click Add Medicine to add new medicines.</p>
        <hr />
        <div className="tableFixHead">
          <table className="table table-striped">
            <thead className="table-header">
              <tr>
                <th>ID</th>
                <th>Drug Name</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{medicine.id}</td>
                  <td>{medicine.drugName}</td>
                  <td>{medicine.stock}</td>
                  <td>
                    <button className="btn btn-info" onClick={() => navigate(`/update-medicine/${medicine.id}`)}>Update</button>
                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => handleDelete(medicine.id)}>Delete</button>
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

export default MedicineList;
