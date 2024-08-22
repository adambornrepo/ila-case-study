import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="auth-layout-container " style={{ minHeight: "100vh" }}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
