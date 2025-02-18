/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useGetSingleRoomQuery } from "@/redux/api/roomsApi/roomsApi";
import { useGetAvailableSlotsQuery } from "@/redux/api/slotsApi/slotsApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useAppSelector } from "@/redux/hook";
import { useGetUserByEmailIdQuery } from "@/redux/api/authApi/authApi";
import { useCreateBookingMutation } from "@/redux/api/bookingsApi/bookingsApi";
import { toast } from "react-toastify";

const SingleRoomDetails = () => {
    const userEmailFromState = useAppSelector((state) => state.auth.user?.userEmail);
    const { data: userData } = useGetUserByEmailIdQuery(userEmailFromState as string);

    const [createBooking] = useCreateBookingMutation();

    const params = useParams();
    //console.log(params);

    const { data: singleRoomData, isLoading } = useGetSingleRoomQuery(params?.id);

    const { data: slotsData } = useGetAvailableSlotsQuery({});

    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [availableTimes, setAvailableTimes] = useState<any[]>([]);
    const [selectedTimeSlotsId, setSelectedTimeSlotsId] = useState<any[]>([]);

    const filteredSlotsTimeToShowUser = slotsData?.data?.filter((slot: any) => selectedTimeSlotsId.includes(slot._id));
    const slotsTimeToShowUser = filteredSlotsTimeToShowUser?.map((slot: any) => `${slot.startTime} - ${slot.endTime}`).join(", ");

    //console.log(selectedDate);
    //console.log(selectedTimeSlotsId);



    // Extract available dates from slots
    // const availableDates = new Set(
    //     slotsData?.data?.filter((slot: any) => !slot.isBooked).map((slot: any) => slot.date)
    // );

    // Extract available dates from slots
    const availableDates = Array.from(
        new Set(slotsData?.data?.filter((slot: any) => slot?.room?._id == params?.id && !slot.isBooked).map((slot: any) => slot.date))
    ).map(date => new Date(date as string));

    // Automatically select the first available date when slots change
    useEffect(() => {
        if (availableDates.length > 0 && !selectedDate) {
            setSelectedDate(availableDates[0]);
        }
    }, [availableDates, selectedDate, slotsData?.data]);

    // Update available time slots when a date is selected
    useEffect(() => {
        if (selectedDate) {
            const times = slotsData?.data?.
                filter(
                    (slot: any) =>
                        new Date(slot.date).toDateString() === selectedDate.toDateString()
                        &&
                        slot?.room?._id === params?.id &&
                        !slot.isBooked
                )
            //.map((slot: any) => `${slot.startTime} - ${slot.endTime}`);
            setAvailableTimes(times);
        } else {
            setAvailableTimes([]);
        }
    }, [selectedDate, slotsData?.data, params?.id]);

    // Toggle slot selection (multiple selection)
    const toggleTimeSlotSelection = (time: any) => {
        setSelectedTimeSlotsId((prevSelected: any) =>
            prevSelected?.includes(time?._id)
                ? prevSelected.filter((id: any) => id !== time?._id) // Remove if already selected
                : [...prevSelected, time?._id] // Add if not selected
        );
    };


    if (isLoading) {
        return (
            <>
                <div className="flex items-center justify-center">
                    <p className="ftext-5xl font-bold">Loading...</p>
                </div>
            </>
        )
    }

    const extractedAmenitiesFromArray = singleRoomData.data.amenities.join(', ')

    const handleRoomBookings = async (selectedDate: any, selectedTimeSlotsId: any) => {

        try {

            const payload = {
                date: selectedDate ? selectedDate.toLocaleDateString("en-CA") : "", // en-CA is yyyy-mm-dd format.
                slots: selectedTimeSlotsId?.length ? selectedTimeSlotsId : toast.error('Please select at least one time slot'),
                room: params?.id,
                user: userData?.data?._id,
            }

            //console.log(payload);

            const res: any = await createBooking(payload);


            if (res?.data?.success) {
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
                <div className="my-4">
                    <img className="mx-auto" src="https://i.ibb.co.com/J28dwqj/Meeting-Room-Hero-Image.png" alt="" />
                </div>
                <div>
                    <p className="text-4xl font-bold text-center mb-10">{singleRoomData.data.name}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="grid grid-cols-2 w-full lg:w-2/5 md:w-4/5 lg:ml-6 gap-4">
                        <div className="border pl-3">
                            <p className="text-xl md:font-bold">Floor No. {singleRoomData.data.floorNo}</p>
                        </div>
                        <div className="border pl-3">
                            <p className="text-xl md:font-bold">Room No. {singleRoomData.data.roomNo}</p>
                        </div>
                        <div className="border pl-3">
                            <p className="text-xl md:font-bold">Capacity: {singleRoomData.data.capacity}</p>
                        </div>
                        <div className="border pl-3">
                            <p className="text-xl md:font-bold">Price Per Slot: {singleRoomData.data.pricePerSlot} Tk.</p>
                        </div>
                        <div className="pl-3 mt-6 w-96 md:w-[300px] lg:w-[500px]">
                            <p className="text-xl w-96 md:w-[300px] lg:w-[500px] md:font-bold rounded-md">Amenities: {extractedAmenitiesFromArray}</p>
                            <div className="hidden md:block mt-20">
                                <p className="text-base font-bold">Selected Date: <span className="text-purple-700">{selectedDate?.toDateString()}</span></p>
                                <p className="text-base font-bold">Selected Slots: <span className="text-purple-700">{slotsTimeToShowUser}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-full lg:w-1/2">
                        <p className="text-center text-2xl font-bold mb-3">Available Slots</p>
                        <p className="text-center font-bold mb-10">(select date and available slots to book this room)</p>

                        <div>
                            <div className="flex flex-col items-center gap-4">
                                {/* DayPicker to show available dates */}
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    modifiers={{ available: (date) => availableDates.some(d => d.toDateString() === date.toDateString()) }}
                                    modifiersClassNames={{ available: "bg-purple-300 rounded-full" }}
                                />

                                {/* Display Available Time Slots */}
                                {selectedDate && (
                                    <div>
                                        <h3 className="mb-3">Available Time Slots on <span className="font-bold">{selectedDate.toDateString()}:</span></h3>
                                        {availableTimes.length > 0 ? (
                                            <ul>
                                                {availableTimes.map((time, index) => (
                                                    <li key={index} className="p-2 bg-gray-200 rounded-md m-1 cursor-pointer" onClick={() => toggleTimeSlotSelection(time)}>
                                                        {time.startTime} - {time.endTime}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No available slots</p>
                                        )}
                                    </div>
                                )}
                                <div className="block md:hidden mt-7">
                                    <p className="text-base font-bold">Selected Date: <span className="text-purple-700">{selectedDate?.toDateString()}</span></p>
                                    <p className="text-base font-bold">Selected Slots: <span className="text-purple-700">{slotsTimeToShowUser}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10 text-center">
                    <Button onClick={() => handleRoomBookings(selectedDate, selectedTimeSlotsId)} className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Book Now</Button>
                </div>
            </div>
        </div>
    )
}

export default SingleRoomDetails
