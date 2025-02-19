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
import ManageUserProfile from "@/pages/manageUserProfile/ManageUserProfile";
import ChangeUserPassword from "@/pages/changeUserPassword/ChangeUserPassword";
import AdminDashboardLayout from "@/layout/AdminDashboardLayout";
import AdminDashboard from "@/pages/adminDashboard/AdminDashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/meetingRooms',
                element: <MeetingRooms />
            },
            {
                path: '/singleRoomDetails/:id',
                element: <SingleRoomDetails />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/userProfile',
                element: <MyProfile />
            },
            {
                path: '/manageUserProfile/:email',
                element: <ManageUserProfile />
            },
            {
                path: '/changeUserPassword',
                element: <ChangeUserPassword />
            }
        ]
    },

    {
        path: '/adminDashboard',
        element: <AdminDashboardLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/adminDashboard',
                element: <AdminDashboard/>
            }
        ]
    }

])

export default router;