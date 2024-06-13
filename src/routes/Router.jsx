
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Test from '../pages/Test';
import Dashboard from '../pages/Dashboard';
import Text from '../pages/Text';
import Layout from '../Layout/Layout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Test/>,
  },
  {
    path: '/login',
    element:<LoginPage/>,
  },
  {
    path: '/signup',
    element:<SignupPage/>,
  },
  {
    path:'/dashboard',
    element:<Layout><Dashboard/></Layout>
  },
  {
    path:'/approvals',
    element:<Layout><Text/></Layout>
  },
  {
    path: '/demo',
    element:<App/>
  }
]);

export default router;
