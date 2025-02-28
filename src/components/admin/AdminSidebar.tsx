import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div>
            {/* dashboard sidebar */}
            <div className="w-full md:w-64 md:h-screen bg-purple-200 md:fixed md:left-0 md:top-0 md:overflow-y-auto">
                <ul className="menu">
                    {
                        <>
                            <div className="dropdown flex items-center gap-0 md:gap-1">
                                <div>
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden text-purple-800 -ml-6">
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
                                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <Link to={'/adminDashboard'}>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/adminDashboard/adminProfile'}>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/adminDashboard'}>
                                                All Users
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/adminDashboard'}>
                                                Booking Info
                                            </Link>
                                        </li>
                                        <li>
                                            <details>
                                                <summary className="flex items-center space-x-1">
                                                    <Link to={'/adminDashboard/createMeetingRooms'}>
                                                        Rooms
                                                    </Link>
                                                </summary>
                                                <ul className="p-2">
                                                    <li><Link to={'/adminDashboard/createMeetingRooms'}>Create Rooms</Link></li>
                                                    <li><Link to={'/adminDashboard/manageMeetingRooms'}>Manage Rooms</Link></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex items-center md:items-start gap-2">
                                    <img className="w-10 h-10 rounded-full" src="https://i.ibb.co.com/8B3yW05/Meet-Room-Hub-Logo.jpg" alt="" />

                                    <p className="text-2xl font-bold text-purple-700">
                                        MeetRoomHub
                                        <br className="hidden md:block lg:block" />
                                        <span>.com</span>
                                    </p>
                                </div>
                            </div>
                            <div className="hidden lg:block md:block">
                                <li>
                                    <Link to={'/adminDashboard'}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/adminDashboard/adminProfile'}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/addPublisher'}>
                                        All Users
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/addPublisher'}>
                                        Booking Info
                                    </Link>
                                </li>

                                <ul>
                                    <li>
                                        <details>
                                            <summary className="flex items-center space-x-1">
                                                <Link to={'/adminDashboard/createMeetingRooms'}>
                                                    Rooms
                                                </Link>
                                            </summary>
                                            <ul className="p-2">
                                                <li><Link to={'/adminDashboard/createMeetingRooms'}>Create Rooms</Link></li>
                                                <li><Link to={'/adminDashboard/manageMeetingRooms'}>Manage Rooms</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;