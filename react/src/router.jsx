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
import BloodtypeANegative from './components/bloodinformation/BloodtypeANegative';

import BloodtypeO from './components/bloodinformation/BloodtypeO';
import BloodtypeONegative from './components/bloodinformation/BloodtypeONegative';

import BloodtypeB from './components/bloodinformation/BloodtypeB';
import BloodtypeBNegative from './components/bloodinformation/BloodtypeBNegative';

import BloodtypeAB from './components/bloodinformation/BloodtypeAB';
import BloodtypeABNegative from './components/bloodinformation/BloodtypeABNegative';


import Requirements from './views/requirements/Requirements';





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
      },
      {
        path : '/information/typeA',
        element :<BloodtypeA/>,
      },
      {
        path : '/information/typeB',
        element :<BloodtypeB/>,
      },
      {
        path : '/information/typeAB',
        element :<BloodtypeAB/>,
      },
      {
        path : '/information/typeABnegative',
        element :<BloodtypeABNegative/>,
      },
      {
        path : '/information/BloodtypeBNegative',
        element :<BloodtypeBNegative/>,
      },
      {
        path : '/information/BloodtypeO',
        element :<BloodtypeO/>,
      },
      {
        path : '/information/BloodtypeONegative',
        element :<BloodtypeONegative/>,
      },
      {
        path : '/information/BloodtypeANegative',
        element :<BloodtypeANegative/>,
      },
      {
        path : '/information/RequirementsbyDonationtype',
        element :<Requirements/>,
      },


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




])

export default router;
