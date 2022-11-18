import { createBrowserRouter } from "react-router-dom";
import App from './../App'
import Home from './../pages/Home'

import MoviesPage from "../pages/MoviesPage";
// import TvShows from "../pages/TvShows";
// import ContactUs from "../pages/ContactUs";
// import Movies from "../pages/Movies";

export const routes = createBrowserRouter([
    {
        element: <App />,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/movies/:id',
                element: <MoviesPage />
            }
        ]
    }
    // { path: '/contact-us', element: <ContactUs /> },
    // { path: '/tvshows', element: <TvShows /> },
    // { path: '/Movies', element: <Movies /> },
    // { path: '/movies/:id', element: <MoviesPage /> },
]) 