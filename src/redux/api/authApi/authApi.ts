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
    }),
});

export const {
    useLogInMutation,
    useSignUpMutation,
} = authApi;