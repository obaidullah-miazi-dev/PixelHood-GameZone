import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import GameDetails from "../Components/GameDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Components/MyProfile";
import UpdateProfilePage from "../Pages/UpdateProfilePage";
import PrivateRoute from "../Provider/PrivateRoute";
import ResetPassword from "../Pages/ResetPassword";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/game-details/:id',
                element: <PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            }

        ]
    },
    {
        path: '/auth',
        errorElement: <ErrorPage></ErrorPage>,
        Component: AuthLayout,
        children:[
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
            {
                path: '/auth/myProfile',
                Component: MyProfile
            },
            {
                path: '/auth/updateProfile',
                Component: UpdateProfilePage
            },
            {
                path: '/auth/resetPassword',
                Component:ResetPassword
            }
        ]
    },
    {
        path:'/game-details/:id',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute>
            <GameDetails></GameDetails>
        </PrivateRoute>
    }
])