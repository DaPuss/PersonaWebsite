import styles from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    innerBtnClassName?: string
    children: React.ReactNode
}

const Button = ({
    className,
    innerBtnClassName,
    children,
    ...props
}: Props) => {
    return (
        <button {...props} className={`${styles.button} ${className}`}>
            <span
                className={`w-full bold transition-all duration-300 ease z-10  ${innerBtnClassName}`}
            >
                {children}
            </span>
        </button>
    )
}

export default Button
