'use client'

import React, { useState } from 'react'

export default function SelectCardContainer({children, className}) {
    const [selected, setSelected] = useState(1)

    return (
    <div className={`grid grid-cols-2 w-full gap-x-4 ${className}`}>
        {children.map((child, key) => (
            React.cloneElement(child, {key: key, selected: selected==key ? true : false, onSelect: () => setSelected(key)})
        ))}
    </div>
  )
}
