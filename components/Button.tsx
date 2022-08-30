interface Props {
    onClick?: any
    className?: string
    children: React.ReactNode
}

const Button = ({ onClick, className, children }: Props) => {
    return (
        <button
            className={`btn relative inline-flex items-center justify-start overflow-hidden transition-all border-solid border-4 border-primaryHighlight rounded-md p-3 mx-2 group`}
            //className={`text-primaryHighlight font-bold text-xl hover:bg-primaryHighlight/25 border-solid border-4 border-primaryHighlight rounded-md p-3 mx-2 ${className}`}
            onClick={onClick}
        >
            <span className="w-0 h-0 rounded bg-primaryHighlight/25 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out z-10">
                {children}
            </span>
        </button>
    )
}

export default Button
