/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const ShowMeetingRooms: React.FC<any> = ({ item }) => {

    const { _id, name, capacity, pricePerSlot } = item

    //const extractAmenitiesFromArray = amenities.join(', ')

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
                        <Link to={`/singleRoomDetails/${_id}`}>
                            <Button className="mt-4 text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">See Details</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ShowMeetingRooms
