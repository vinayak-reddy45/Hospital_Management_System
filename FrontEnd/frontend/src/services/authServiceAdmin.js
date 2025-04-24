// Admin Authentication Service in React
export const authenticateAdmin = (username, password) => {
    if (username === "Admin" && password === "1234") {
      sessionStorage.setItem("username2", username);
      return true;
    }
    return false;
  };
  
  export const isAdminLoggedIn = () => {
    console.log("User Logged In");
    let user = sessionStorage.getItem("username2");
    return user !== null;
  };
  
  export const logoutAdmin = () => {
    console.log("User Logged Out");
    sessionStorage.removeItem("username2");
  };
  