/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDeleteMeetingRoomMutation } from "@/redux/api/roomsApi/roomsApi"

const ManageRoomsComponent: React.FC<any> = ({ item }) => {

    const { _id, name, capacity, pricePerSlot } = item

    //const extractAmenitiesFromArray = amenities.join(', ')

    const [deleteMeetingRoom, { isLoading }] = useDeleteMeetingRoomMutation();

    const location = useLocation();
    const navigate = useNavigate();

    const handleDeleteRoom = async (roomId: any) => {
        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }
        console.log(roomId);

        try {

            const res: any = await deleteMeetingRoom(roomId);


            if (res?.data?.success) {
                navigate(location?.state ? location.state : '/adminDashboard/manageMeetingRooms', { replace: true });
                toast.success(res?.data?.message);
            }
            if (res?.error) {
                toast.error(res?.error?.message || res?.error?.data?.message || res?.data?.message);
            }
        } catch (error: any) {
            toast.error(error?.message);
        }
    }

    return (
        <div>
            <div>
                <Card className="bg-purple-300">
                    <CardHeader>
                        <div>
                            <img className="w-96 mx-auto rounded-md mb-5" src="https://i.ibb.co.com/J28dwqj/Meeting-Room-Hero-Image.png" alt="" />
                            <CardTitle className="text-center">{name}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-justify font-bold text-base">Capacity: {capacity}</p>
                        <p className="text-justify font-bold text-base">Price Per Slot: {pricePerSlot} TK.</p>
                        <div className="flex gap-6">
                            <Link to={`/adminDashboard/updateMeetingRoom/${_id}`}>
                                <Button className="mt-4 text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Update</Button>
                            </Link>
                            <Button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => (document?.getElementById(`my_modal_${_id}`) as HTMLDialogElement).showModal()}>Delete</Button>
                            <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Are you sure want to delete this room?</h3>
                                    <p className="py-4">Press ESC key or click the <b>cencel</b> button below to cencel</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <Button onClick={() => handleDeleteRoom(_id)} className="text-center bg-red-500 text-white hover:bg-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mr-4">Delete</Button>
                                            <button className="btn ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Cencel</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ManageRoomsComponent