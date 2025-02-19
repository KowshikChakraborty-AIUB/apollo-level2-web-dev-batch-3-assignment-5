import AdminSidebar from "@/components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div>
                    <AdminSidebar />
                </div>

                {/* dashboard content */}
                <div className="md:ml-64 md:flex-1 md:h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;