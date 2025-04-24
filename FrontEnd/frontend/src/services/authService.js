// Doctor Authentication Service in React
export const authenticateDoctor = (username, password) => {
    if (username === "Doctor" && password === "1234") {
      sessionStorage.setItem("username", username);
      return true;
    }
    return false;
  };
  
  export const isDoctorLoggedIn = () => {
    console.log("Doctor Logged In");
    let user = sessionStorage.getItem("username");
    return user !== null;
  };

  export const logoutDoctor = () => {
    console.log("Doctor Logged Out");
    sessionStorage.removeItem("username");
  };
  