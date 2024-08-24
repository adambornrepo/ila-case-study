import { useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, useLocation } from "react-router-dom";
import RedirectLoading from "../components/auth/redirect-loading";

/**
 * PrivateRoute:
 * Check user is logged in, if not, redirect to login page
 * Then check user is not empty, if empty, redirect to register page
 * @returns protected route
 */
const PrivateRoute = ({ children }) => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (isLoading) {
    return <RedirectLoading />;
  }
  
  if (!isAuthenticated) {
    loginWithRedirect()
    return <RedirectLoading />;
  }

  if (!user && pathname !== "/register") return <Navigate to="/register" />

  return children;
};

export default PrivateRoute;