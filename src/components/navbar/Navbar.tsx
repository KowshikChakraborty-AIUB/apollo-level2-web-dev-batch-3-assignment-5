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

const Navbar = () => {

    const navLinks =
        <>
            <NavLink to={'/'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover: px-3 hover: py-3 hover:rounded"><a>Home</a></li></NavLink>
            <NavLink to={'/meetingRooms'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover: px-3 hover: py-3 hover:rounded"><a>Meeting Rooms</a></li></NavLink>
            <NavLink to={'/aboutUs'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover: px-3 hover: py-3 hover:rounded"><a>About Us</a></li></NavLink>
            <NavLink to={'/contactUs'}><li className="font-bold hover:bg-purple-700 hover:text-yellow-400 hover: px-3 hover: py-3 hover:rounded"><a>Contact Us</a></li></NavLink>
        </>

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="navbar bg-purple-200 px-10">
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
                        <img className="w-10 h-10 rounded-full" src="/src/assets/404.JPG" alt="" />
                        <a className="ml-2 text-2xl font-bold text-purple-700">MeetRoomHub.com</a>
                    </div>
                    <div className="navbar-center ml-11 hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div>
                                        <img className="w-10 h-10 cursor-pointer rounded-full" src="/src/assets/404.JPG" alt="" />
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
                                    <DropdownMenuItem>
                                        <LogOut />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
