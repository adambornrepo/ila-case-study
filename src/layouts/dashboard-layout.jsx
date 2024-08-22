import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="dashboard-layout-container">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
