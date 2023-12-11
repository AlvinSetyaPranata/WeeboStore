import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CatagoryCard() {
    return (
        <div className='border-[1.5px] border-primary box-border p-6 w-max bg-white'>
            <h3 className='text-lg xl:text-xl font-heading font-bold'>Catagory Jackets</h3>
            <div className="group hover:cursor-pointer mt-2">
                <div className="relative w-[200px] h-[200px] mb-4">
                    <Image src="/card1.png" alt="catagory-jacket" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="100vw"/>
                </div>
                <Link href="/" className='mt-4 underline-offset-4 hover:underline group-hover:text-orange-400 text-sm font-medium text-gray-600'>See more</Link>
            </div>
        </div>
    )
}
