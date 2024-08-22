import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// PrivateRoute:
// Check if user is logged in
// If not, redirect to login page
const PrivateRoute = ({ children }) => {

  const { isUserLoggedIn } = useSelector((state) => state.auth);

  if (!isUserLoggedIn) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;