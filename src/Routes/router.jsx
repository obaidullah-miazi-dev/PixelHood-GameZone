import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import GameDetails from "../Components/GameDetails";

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
    }
])