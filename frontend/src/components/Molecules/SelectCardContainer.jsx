'use client'

import React, { useState } from 'react'

export default function SelectCardContainer({ children, className, label, onSelected }) {
    const [selected, setSelected] = useState(1)

    const selectedHandler = (name, key) => {
        setSelected(key)
        onSelected(name)

    }

    return (
        <div className={`w-full ${className}`}>
            <h3 className='text-xl font-heading font-semibold'>{label}</h3>
            <div className='grid grid-cols-2 gap-4 mt-6'>
                {children.map((child, key) => (
                    React.cloneElement(child, { key: key, selected: selected == key ? true : false, onSelect: (name) => selectedHandler(name, key) })
                ))}
            </div>
        </div>
    )
}
