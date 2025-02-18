import { useGetUserByEmailIdQuery } from '@/redux/api/authApi/authApi';
import { useAppSelector } from '@/redux/hook';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const UserProfileComponent = () => {
    const userDataFromState = useAppSelector((state) => state?.auth?.user);
    const { data: currentLoggedInUser } = useGetUserByEmailIdQuery(userDataFromState?.userEmail || '');
    return (
        <div className='w-full'>
            <p className='text-3xl font-bold pl-4'>Welcome, {currentLoggedInUser?.data?.name}</p>
            <div className="bg-white shadow-2xl rounded-md">
                <ul className="menu">
                    <li>
                        <div className="mx-auto text-base font-bold  mb-4 md:mb-0">
                            <img src={currentLoggedInUser?.data?.profileImg ? currentLoggedInUser?.data?.profileImg : 'https://i.ibb.co.com/p4xjpjk/user-default.png'} alt='User Image' className='h-24 w-24 md:h-48 md:w-48 rounded-full' />
                        </div>
                    </li>
                    <li>
                        <div className="mx-auto text-xl font-bold mb-4 md:mb-0">
                            {currentLoggedInUser?.data?.name}
                        </div>
                    </li>
                    <div className='text-base font-bold flex justify-center gap-6 my-3'>
                        <p>Email: {userDataFromState?.userEmail}</p>
                        <p>Type: {userDataFromState?.role}</p>
                    </div>
                    <hr className='border-gray-500' />
                    <li>
                        <div className="text-lg mb-4 md:mb-0">
                            Email: {userDataFromState?.userEmail}
                        </div>
                    </li>
                    <li>
                        <div className="text-lg mb-4 md:mb-0">
                            Phone: {currentLoggedInUser?.data?.phone}
                        </div>
                    </li>
                    <li>
                        <div className="text-lg mb-4 md:mb-0">
                            Address: {currentLoggedInUser?.data?.address}
                        </div>
                    </li>
                </ul>
                <div className="flex gap-6 ml-5">
                    <Link to={'/'}>
                        <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Room Booking Lists</Button>
                    </Link>
                    <Link to={`/manageUserProfile/${userDataFromState?.userEmail}`}>
                        <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Update / Delete Profile</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfileComponent;