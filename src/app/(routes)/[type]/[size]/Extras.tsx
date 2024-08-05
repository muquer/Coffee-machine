'use client'

import { LinkButton } from "@/app/_components/buttons/LinkButton"
import { useGetCoffeeExtras } from "@/app/_redux/hooks/useGetCoffeeExtras"
import { Extra, ExtraSubselection } from "@/app/_types/extra"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { SubselectionButton } from "@/app/_components/buttons/SubselectionButton"
import { coffeeSelector, updateExtra, updateSubselection } from "@/app/_redux/features/coffee"
import { useDispatch, useSelector } from "react-redux"

interface ExtrasProps {
    params: { type: string, size: string }
}

const Extras = ({ params }: ExtrasProps) => {
    const dispatch = useDispatch()
    const { extras } = useGetCoffeeExtras()
    const router = useRouter()
    const selectedCoffee = useSelector(coffeeSelector)

    const navigateToOverview = useCallback((sub: ExtraSubselection) => {
        if (selectedCoffee.extra) {
            dispatch(updateSubselection({ _id: sub._id, name: sub.name }))
            router.push(`/${params.type}/${params.size}/${selectedCoffee.extra._id}/${sub._id}`)
        }
    }, [params, dispatch, router, selectedCoffee.extra])

    const setSelectedExtra = useCallback((_id: string, name: string, subselections: ExtraSubselection[]) => {
        dispatch(updateExtra({ _id, name, subselections }))
    }, [dispatch])

    return <div className="h-full max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <div className="w-full text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <h1 className="text-3xl">Select your extra's</h1>
            {extras?.map((({ _id, name, subselections }: Extra) => {
                return (selectedCoffee.type?.extras.includes(_id) &&
                    <LinkButton key={_id} text={name}
                        onClick={() => setSelectedExtra(_id, name, subselections)}>
                        {_id === selectedCoffee.extra?._id &&
                            subselections.map((sub) => <SubselectionButton key={sub._id}
                                text={sub.name}
                                onClick={() => navigateToOverview(sub)}
                            />)
                        }
                    </LinkButton>)
            }))}
        </div>
    </div>
}

Extras.displayName = 'Extras'

export default Extras