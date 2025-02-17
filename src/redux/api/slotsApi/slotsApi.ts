import { baseApi } from "../baseApi";

const slotsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAvailableSlots: builder.query({
            query: () => {
                return {
                    url: "/api/slots/availability",
                    method: "GET",
                };
            },
            providesTags: ["slots"],
        }),
    }),
});

export const {
    useGetAvailableSlotsQuery,
} = slotsApi;