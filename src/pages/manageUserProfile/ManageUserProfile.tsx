import ManageUserProfileComponent from "@/components/user/ManageUserProfileComponent";
import { useParams } from "react-router-dom";


const ManageUserProfile = () => {
    const params = useParams();

    return (
        <div>
            <ManageUserProfileComponent params={params.email} />
        </div>
    );
};

export default ManageUserProfile;