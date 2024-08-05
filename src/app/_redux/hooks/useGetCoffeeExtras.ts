'use client'

import { useGetCoffeeMachineQuery } from "../api/coffee-machine-api"

export const useGetCoffeeExtras = ()=>{
    const { data, isLoading, isFetching } = useGetCoffeeMachineQuery()
    
    const extras = data?.extras || []

    return { extras, isLoading: isLoading || isFetching }
}