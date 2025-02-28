import { baseApi } from "../baseApi";

const roomsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllRooms
        getAllRooms: builder.query({
            query: () => {
                return {
                    url: "/api/rooms",
                    method: "GET",
                };
            },
            providesTags: ["rooms"],
        }),

        // getSingleRoom
        getSingleRoom: builder.query({
            query: (id) => {
                return {
                    url: `/api/rooms/${id}`,
                    method: "GET",
                };
            },
            providesTags: ["rooms"],
        }),

        //create meeting rooms
        createRooms: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/rooms",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["rooms"],
        }),
    }),
});

export const {
    useGetAllRoomsQuery,
    useGetSingleRoomQuery,
    useCreateRoomsMutation,
} = roomsApi;