const config = [
    {
        type: 'text',
        key: 'name',
        label: 'Name'
    },
    {
        type: 'select',
        key: 'city',
        label: 'City',
        children: [
            { label: 'New York', value: 'NY' },
            { label: 'Los Angeles', value: 'LA' },
            { label: 'Chicago', value: 'CH' }
        ]
    },
    {
        type: 'radio',
        key: 'occupation',
        label: 'Occupation',
        children: [
            { label: 'Employed', value: 'employed' },
            { label: 'Student', value: 'student' },
            { label: 'Business', value: 'business' }
        ],
        multiple: true
    }
]


export default config