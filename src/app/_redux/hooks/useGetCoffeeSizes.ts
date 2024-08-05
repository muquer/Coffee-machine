'use client'

import { useGetCoffeeMachineQuery } from "../api/coffee-machine-api"

export const useGetCoffeeSizes = () => {
    const { data, isLoading, isFetching } = useGetCoffeeMachineQuery()
    
    const sizes = data?.sizes || []

    return { sizes, isLoading: isLoading || isFetching }

}