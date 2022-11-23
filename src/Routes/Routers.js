import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout/MainLayout";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

export default routers