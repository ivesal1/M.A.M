import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

export const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/movies/:id', element: <Movies /> },
]) 