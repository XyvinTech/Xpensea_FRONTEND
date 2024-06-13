import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import Layout from "../Layout/Layout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ApprovelPage from "../pages/ApprovelPage";
import EventsPage from "../pages/EventsPage";
import AdminManagementPage from "../pages/subAdmin/AdminManagementPage";
import RoleManagementPage from "../pages/subAdmin/RoleManagementPage";
import AdminActivityPage from "../pages/subAdmin/AdminActivityPage";
import FinancePage from "../pages/FinancePage";
import StaffPage from "../pages/StaffPage";
import TierPage from "../pages/TierPage";
import PolicyPage from "../pages/PolicyPage";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/approvals",
    element: (
      <Layout>
        <ApprovelPage />
      </Layout>
    ),
  },
  {
    path: "/events",
    element: (
      <Layout>
        <EventsPage />
      </Layout>
    ),
  },
  {
    path: "/subadmin/admin-management",
    element: (
      <Layout>
        <AdminManagementPage />
      </Layout>
    ),
  },
  {
    path: "/subadmin/role-management",
    element: (
      <Layout>
        <RoleManagementPage />
      </Layout>
    ),
  },
  {
    path: "/subadmin/admin-activity",
    element: (
      <Layout>
        <AdminActivityPage />
      </Layout>
    ),
  },
  {
    path: "/finance",
    element: (
      <Layout>
        <FinancePage />
      </Layout>
    ),
  },
  {
    path: "/staffs",
    element: (
      <Layout>
        <StaffPage />
      </Layout>
    ),
  },
  {
    path: "/tier",
    element: (
      <Layout>
        <TierPage />
      </Layout>
    ),
  },
  {
    path: "/policy",
    element: (
      <Layout>
        <PolicyPage />
      </Layout>
    ),
  },
]);

export default router;
