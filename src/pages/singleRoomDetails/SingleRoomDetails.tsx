import { Button } from "@/components/ui/button";
import { useGetSingleRoomQuery } from "@/redux/api/roomsApi/roomsApi";
import { Link, useParams } from "react-router-dom";


const SingleRoomDetails = () => {
    const params = useParams();
    console.log(params);


    const { data: singleRoomData, isLoading } = useGetSingleRoomQuery(params?.id);


    if (isLoading) {
        return (
            <>
                <div className="flex items-center justify-center">
                    <p className="ftext-5xl font-bold">Loading...</p>
                </div>
            </>
        )
    }

    const extractedAmenitiesFromArray = singleRoomData.data.amenities.join(', ')

    return (
        <div>
            <div>
                <div className="my-4">
                    <img className="mx-auto" src="https://i.ibb.co.com/J28dwqj/Meeting-Room-Hero-Image.png" alt="" />
                </div>
                <div className="mx-24">
                    <p className="text-4xl font-bold text-center mb-10">{singleRoomData.data.name}</p>
                    <p className="text-3xl font-bold mb-4">Details</p>
                    <p className="text-xl font-bold">Floor No. {singleRoomData.data.floorNo}</p>
                    <p className="text-xl font-bold">Room No. {singleRoomData.data.roomNo}</p>
                    <p className="text-xl font-bold">Capacity: {singleRoomData.data.capacity}</p>
                    <p className="text-xl font-bold">Amenities: {extractedAmenitiesFromArray}</p>
                    <p className="text-xl font-bold">Price Per Slot: {singleRoomData.data.pricePerSlot} Tk.</p>
                </div>
                <div className="my-10 text-center">
                    <Link to={'/bookings'}>
                        <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Book Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleRoomDetails
