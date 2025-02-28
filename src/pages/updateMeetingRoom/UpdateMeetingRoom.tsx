import UpdateMeetingRoomComponent from "@/components/admin/UpdateMeetingRoomComponent";
import { useParams } from "react-router-dom";

const UpdateMeetingRoom = () => {
    const params = useParams();
    return (
        <div>
            <UpdateMeetingRoomComponent params={params.id} />
        </div>
    );
};

export default UpdateMeetingRoom;