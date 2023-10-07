import { Outlet, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            <h1>This is home Header</h1>
            <Outlet></Outlet>
            <h1>This is Footer</h1>
        </div>,
        errorElement: <h1>404 page not found</h1>,
        children: [
            {
                path: '/',
                element: <h1>This is home page</h1>
            },
            {
                path: '/detail/:id',
                element: <h1>This is details page</h1>
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
                element: <h1>This is login page</h1>
            },
            {
                path: '/register',
                element: <h1>This is register page</h1>
            }
        ]
    }
]);

export default router;