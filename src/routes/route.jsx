import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddService from "../pages/AddService";
import Services from "../pages/Services";
import MyReviews from "../pages/MyReviews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`${import.meta.env.VITE_URL}/featured-services`)

            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch(`${import.meta.env.VITE_URL}/services`)

            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;