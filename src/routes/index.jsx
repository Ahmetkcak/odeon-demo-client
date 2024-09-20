import Layout from "@/components/pagesComponents/Layout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home /></Layout>
    },
    {
        path: '/auth/register',
        element: <Layout><Register /></Layout>
    },
    {
        path: '/auth/login',
        element: <Layout><Login /></Layout>
    },
    {
        path: '*',
        element: <Layout><NotFound /></Layout>
    }
])

export default routes;