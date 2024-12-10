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
import Private from "../components/Private";
import { useContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

// //.log(auth?.currentUser.email);
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://visa-navigator-server-tau.vercel.app/visas')
            },
            {
                path: "/allvisas",
                element: <Allvisas></Allvisas>,
                loader: () => fetch('https://visa-navigator-server-tau.vercel.app/visa')
            },
            {
                path: "/visa/:id",
                element: <Private><VisaDetails></VisaDetails></Private>,
                loader: ({ params }) => fetch(`https://visa-navigator-server-tau.vercel.app/visa/${params.id}`)
            },
            {
                path: "/addvisa",
                element: <Private><AddVisa></AddVisa></Private>
            },
            {
                path: `/addedvisas`,
                element: <Private><AddedVisa></AddedVisa></Private>,
            },
            {
                path: `/appliedVisa`,
                element: <Private><MyVisa></MyVisa></Private>,
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