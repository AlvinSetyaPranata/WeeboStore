'use client'

import React from 'react'
import CardCartSkeleton from '@/components/Atoms/skeletons/CardCartSkeleton'


export default function Loading() {
    return (
        <div className="px-8 py-12 max-h-[80vh] overflow-y-auto">
            <div className="flex">
                <div className="flex-1">
                    <h2 className="text-2xl text-gray-500 font-semibold mb-8">Your Cart</h2>

                    <div className="flex">
                        <div className="grid gap-8 min-w-[50%]">
                            <CardCartSkeleton />
                            <CardCartSkeleton />
                        </div>

                    </div>
                </div>

                {/* subtotal */}
                <div className="px-8 w-1/3 bg-white">
                    <div className="sticky top-0">

                        {/* subtotal-header */}
                        <div className='bg-gray-500 w-[100px] h-[20px]'></div>
                        <div className="grid gap-8 mt-6 border-b-2 border-gray-400 pb-6">

                            {/* items */}
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <div className='bg-gray-500 w-[20px] h-[10px]'></div>
                                    <div className='bg-gray-500 min-w-full h-[10px]'></div>
                                </div>
                                {/* total-item */}
                                <div className='bg-gray-500 min-w-full h-[20px]'></div>                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <div className='bg-gray-500 w-[20px] h-[10px]'></div>
                                    <div className='bg-gray-500 min-w-full h-[10px]'></div>
                                </div>
                                <div className='bg-gray-500 min-w-full h-[20px]'></div>
                            </div>

                            {/* items */}

                        </div>
                        <div className='bg-gray-500 min-w-full h-[20px]'></div>
                        <div className="mt-4 grid gap-2">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-500">Price Total</p>
                                <p className="font-bold">Rp.130.000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-500">Diskon</p>
                                <p className="font-bold">-Rp.50.000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-500">Total</p>
                                <p className="font-bold">Rp.80.000</p>
                            </div>
                        </div>
                        <button className="w-full mt-5 bg-primary rounded-lg py-2 font-semibold text-white outline-none">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
