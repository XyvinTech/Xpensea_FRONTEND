import {  createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import Layout from "../Layout/Layout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import EventsPage from "../pages/EventsPage";
import AdminManagementPage from "../pages/subAdmin/AdminManagementPage";
import RoleManagementPage from "../pages/subAdmin/RoleManagementPage";
import AdminActivityPage from "../pages/subAdmin/AdminActivityPage";
import FinancePage from "../pages/FinancePage";
import StaffPage from "../pages/Staff/StaffPage";
import TierPage from "../pages/TierPage";
import PolicyPage from "../pages/PolicyPage";
import Text from "../pages/Text";
import MainPage from "../pages/Approval/MainPage";
import ApprovalPage from "../pages/Approval/ApprovelPage";
import StaffView from "../pages/Staff/StaffView";


import { PrivateRoute } from "./PrivateRouter";




const router = createBrowserRouter([
  {
    path: "/test",
    element: <Text/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },  {
    path: "/app",
    element: <PrivateRoute><App /></PrivateRoute> ,
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
        <MainPage />
      </Layout>
    ),
  },
  {
    path:"/approvals/view",
    element: (
      <Layout>
        <ApprovalPage />
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
  {
    path: "/staffs/:id",
    element: (
      <Layout>
        <StaffView />
      </Layout>
    ),
  },

]);

export default router;
