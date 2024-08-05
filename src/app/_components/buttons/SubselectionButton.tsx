interface Props {
    text: string;
    selected?: boolean;
    onClick?: () => void
}

export const SubselectionButton = ({ text, selected, onClick }: Props) => {
    return <div
        onClick={onClick}
        className="flex justify-between items-center my-1 min-h-14 rounded-lg block w-full px-4 py-2 cursor-pointer bg-olive-300 hover:bg-olive-500 hover:text-white">
        <div>
            {text}
        </div>
        <div>
            {selected ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg> :
                <input type="radio" name="radio" value="value" style={{ height: 25, width: 25, verticalAlign: 'middle', color:'white' }} />}
        </div>
    </div>
}