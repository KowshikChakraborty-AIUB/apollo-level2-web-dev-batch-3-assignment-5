import { z } from 'zod';

const updateMeetingRoomValidationSchema = z.object({
    body: z.object({
        name: z.string()
            .min(1, 'Room name is required')
            .max(50, 'Room name should not be longer than 50 characters'),
        roomNo: z.string()
            .min(1, 'Room No. is required')
            .regex(/^[0-9]+$/, 'Must be number type')
            .transform((val) => Number(val)),
        floorNo: z.string()
            .min(1, 'Floor No. is required')
            .regex(/^[0-9]+$/, 'Must be number type')
            .transform((val) => Number(val)),
        capacity: z.string()
            .min(1, 'Capacity is required')
            .regex(/^[0-9]+$/, 'Must be number type')
            .transform((val) => Number(val)),
        pricePerSlot: z.string()
            .min(1, 'Price Per Slot is required')
            .regex(/^[0-9]+$/, 'Must be number type')
            .transform((val) => Number(val)),
        amenities: z.string()
            .min(1, 'Amenities are required')
            .transform((val) => val.split(',').map(item => item.trim())),
    }),
});

export default updateMeetingRoomValidationSchema;
