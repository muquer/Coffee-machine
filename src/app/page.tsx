'use client'

import { LinkButton } from "./_components/buttons/LinkButton"
import { useGetCoffeeTypes } from "./_redux/hooks/useGetCoffeeTypes"
import { useDispatch } from "react-redux"
import { useRouter } from 'next/navigation'
import { updateType } from "./_redux/features/coffee"
import { Type } from "./_types/type"

const Types = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { types } = useGetCoffeeTypes()


  return <div className="h-full max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
    <div className="w-full text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <h1 className="text-3xl">Select your style</h1>
      {types.map((({ _id, name, sizes, extras }: Type) =>
        <LinkButton key={_id}
          text={name}
          onClick={() => {
            dispatch(updateType({ _id, name, sizes, extras }))
            router.push(`/${_id}`)
          }}
        />))}
    </div>
  </div>
}

Types.displayName = 'Types'

export default Types