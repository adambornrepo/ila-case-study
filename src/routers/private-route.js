import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

/**
 * PrivateRoute:
 * Check user is logged in, if not, redirect to login page
 * Then check user is not empty, if empty, redirect to register page
 * @returns protected route
 */
const PrivateRoute = ({ children }) => {
  const { isUserLoggedIn, user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (!isUserLoggedIn) return <Navigate to="/login" />;

  if (!user && pathname !== "/register") return <Navigate to="/register" />

  return children;
};

export default PrivateRoute;