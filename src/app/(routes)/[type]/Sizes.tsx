'use client'

import { LinkButton } from "../../_components/buttons/LinkButton"
import { useGetCoffeeSizes } from "../../_redux/hooks/useGetCoffeeSizes"
import { useDispatch, useSelector } from "react-redux"
import { coffeeSelector, updateSize } from "../../_redux/features/coffee"
import { useRouter } from 'next/navigation'
import { Size } from "../../_types/size"

interface SizesProps {
    params: { type: string }
}

const Sizes = ({ params }: SizesProps) => {

    const selectedCoffee = useSelector(coffeeSelector)
    const { sizes } = useGetCoffeeSizes()
    const dispatch = useDispatch()
    const router = useRouter()

    return <div className="h-full max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <div className="w-full text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <h1 className="text-3xl">Select your size</h1>
            {sizes.map((({ _id, name }: Size) => {
                return selectedCoffee.type?.sizes.includes(_id) && <LinkButton key={_id}
                    text={name}
                    onClick={() => {
                        dispatch(updateSize({ _id, name }))
                        router.push(`/${params.type}/${_id}`)
                    }}
                />
            }))}
        </div>
    </div>
}

Sizes.displayName = 'Sizes'

export default Sizes