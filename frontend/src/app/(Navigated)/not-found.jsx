import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
    return (
        <div className='w-full h-full grid place-items-center py-24'>
            <h1 className='text-4xl font-bold text-primary'>404 - Not Found</h1>
            <div className='flex gap-1 items-center mt-2 text-lg'>
                <p>The page that you looking for is not exists, return to</p>
                <Link href="/" className='text-primary underline'>homepage</Link>
            </div>
        </div>
    )
}
