import { createBrowserRouter, Navigate , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayouts from './components/GuestLayouts';
import Dashboard from './views/Dashboard';
import DonateBlood from './views/DonateBlood';
import Login from './views/Login';
import Signup from './views/Signup';
import HealthCheckForm from './views/HealthCheckForm';
import ConfirmationDonation from './views/ConfirmationDonation';
import Donations from './views/Donations';
import BloodtypeA from './components/bloodinformation/BloodtypeA';
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
        path : '/healthcheck',
        element : <HealthCheckForm/>,

      },
      {
        path:'/donateblood',
        element : <DonateBlood />
      },
      {
        path:'/confirmationdonation',
        element : <ConfirmationDonation />
      },
      {
        path:'/donations',
        element : <Donations />
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
  },
  {
    path : '/information/typeA',
    element :<BloodtypeA/>,
  }



])

export default router;
