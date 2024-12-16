// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/employee' }),
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => `/`,
    }),
    addEmploye: builder.mutation({
      query: (emp) => ({
        url: ``,
        method: 'POST',
        body: emp,
      }),
    })
  }),
});

export const { useGetEmployeeQuery, useAddEmployeMutation} = employeeApi;