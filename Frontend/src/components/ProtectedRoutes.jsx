import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken')) || false; // Example authentication check       
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;