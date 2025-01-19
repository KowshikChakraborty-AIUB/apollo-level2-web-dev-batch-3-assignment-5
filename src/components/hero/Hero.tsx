import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const Hero = () => {
    return (
        <div>
            <div className="hero bg-purple-200 my-10 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img
                            src="https://i.ibb.co.com/J28dwqj/Meeting-Room-Hero-Image.png"
                            className="max-w-sm md:max-w-md rounded-lg shadow-2xl animate-slide-in-right" />
                    </div>
                    <div>
                        <div className="animate-slide-in-left">
                            <h1 className="text-5xl text-purple-700 font-bold">Book Your Ideal Meeting Room with Ease</h1>
                            <p className="text-purple-700 py-6">
                                Efficient, hassle-free room booking for all your meeting needs.
                            </p>
                        </div>
                        <div className="animate-slide-in-left">
                            <Link to={'/meetingRooms'}>
                                <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Book Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
