'use client'

import { coffeeSelector } from "@/app/_redux/features/coffee"
import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { BorderlessLinkButton } from "@/app/_components/buttons/BorderlessLinkButton"
import { SubselectionButton } from "@/app/_components/buttons/SubselectionButton"
import { LinkButton } from "@/app/_components/buttons/LinkButton"
import { Watch } from 'react-loader-spinner'

const Overview = () => {
    const router = useRouter()
    const { type, size, extra, subselection } = useSelector(coffeeSelector)
    const [isLoading, setIsLoading] = useState(false)

    const goToType = useCallback(() => {
        router.push(`/`)
    }, [router])

    const goToSize = useCallback(() => {
        router.push(`/${type}`)
    }, [type, router])

    const goToExtra = useCallback(() => {
        router.push(`/${type}/${size}`)
    }, [type, size, router])

    const submitOrder = useCallback(async () => {
        setIsLoading(true)
        await new Promise((resolve) => {
            setTimeout(() => resolve(''), 2000)
        })
        goToType()
    }, [goToType])

    if (!type || !size || !extra || !subselection) return null

    return <div className="h-full max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">

        <><div className="w-full text-sm font-medium text-gray-900 bg-white">
            <h1 className="text-3xl">Overview</h1>
            {isLoading ? <div className="flex justify-center items-center">
                <Watch
                    visible={true}
                    height="200"
                    width="200"
                    radius="48"
                    color="#aed7a0"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
                : <div className='border rounded-lg bg-mossGreen-300'>
                    <BorderlessLinkButton text={type.name}
                        onClick={goToType}
                        edit />
                    <hr className="mx-4" />
                    <BorderlessLinkButton text={size.name}
                        onClick={goToSize}
                        edit />
                    <hr className="mx-4" />
                    <BorderlessLinkButton text={extra.name}
                        onClick={goToExtra}
                        edit>
                        <SubselectionButton text={subselection.name} selected />
                    </BorderlessLinkButton>
                </div>}
        </div>
            <div className="flex flex-col justify-end w-full">
                <LinkButton text="Brew your coffee" hideImg onClick={submitOrder} disabled={isLoading} />
            </div></>
    </div>
}


Overview.displayName = 'Overview'

export default Overview