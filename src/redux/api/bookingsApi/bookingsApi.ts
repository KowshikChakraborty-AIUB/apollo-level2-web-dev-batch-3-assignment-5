import { baseApi } from "../baseApi";

const bookingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/bookings",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["bookings"],
        }),
    }),
});

export const {
    useCreateBookingMutation,
} = bookingsApi;