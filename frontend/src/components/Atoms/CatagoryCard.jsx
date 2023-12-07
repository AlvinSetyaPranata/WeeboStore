import Image from 'next/image'
import React from 'react'

export default function CatagoryCard() {
    return (
        <div className='border-[1.5px] border-primary box-border p-6 w-max bg-white'>
            <h3 className='text-xl font-heading font-bold'>Catagory Jackets</h3>
            <div className="group hover:cursor-pointer mt-2">
                <div className="relative w-[250px] h-[250px]">
                    <Image src="/card1.png" alt="catagory-jacket" fill objectFit="cover"
                        objectPosition="center center" />
                </div>
                <p className='mt-4 underline-offset-4 hover:underline group-hover:text-orange-400'>See more</p>
            </div>
        </div>
    )
}
