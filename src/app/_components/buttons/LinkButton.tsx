'use client'

import Image, { StaticImageData } from 'next/image'
import templateImg from '../../../../public/coffee_5978671.png'

interface Props {
    text: string;
    onClick?: () => void
    children?: React.ReactNode
    imgSrc?: StaticImageData
    hideImg?: boolean
    disabled?: boolean
}

export const LinkButton = ({ text, onClick, children, imgSrc, hideImg, disabled }: Props) => {
    return <div>
        <div
            onClick={!disabled ? onClick : undefined}
            style={disabled ? { backgroundColor: 'grey' } : {}}
            className="my-1 min-h-14 rounded-lg block w-full px-4 py-2 cursor-pointer bg-mossGreen-300 hover:bg-mossGreen-400 text-white">
            <div className="flex flex-row space-x-2 items-center">
                <div>
                    {!hideImg && <Image src={imgSrc || templateImg} className="w-10 h-10 rounded-full" alt="alt" />}
                </div>
                <div>
                    {text}
                </div>
            </div>

            <div>
                {children && <hr className="my-2" />}
                {children}
            </div>
        </div>
    </div>
}