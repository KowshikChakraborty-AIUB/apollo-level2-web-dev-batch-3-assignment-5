import { useGetAllRoomsQuery } from "@/redux/api/roomsApi/roomsApi"
import ShowMeetingRooms from "../showMeetingRooms/ShowMeetingRooms"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { TRoomData } from "@/types/roomsTypes"

const FeaturedRooms = () => {
    const { data: roomData, isLoading } = useGetAllRoomsQuery({})

    if (isLoading) {
        return (
            <>
                <div className="flex items-center justify-center">
                    <p className="ftext-5xl font-bold">Loading...</p>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="mb-4">
                <p className="text-4xl font-bold text-center mb-2">Our Featured Rooms</p>
                <div className="flex justify-center">
                    <div className="w-3/12 text-center rounded-md h-[5px] bg-purple-400"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    roomData.data.slice(0, 4).map((item: TRoomData, idx: number) => <ShowMeetingRooms item={item} key={idx}></ShowMeetingRooms>)
                }
            </div>
            <div className="text-center my-4">
                <Link to={'/meetingRooms'}>
                    <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">See More</Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedRooms
