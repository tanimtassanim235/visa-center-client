import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/error/Error";
import MainLayout from "../Layout/MainLayout";
import Allvisas from "../pages/Allvisas";
import AddVisa from "../pages/AddVisa";
import AddedVisa from "../pages/AddedVisa";
import MyVisa from "../pages/MyVisa";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allvisas",
                element: <Allvisas></Allvisas>
            },
            {
                path: "/addvisa",
                element: <AddVisa></AddVisa>
            },
            {
                path: "/addedvisas",
                element: <AddedVisa></AddedVisa>
            },
            {
                path: "/my-visa",
                element: <MyVisa></MyVisa>
            }
        ]
    }
])