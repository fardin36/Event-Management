import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/HomePage/Home";
import Details from "../Pages/HomePage/Services/Details";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import Projects from "../Pages/Projects/Projects";
import Blog from "../Pages/Projects/Blog";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`/data.json`)
            },
            {
                path: '/detail/:id',
                element: <Details></Details>,
                loader: () => fetch(`/data.json`)
            },
            {
                path: '/projects',
                element: <PrivateRoutes><Projects></Projects></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
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
    }
]);

export default router;