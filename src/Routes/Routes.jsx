import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/HomePage/Home";
import Details from "../Pages/HomePage/Services/Details";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <h1>404 page not found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detail/:id',
                element: <Details></Details>
            },
            {
                path: '/projects',
                element: <h1>This is projects page</h1>
            },
            {
                path: '/blog',
                element: <h1>This is blog page</h1>
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