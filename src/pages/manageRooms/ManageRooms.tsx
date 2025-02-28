import ManageRoomsComponent from "@/components/admin/ManageRoomsComponent";
import { useGetAllRoomsQuery } from "@/redux/api/roomsApi/roomsApi";
import { TRoomData } from "@/types/roomsTypes";

const ManageRooms = () => {
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
            <div className="mt-4">
                <p className="text-4xl font-bold text-center mb-2">Manage Rooms</p>
                <div className="flex justify-center">
                    <div className="w-3/12 text-center rounded-md h-[5px] bg-purple-400"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6 mx-4">
                {
                    roomData?.data.map((item: TRoomData, idx: number) => <ManageRoomsComponent item={item} key={idx}></ManageRoomsComponent>)
                }
            </div>
        </div>
    )
};

export default ManageRooms;