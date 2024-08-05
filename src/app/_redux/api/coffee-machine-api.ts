import { GetCoffeeMachineResponse } from "@/app/_types/coffee-machine-api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coffeeMachineApi = createApi({
    reducerPath: 'coffeeMachineApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://darkroastedbeans.coffeeit.nl' }),
    endpoints: (builder) => ({
        getCoffeeMachine: builder.query<GetCoffeeMachineResponse, void>({
            query: () => '/coffee-machine/60ba1ab72e35f2d9c786c610',
        })
    }),

})

export const { useGetCoffeeMachineQuery } = coffeeMachineApi