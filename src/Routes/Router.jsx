import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/error/Error";
import MainLayout from "../Layout/MainLayout";
import Allvisas from "../pages/Allvisas";
import AddVisa from "../pages/AddVisa";
import AddedVisa from "../pages/AddedVisa";
import MyVisa from "../pages/MyVisa";
import Register from "../components/Register";
import Login from "../components/Login";
import VisaDetails from "../components/VisaDetails";

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
                element: <Allvisas></Allvisas>,
                loader: () => fetch('http://localhost:4000/visa')
            },
            {
                path: "/visa/:id",
                element: <VisaDetails></VisaDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/visa/${params.id}`)
            },
            {
                path: "/addvisa",
                element: <AddVisa></AddVisa>
            },
            {
                path: "/addedvisas/:email",
                element: <AddedVisa></AddedVisa>,
                loader: ({ params }) => fetch(`http://localhost:4000/addedvisas/${params.email}`)
            },
            {
                path: "/appliedVisa/:email",
                element: <MyVisa></MyVisa>,
                loader: ({ params }) => fetch(`http://localhost:4000/appliedVisa/${params.email}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])