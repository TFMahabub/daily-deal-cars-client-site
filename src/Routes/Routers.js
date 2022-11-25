import { createBrowserRouter } from "react-router-dom";
import Admin from "../Components/Pages/Dashboard/Admin/Admin";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Product from "../Components/Pages/ProductPage/Product";
import Register from "../Components/Pages/Register/Register";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/categories/:id',
        element: <PrivateRoute><Product></Product></PrivateRoute>
      },
      
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard',
        element: <Admin></Admin>
      }
    ]
  },
])

export default routers