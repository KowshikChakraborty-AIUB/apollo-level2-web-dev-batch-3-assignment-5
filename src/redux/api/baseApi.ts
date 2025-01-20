import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { RootState } from "../store";

const baseApiQuery = fetchBaseQuery({
    baseUrl: "https://apollo-level2-web-dev-batch-3-assignment-3-github.vercel.app/",

    credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //     const token = (getState() as RootState).auth;

    //     if (token) {
    //         headers.set(`authorization`, `Berrer ${token}`);
    //     }
    //     return headers;
    // },
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseApiQuery,
    tagTypes: ["bookings", "rooms", "slots", "users"],
    endpoints: () => ({}),
});