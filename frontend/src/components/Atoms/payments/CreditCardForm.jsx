import React from 'react'

export default function CreditCardForm() {
    return (
        <div className='w-full grid grid-cols-4 col-span-2 gap-x-4 gap-y-6'>
            <div className='col-span-4'>
                <h3 className="font-heading">Card Number</h3>
                <input type="number" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
            </div>
            <div className='col-span-4'>
                <h3 className="font-heading">Card Holder</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
            </div>
            <div className='col-span-3'>
                <h3 className="font-heading">Expiration Date</h3>
                <input type="month" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
            </div>
            <div className=''>
                <h3 className="font-heading">CVC</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
            </div>
        </div>
    )
}
