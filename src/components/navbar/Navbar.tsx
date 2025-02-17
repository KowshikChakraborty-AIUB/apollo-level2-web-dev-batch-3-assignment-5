import { Link, NavLink } from "react-router-dom"

import {
    LayoutDashboardIcon,
    LifeBuoy,
    LogOut,
    User,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import tokenVerification from "@/utils/tokenVerification"
import { toast } from "react-toastify"
import { logOut } from "@/redux/features/authSlice/authSlice"
import { useGetUserByEmailIdQuery } from "@/redux/api/authApi/authApi"

const Navbar = () => {

    const token = useAppSelector((state) => state.auth.token);
    const dispatch = useAppDispatch();

    const user = token ? tokenVerification(token) : null;

    const userDataFromState = useAppSelector((state) => state.auth.user);

    console.log(userDataFromState);
    

    const { data: userData } = useGetUserByEmailIdQuery(userDataFromState?.userEmail || '');

    const handleLogout = () => {
        dispatch(logOut());
        toast.success("User Logged Out Successfully");
    };

    const navLinks =
        <>
            <NavLink to={'/'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover:rounded"><a>Home</a></li></NavLink>
            <NavLink to={'/meetingRooms'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover:rounded"><a>Meeting Rooms</a></li></NavLink>
            <NavLink to={'/aboutUs'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover:rounded"><a>About Us</a></li></NavLink>
            <NavLink to={'/contactUs'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover:rounded"><a>Contact Us</a></li></NavLink>
        </>

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="navbar bg-purple-200 px-0 md:px-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <img className="w-10 h-10 rounded-full" src="https://i.ibb.co.com/8B3yW05/Meet-Room-Hub-Logo.jpg" alt="" />
                        <a className="ml-2 text-2xl font-bold text-purple-700">MeetRoomHub.com</a>
                    </div>
                    <div className="navbar-center ml-11 hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?

                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div>
                                                <img className={userData?.data?.profileImg ? 'cursor-pointer rounded-full w-14 h-14' : 'bg-white cursor-pointer rounded-full w-14 h-14'} src={userData?.data?.profileImg ? userData?.data?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt="User Image" />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span>My Bookings</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <LayoutDashboardIcon />
                                                    <Link to={'/kowshik'}>
                                                        <span>Dashboard</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <LifeBuoy />
                                                <span>Support</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <Link to={'/login'} onClick={handleLogout}>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <LogOut />
                                                    <span>Log out</span>
                                                </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                :

                                <div className="flex gap-6">
                                    <Link to={'/login'}>
                                        <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Login</Button>
                                    </Link>
                                    <Link to={'/signUp'} className="hidden md:block">
                                        <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Sign Up</Button>
                                    </Link>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
