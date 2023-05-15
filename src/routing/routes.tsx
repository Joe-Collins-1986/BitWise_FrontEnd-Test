import {createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {path: '', element: <HomePage /> },
            {path: 'login/', element: <LoginPage /> },
            {path: 'signup/', element: <SignUpPage /> },
        ]
    }
])

export default router;
