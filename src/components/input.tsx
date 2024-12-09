import { InputHTMLAttributes } from "react"

const InputComponent: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    type = 'text',
    onChange = () => { },
    value = '',
    id
}) => {
    return (
        <input
            id={id}
            value={value}
            type={type}
            onChange={onChange}
        />
    )
}

export default InputComponent