import App from "@/App";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import MeetingRooms from "@/pages/meetingRooms/MeetingRooms";
import AboutUs from "@/pages/aboutUs/AboutUs";
import ContactUs from "@/pages/contactUs/ContactUs";
import SingleRoomDetails from "@/pages/singleRoomDetails/SingleRoomDetails";
import Login from "@/pages/login/Login";
import SignUp from "@/pages/signUp/SignUp";
import MyProfile from "@/pages/myProfile/MyProfile";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/meetingRooms',
            element: <MeetingRooms/>
        },
        {
            path: '/singleRoomDetails/:id',
            element: <SingleRoomDetails/>
        },
        {
            path: '/aboutUs',
            element: <AboutUs/>
        },
        {
            path: '/contactUs',
            element: <ContactUs/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signUp',
            element: <SignUp/>
        },
        {
            path: '/userProfile',
            element: <MyProfile/>
        }
    ]
}])

export default router;