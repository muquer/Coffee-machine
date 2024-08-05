import Image, { StaticImageData } from 'next/image'
import templateImg from '../../../../public/coffee_5978671.png'

interface Props {
    text: string;
    onClick?: () => void
    children?: React.ReactNode
    imgSrc?: StaticImageData
    edit?: boolean
}

export const BorderlessLinkButton = ({ text, onClick, children, imgSrc, edit }: Props) => {
    return <div>
        <div
            onClick={onClick}
            className="my-1 min-h-14 block w-full px-4 py-2 cursor-pointer hover:bg-mossGreen-400 text-white bg-mossGreen-300">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-2 items-center">
                    <div>
                        <Image src={imgSrc || templateImg} className="w-10 h-10 rounded-full" alt="alt" />
                    </div>
                    <div>
                        {text}
                    </div>
                </div>
                {edit && <div className="flex items-center">Edit</div>}
            </div>

            <div>
                {children && <hr className="my-5" />}
                {children}</div>
        </div>
    </div>
}