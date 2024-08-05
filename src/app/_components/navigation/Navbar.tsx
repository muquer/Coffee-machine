'use client'

import { useRouter, usePathname } from 'next/navigation'

export const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()

    return <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex flex-row space-x-2">
                {pathname !== '/' && <div>
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        router.back()

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                </div>}
                <div><h1 className="text-lg">Brew with Lex</h1></div>
            </div>
        </div>
    </nav>
}