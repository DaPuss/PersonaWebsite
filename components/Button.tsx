interface Props {
  onClick: any
  className?: string
  children: React.ReactNode
}

const Button = ({ onClick, className, children }: Props) => {
  return (
    <button
      className={`text-primaryText font-bold text-xl myfont border-solid border-4 border-primaryHighlight rounded-md p-3 mx-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
