import styles from './Button.module.css'

interface Props {
    onClick?: () => void
    className?: string
    children: React.ReactNode
}

const Button = ({ onClick, className, children }: Props) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>
            <span className="w-full text-primaryHighlight bold transition-all duration-300 ease z-10">
                {children}
            </span>
        </button>
    )
}

export default Button
