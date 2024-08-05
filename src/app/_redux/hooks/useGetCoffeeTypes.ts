'use client'

import { useMemo } from "react"
import { useGetCoffeeMachineQuery } from "../api/coffee-machine-api"

export const useGetCoffeeTypes = () => {
    const { data, isLoading, isFetching } = useGetCoffeeMachineQuery()
    const types = useMemo(() => {
        if (!data?.types) { return [] }
        return [...data.types]?.sort((a, b) => a.name.localeCompare(b.name))
    }, [data?.types])
    return { types, isLoading: isLoading || isFetching }
}