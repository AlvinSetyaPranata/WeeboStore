'use client'

import React from 'react'

export default function SelectCard({name, desc, price, selected, onSelect}) {

    return (
        <div className={`border-[3px] rounded-lg p-4 hover:cursor-pointer ${selected ? 'border-primary' : 'border-slate-400'}`} onClick={() => onSelect(price)}>
            <div className="flex w-full justify-between items-center">
                <h4 className='font-semibold font-heading'>{name}</h4>
                <div className={`w-[20px] h-[20px] rounded-full border-2  ${selected ? 'bg-primary border-white' : 'bg-white border-gray-300'}`}></div>
            </div>
            <span className='text-gray-500 mt-2 text-sm'>{desc}</span>

            <p className='font-bold mt-4 text-slate-600'>{price}</p>
        </div>
    )
}
