import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateAdmin } from "../../services/authServiceAdmin"; // Import authentication service
import "./AdminLogin.css"; // Import styles

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (authenticateAdmin(username, password)) {
      navigate("/admin"); // Redirect to Admin Dashboard
      setInvalidLogin(false);
    } else {
      setInvalidLogin(true);
      alert("Wrong Credentials");
      navigate("/home"); // Redirect to Home
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ margin: "auto" }} className="navbar navbar-expand-lg bg-dark">
        <a style={{ color: "white" }} className="navbar-brand" href="/home">SR HOSPITALS</a>
      </nav>

      {/* Login Form */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="text-center">
                <h1>Login As Receptionist</h1>
                <h6>Please enter your Username & Password</h6>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label"><h4>Username</h4></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User name"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"><h4>Password</h4></label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {invalidLogin && <p style={{ color: "red" }}>Invalid username or password!</p>}

                <div className="d-grid gap-2 d-md-block text-center">
                  <button style={{ margin: "5px" }} className="btn btn-success" type="button" onClick={checkLogin}>
                    Login
                  </button>
                  <button style={{ margin: "5px" }} className="btn btn-warning" type="button" onClick={() => navigate("/home")}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
