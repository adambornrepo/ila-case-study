import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/dashboard/header";
import Footer from "../components/dashboard/footer";

const DashboardLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="dashboard-layout-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}
    >
      <Header />
      <div className="layout-content-spacer" style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
