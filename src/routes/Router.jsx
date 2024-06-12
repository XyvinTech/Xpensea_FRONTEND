
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Test from '../pages/Test';
import Dashboard from '../pages/Dashboard';
import Text from '../pages/Text';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Test/>,
  },
  {
    path:'/dashboard',
    element:<Layout><Dashboard/></Layout>
  },
  {
    path:'/approvals',
    element:<Layout><Text/></Layout>
  }
]);

export default router;
