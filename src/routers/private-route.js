import { useAuth0 } from '@auth0/auth0-react'
import RedirectLoading from "../components/auth/redirect-loading";

/**
 * PrivateRoute:
 * Check user is logged in, if not, redirect to login page
 * @returns protected route
 */

const withAuth = (ProtectedComponent) => {
  return (props) => {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

    if (isLoading) {
      return <RedirectLoading />;
    }

    if (!isAuthenticated) {
      loginWithRedirect()
      return <RedirectLoading />;
    }

    return <ProtectedComponent {...props} />;
  };
};

export default withAuth;