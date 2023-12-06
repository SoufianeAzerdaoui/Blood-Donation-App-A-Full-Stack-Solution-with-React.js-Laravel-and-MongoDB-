import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayouts from './components/GuestLayouts';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Signup from './views/Signup';

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
