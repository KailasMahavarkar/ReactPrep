import { SelectHTMLAttributes } from "react"


type SelectPropTypes = SelectHTMLAttributes<HTMLSelectElement> & {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {
        label: string,
        value: string
    }[];
    value: string;
}

const SelectComponent: React.FC<SelectPropTypes> = ({
    value,
    onChange,
    options,
}) => {
    return (
        <select
            value={value}
            onChange={onChange}
        >
            {
                options.map((option) => (
                    <option
                        key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
    )
}

export default SelectComponent