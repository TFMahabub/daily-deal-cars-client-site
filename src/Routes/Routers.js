import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import Admin from "../Components/Pages/Dashboard/Admin/Admin";
import AddAProduct from "../Components/Pages/Dashboard/RightSide.js/Pages/AddAProduct/AddAProduct";
import AllBuyers from "../Components/Pages/Dashboard/RightSide.js/Pages/AllBuyers/AllBuyers";
import AllSellers from "../Components/Pages/Dashboard/RightSide.js/Pages/AllSeller/AllSellers";
import MyBuyers from "../Components/Pages/Dashboard/RightSide.js/Pages/MyBuyers/MyBuyers";
import MyOrders from "../Components/Pages/Dashboard/RightSide.js/Pages/MyOrders/MyOrders";
import MyProducts from "../Components/Pages/Dashboard/RightSide.js/Pages/MyProducts/MyProducts";
import WellCome from "../Components/Pages/Dashboard/RightSide.js/Pages/WellCome/WellCome";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Product from "../Components/Pages/ProductPage/Product";
import Register from "../Components/Pages/Register/Register";
import ErrorPage from "../Components/Sheared-Components/ErrorPage/ErrorPage";
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
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/payment',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
      
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Admin></Admin>,
        children: [
          {
            path: '/dashboard/',
            element: <WellCome></WellCome>
          },
          {
            path: '/dashboard/my_orders',
            element: <MyOrders></MyOrders>
          },
          {
            path: '/dashboard/add_a_product',
            element: <AddAProduct></AddAProduct>
          },
          {
            path: '/dashboard/my_products',
            element: <MyProducts></MyProducts>
          },
          {
            path: '/dashboard/all_sellers',
            element: <AllSellers></AllSellers>
          },
          {
            path: '/dashboard/all_buyers',
            element: <AllBuyers> </AllBuyers>
          },
        ]
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
])

export default routers