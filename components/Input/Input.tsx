import styles from './Input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    textArea?: boolean
    palceholder?: string
    label: string
    error?: string
    handleChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void
    value: string
}

const Input = ({
    error,
    label,
    textArea,
    placeholder,
    handleChange,
    value,
}: Props) => {
    const Tag = textArea ? 'textarea' : 'input'
    return (
        <div className="flex flex-col flex-grow">
            <label className={'my-2 text-primaryText font-bold'}>{label}</label>
            <Tag
                minLength={5}
                required={true}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={`${error && styles.error} ${styles.input} 
                `}
            ></Tag>
            <p className="text-red-600 min-h-[20px]">{error}</p>
        </div>
    )
}

export default Input
