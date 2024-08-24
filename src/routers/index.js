import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import DashboardLayout from "../layouts/dashboard-layout";
import PrivateRoute from "./private-route";
import HomePage from "../pages/home/homepage";
import LoginPage from "../pages/auth/login-page";
import RegistrationPage from "../pages/auth/registration-page";
import ProductListPage from "../pages/dashboard/product-list-page";
import ProductDetailsPage from "../pages/dashboard/product-details-page";
import Error404Page from "../pages/error/error-404-page";
import Error500Page from "../pages/error/error-500-page";

const router = createBrowserRouter([
  // Auth Pages and Error Pages
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "login",
      //   element: <LoginPage />,
      // },
      {
        path: "register",
        element: (
          <PrivateRoute>
            <RegistrationPage />
          </PrivateRoute>)
      },
      {
        path: "not-found",
        element: <Error404Page />,
      },
      {
        path: "server-error",
        element: <Error500Page />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },

  // Dashboard Pages
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <ProductListPage />,
      },
      {
        path: "products",
        element: <ProductListPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailsPage />,
      }
    ],
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;