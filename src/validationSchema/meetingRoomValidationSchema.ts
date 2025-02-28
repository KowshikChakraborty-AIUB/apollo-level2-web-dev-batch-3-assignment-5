import { z } from 'zod';

const meetingRoomValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
        }),
        roomNo: z.number({
            required_error: 'Room No. is required',
        }).transform((val) => Number(val)),
        floorNo: z.number({
            required_error: 'Floor No. is required',
        }).transform((val) => Number(val)),
        capacity: z.number({
            required_error: 'Capacity is required',
        }).transform((val) => Number(val)),
        pricePerSlot: z.number({
            required_error: 'Price per slot is required',
        }).transform((val) => Number(val)),
        amenities: z.array(z.string({
            required_error: 'Amenities are required',
        })),
    }),
});

export default meetingRoomValidationSchema;