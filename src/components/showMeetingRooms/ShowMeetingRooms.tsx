import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ShowMeetingRooms = ({ item }) => {

    const { name, roomNo, floorNo, capacity, pricePerSlot, amenities } = item

    const extractAmenitiesFromArray = amenities.join(', ')

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
                        <p className="text-justify font-bold text-base">Room No: {roomNo}</p>
                        <p className="text-justify font-bold text-base">Floor No: {floorNo}</p>
                        <p className="text-justify font-bold text-base">Capacity: {capacity}</p>
                        <p className="text-justify font-bold text-base">Amenities: {extractAmenitiesFromArray}</p>
                        <p className="text-justify font-bold text-base">Price Per Slot: {pricePerSlot} TK.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ShowMeetingRooms
