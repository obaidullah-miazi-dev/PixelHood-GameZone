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

export const router = createBrowserRouter([
    {
        path: '/',
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
                Component: GameDetails
            }

        ]
    },
    {
        path: '/auth',
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
            }
        ]
    }
])