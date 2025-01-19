import ShowMeetingRooms from "@/components/showMeetingRooms/showMeetingRooms"
import { useGetAllRoomsQuery } from "@/redux/api/roomsApi/roomsApi"

const MeetingRooms = () => {
    const { data: roomData, isLoading } = useGetAllRoomsQuery({})

    type roomDataType = {
        name: string,
        roomNo: number, 
        floorNo: number, 
        capacity: number, 
        pricePerSlot: number, 
        amenities: string[],
    }



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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
                {
                    roomData.data.map((item: roomDataType, idx: number) => <ShowMeetingRooms item={item} key={idx}></ShowMeetingRooms>)
                }
            </div>
        </div>
    )
}

export default MeetingRooms
