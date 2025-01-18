const Footer = () => {
    return (
        <div>
            <footer className="footer bg-purple-200 text-base-content p-10">
                <aside>
                    <div className="flex gap-2">
                        <img className="w-10 h-10 rounded-full" src="/src/assets/404.JPG" alt="" />
                        <p className="text-2xl font-bold text-purple-700">
                            MeetRoomHub.com
                        </p>
                    </div>
                    <p className="text-base text-purple-700 font-bold">Providing room booking service since 2024</p>
                </aside>
                <nav>
                    <h6 className="text-xl font-bold uppercase">Pages</h6>
                    <a className="cursor-pointer font-bold hover:rounded hover:px-1 hover:py-2 hover:bg-purple-700 hover:text-yellow-400">Home</a>
                    <a className="cursor-pointer font-bold hover:rounded hover:px-1 hover:py-2 hover:bg-purple-700 hover:text-yellow-400">Meeting Rooms</a>
                    <a className="cursor-pointer font-bold hover:rounded hover:px-1 hover:py-2 hover:bg-purple-700 hover:text-yellow-400">About Us</a>
                    <a className="cursor-pointer font-bold hover:rounded hover:px-1 hover:py-2 hover:bg-purple-700 hover:text-yellow-400">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold uppercase">Social Media</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">YouTube</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold uppercase">Contact Info</h6>
                    <a className="link link-hover">Address: Dhaka, Bangladesh</a>
                    <a className="link link-hover">Mobile: 017xxxxxxxx</a>
                    <a className="link link-hover">Email: abc@gmail.coom</a>
                </nav>
            </footer>
            <div className="text-center bg-purple-200 pb-6 font-bold">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MeetRoomHub.com</p>
                </aside>
            </div>
        </div>
    )
}

export default Footer
