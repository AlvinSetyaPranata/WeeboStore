'use client'

import React from 'react'

export default function SelectCard({selected, onSelect}) {

    return (
        <div className='border-[1.5px] border-slate-400 rounded-lg p-4 hover:cursor-pointer' onClick={onSelect}>
            <div className="flex w-full justify-between items-center">
                <h4 className='font-semibold font-heading'>Cash On Delivery (COD)</h4>

                <input type="checkbox" defaultChecked={selected} />
            </div>
            <span className='text-gray-500 mt-2 text-sm'>Estimated 4-10 days</span>

            <p className='font-bold mt-4'>Rp.30.000</p>
        </div>
    )
}
