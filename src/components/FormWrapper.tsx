import React, { useState } from 'react'
import InputComponent from './input';
import SelectComponent from './select';
import Radio from './Radio';

type textConfigType = {
    type: 'text';
    pattern: string;
    label: string;
    key: string;
}

type selectConfigType = {
    key: string;
    type: 'select';
    label: string;
    children: { value: string, label: string }[]
}

type radioConfigType = {
    key: string;
    type: 'radio';
    label: string;
    children: { value: string, label: string }[];
    multiple: boolean
}

type singleConfigElement = selectConfigType | textConfigType | radioConfigType;

type configType = {
    config: singleConfigElement[],
    onSubmit: (formData: Record<string, string>) => void;
}

const DynamicForm: React.FC<configType> = ({
    config,
    onSubmit
}) => {

    const [formState, setFormState] = useState<Record<string, string>>({});

    const handleInputChange = (key: string, value: string) => {
        setFormState((prevData) => ({ ...prevData, [key]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formState);
    }

    const renderSingleConfig = (element: singleConfigElement) => {

        switch (element.type) {
            case 'text':
                return (
                    <InputComponent
                        type={element.type}
                        key={element.key}
                        value={formState[element.key] || ''}
                        onChange={(e) => handleInputChange(element.key, e.target.value)}
                    />
                )
            case 'select':
                return (
                    <div key={element.key}>
                        <SelectComponent
                            options={element.children || []}
                            value={formState[element.key] || ''}
                            onChange={(e) => handleInputChange(element.key, e.target.value)}
                        />
                    </div>
                )
            case 'radio':
                return (
                    <div key={element.key}>
                        <Radio
                            onChange={(selected) => handleInputChange(element.key, selected.join(','))}
                            options={element.children || []}
                            selectedValues={formState[element.key] ? formState[element.key].split(',') : []}
                            multiSelect={element.multiple}
                        />
                    </div>
                )

            default:
                return null
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    config.map((currentConfig: singleConfigElement) => {
                        return renderSingleConfig(currentConfig);
                    })
                }
                <button type='submit'>
                    submit form
                </button>
            </form>
        </>
    )
}



export default DynamicForm