/* eslint-disable @typescript-eslint/no-explicit-any */
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

        //update meeting room
        updateMeetingRoomById: builder.mutation<void, { roomId: string, data: any }>({
            query: ({ roomId, data }) => {
                return {
                    url: `/api/rooms/${roomId}`,
                    method: "PUT",
                    body: data
                };
            },
            invalidatesTags: ["rooms"],
        }),

        //delete meeting room
        deleteMeetingRoom: builder.mutation({
            query: (roomId: string) => {
                return {
                    url: `/api/rooms/${roomId}`,
                    method: "DELETE",
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
    useUpdateMeetingRoomByIdMutation,
    useDeleteMeetingRoomMutation
} = roomsApi;