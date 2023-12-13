import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayouts from './components/GuestLayouts';
import Dashboard from './views/Dashboard';
import DonateBlood from './views/DonateBlood';
import Login from './views/Login';
import Signup from './views/Signup';
import HealthCheckForm from './views/HealthCheckForm';

const router = createBrowserRouter([

  {

    path: '/',
    element : <DefaultLayout /> ,
    children : [
      {
        path : '/dashboard',
        element : <Navigate to="/" />
      },
      {
        path : '/',
        element : <Dashboard />
      },
      {
        path:'/donateblood',
        element : <DonateBlood />
      },
      {
        path:'/healthCheckform',
        element : <HealthCheckForm />
      },
      {
        path:'/donateblood',
        element : <DonateBlood />
      }
    ],
  },
  {
    path : '/',
    element : <GuestLayouts />,
    children : [
      {
        path : '/login',
        element : <Login />
      },
      {
        path : '/signup',
        element : <Signup />
      },
    ]
  }
])


export default router;
