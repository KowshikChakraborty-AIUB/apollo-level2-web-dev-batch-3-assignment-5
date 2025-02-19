/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        logIn: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/auth/login",
                    method: "POST",
                    body: data,
                };
            },
        }),

        signUp: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/auth/signup",
                    method: "POST",
                    body: data,
                };
            },
        }),

        // getAllUser: builder.query({
        //     query: (args: { search?: string; sort: string }) => {
        //         const params = new URLSearchParams();
        //         if (args?.search) {
        //             params.append("search", args.search);
        //         }
        //         if (args?.sort) {
        //             params.append("sort", args.sort);
        //         }
        //         return {
        //             url: "/users",
        //             method: "GET",
        //             params,
        //         };
        //     },
        //     providesTags: ["users"],
        // }),
        // getOneUser: builder.query({
        //     query: (email) => {
        //         const params = new URLSearchParams();
        //         if (email) {
        //             params.append("email", email);
        //         }
        //         return {
        //             url: `/auth/users`,
        //             method: "GET",
        //             params,
        //         };
        //     },
        //     providesTags: ["users"],
        // }),

        getUserByEmailId: builder.query({
            query: (email: string) => {
                return {
                    url: `api/auth/userInfoByEmail/${email}`,
                    method: "GET",
                };
            },
            providesTags: ["users"],
        }),
        updateUserByEmailId: builder.mutation<void, { emailId: string, data: any }>({
            query: ({ emailId, data }) => {
                return {
                    url: `/api/auth/updateUserProfile/${emailId}`,
                    method: "PUT",
                    body: data
                };
            },
            invalidatesTags: ["users"],
        }),
        changeUserPassword: builder.mutation({
            query: (data) => {
                return {
                    url: "/api/auth/changeUserPassword",
                    method: "POST",
                    body: data,
                };
            },
        }),
        deleteUser: builder.mutation({
            query: (id: string) => {
                return {
                    url: `/api/auth/deleteUser/${id}`,
                    method: "PUT",
                };
            },
            invalidatesTags: ["users"],
        }),
    }),
});

export const {
    useLogInMutation,
    useSignUpMutation,
    useGetUserByEmailIdQuery,
    useUpdateUserByEmailIdMutation,
    useChangeUserPasswordMutation,
    useDeleteUserMutation
} = authApi;