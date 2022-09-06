import styles from './Input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    textArea?: boolean
    className?: string
    palceholder?: string
    label: string
}

const Input = ({ label, textArea, className, placeholder }: Props) => {
    const Tag = textArea ? 'textarea' : 'input'
    return (
        <div className="flex flex-col flex-grow">
            <label className={'my-2 text-primaryText font-bold'}>{label}</label>
            <Tag
                placeholder={placeholder}
                className={`${styles.input} ${className}`}
            ></Tag>
        </div>
    )
}

export default Input
