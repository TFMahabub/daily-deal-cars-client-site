import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Product from "../Components/Pages/ProductPage/Product";
import Register from "../Components/Pages/Register/Register";
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
  }
])

export default routers