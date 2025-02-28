/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
//import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import { imgBBUploadImage } from "@/utils/imgbbUploadImage";
import meetingRoomValidationSchema from "@/validationSchema/meetingRoomValidationSchema";
import { useCreateRoomsMutation } from "@/redux/api/roomsApi/roomsApi";

const CreateRoomsComponent = () => {

    const [createRooms, { isLoading }] = useCreateRoomsMutation();
    //const location = useLocation();
    //const navigate = useNavigate();

    const form = useForm<z.infer<typeof meetingRoomValidationSchema>>({
        resolver: zodResolver(meetingRoomValidationSchema),
        defaultValues: {
            body: {
                name: "",
                roomNo: 0,
                floorNo: 0,
                capacity: 0,
                pricePerSlot: 0,
                amenities: [],
            }
        },
    })

    const onSubmit = async (values: z.infer<typeof meetingRoomValidationSchema>) => {

        // //Uploading image to imgbb
        // const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
        // const file = inputElement?.files?.[0];

        // const img = file ? await imgBBUploadImage(file) : undefined

        // //setting generated imgbb link to form value
        // values.profileImg = img

        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }

        try {
            const res: any = await createRooms(values);

            if (res?.data?.success) {
                //navigate(location?.state ? location.state : '/', { replace: true });
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
                <p className="my-3 text-4xl font-bold text-center">Create Meeting Rooms</p>
                <div className="flex justify-center">
                    <div className="w-96 text-center rounded-md h-[5px] bg-purple-400"></div>
                </div>
            </div>
            <div className="lg:w-4/5 my-10 mx-4 lg:mx-auto bg-purple-200 px-6 py-6 rounded-md">
                <div className="mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="body.name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Room Name" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Room Name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body.roomNo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Room No.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Room Number" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter The Number of Room.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body.floorNo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Floor No.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Floor Number" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter The Floor Number of The Room.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body.capacity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Capacity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Number of Capacity" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter Maximum Capacity for The Room.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="profileImg"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Profile Picture (Optional)</FormLabel>
                                        <FormControl>
                                            <Input type="file" placeholder="Your Profile Image" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Upload Your Profile Image.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <FormField
                                control={form.control}
                                name="body.pricePerSlot"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price Per Slot</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Price" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter Price for Each Slots for The Room.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="body.amenities"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amenities</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Amenities" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter Available Amenities for The Room.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Create Room</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CreateRoomsComponent;