import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import Layout from "../Layout/Layout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import EventsPage from "../pages/EventsPage";
import AdminManagementPage from "../pages/subAdmin/AdminManagementPage";
import RoleManagementPage from "../pages/subAdmin/RoleManagementPage";
import AdminActivityPage from "../pages/subAdmin/AdminActivityPage";
import SupportPage from "../pages/SupportPage";
import FinancePage from "../pages/FinancePage";
import StaffPage from "../pages/Staff/StaffPage";
import TierPage from "../pages/TierPage";
import PolicyPage from "../pages/PolicyPage";
import Text from "../pages/Text";
import MainPage from "../pages/Approval/MainPage";
import ApprovalPage from "../pages/Approval/ApprovelPage";
import StaffView from "../pages/Staff/StaffView";

import { PrivateRoute } from "./PrivateRouter";
import FinanceSinglePage from "../pages/FinanaceSinglePage";
import Transaction from "../pages/Transactions/Transaction";
import PolicyView from "../pages/PolicyView";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Text />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/app",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Layout>
          <Dashboard />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/approvals",
    element: (
      <PrivateRoute>
        <Layout>
          <MainPage />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/transactions",
    element: (
      <PrivateRoute>
        <Layout>
          <Transaction />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/approvals/view/:id",
    element: (
      <PrivateRoute>
        <Layout>
          <ApprovalPage />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/policy/:id",
    element: (
      <PrivateRoute>
        <Layout>
          <PolicyView />
        </Layout>
      </PrivateRoute>
    ),
  },

  {
    path: "/events",
    element: (
      <PrivateRoute>
        <Layout>
          <EventsPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/subadmin/admin-management",
    element: (
      <PrivateRoute>
        <Layout>
          <AdminManagementPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/subadmin/role-management",
    element: (
      <PrivateRoute>
        <Layout>
          <RoleManagementPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/subadmin/admin-activity",
    element: (
      <PrivateRoute>
        <Layout>
          <AdminActivityPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/finance",
    element: (
      <PrivateRoute>
        <Layout>
          <FinancePage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },

  {
    path: "/finance/:id",
    element: (
      <PrivateRoute>
        <Layout>
          <FinanceSinglePage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/staffs",
    element: (
      <PrivateRoute>
        <Layout>
          <StaffPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/tier",
    element: (
      <PrivateRoute>
        <Layout>
          <TierPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/policy",
    element: (
      <PrivateRoute>
        <Layout>
          <PolicyPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/support",
    element: (
      <PrivateRoute>
        <Layout>
          <SupportPage />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/staffs/:id",
    element: (
      <PrivateRoute>
        <Layout>
          <StaffView />
        </Layout>{" "}
      </PrivateRoute>
    ),
  },
]);

export default router;
