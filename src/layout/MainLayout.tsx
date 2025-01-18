import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="max-w-full mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout
