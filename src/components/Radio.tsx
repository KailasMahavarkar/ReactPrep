import React from 'react'

type RadioPropTypes = {
    options: { value: string, label: string }[];
    selectedValues: string[];
    onChange: (selected: string[]) => void;
    multiSelect: boolean
}

const Radio: React.FC<RadioPropTypes> = ({
    options,
    selectedValues,
    onChange,
    multiSelect
}) => {

    function handleChange(value: string) {
        if (multiSelect) {
            if (selectedValues.includes(value)) {
                onChange(selectedValues.filter(item => item !== value))
            } else {
                onChange([...selectedValues, value]);
            }
        } else {
            onChange([value])
        }
    }

    return (
        <div>
            {
                options.map((option) => (
                    <label htmlFor={option.value}>
                        <input
                            type="checkbox"
                            checked={selectedValues.includes(option.value)}
                            onChange={() => handleChange(option.value)}
                        />

                        {option.label}
                    </label>
                ))
            }
        </div>
    )
}

export default Radio