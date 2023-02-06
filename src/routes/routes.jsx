import { createBrowserRouter } from "react-router-dom";
import App from './../App'
import Home from './../pages/Home'

import MoviesPage from "../pages/MoviesPage";
import Person from "../pages/Person";
import TvShowsPage from "../pages/TvShowsPage";
import Profile from "../pages/Profile";
// import TvShows from "../pages/TvShows";
// import ContactUs from "../pages/ContactUs";
import Movies from "../pages/Movies";

export const routes = createBrowserRouter([
    {
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/movies/:id',
                element: <MoviesPage />
            },
            {
                path: '/person/:id',
                element: <Person />
            },
            {
                path: '/tv/:id',
                element: <TvShowsPage />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/movies',
                element: <Movies />
            }
        ]
    }
    // { path: '/contact-us', element: <ContactUs /> },
    // { path: '/tvshows', element: <TvShows /> },
    // { path: '/Movies', element: <Movies /> },
    // { path: '/movies/:id', element: <MoviesPage /> },
]) 