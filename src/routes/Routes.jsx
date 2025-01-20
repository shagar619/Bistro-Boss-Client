import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OrderFood from "../Pages/OrderFood";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Cart from "../Dashboard_pages/Cart";
import AllUsers from "../Dashboard_pages/AllUsers";
import AddItem from "../Dashboard_pages/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Dashboard_pages/ManageItems";
import UpdateItem from "../Dashboard_pages/UpdateItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>ERROR PAGE</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "menu",
                element: <Menu></Menu>
            },

            {
                path: "order/:category",
                element: <OrderFood></OrderFood>
            },

            {
                path: "login",
                element: <Login></Login>
            },

            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // normal user routes
            {
                path: "cart",
                element: <Cart></Cart>
            },

            // Admin Routes
            {
                path: "addItems",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },

            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

            {
                path: "manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },

            
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },

        ]
    }


    ]);


export default router;