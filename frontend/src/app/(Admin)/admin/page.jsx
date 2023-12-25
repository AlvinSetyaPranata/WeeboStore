'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Admin() {
  return (
    <div className='container px-8 py-12'>
      <div className='w-full flex justify-between items-center mb-12'>
        <h1 className='font-bold text-2xl'>Tampilan Admin</h1>

        <Link href="admin/add" className='text-sm rounded-md bg-blue-500 px-4 py-2 text-white font-medium flex items-center gap-2 hover:cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p>Tambah Barang</p>
        </Link>
      </div>


      <div className='grid grid-cols-5 gap-4'>

        {/* card */}
        <div className='rounded-md border-[1.5px] border-gray-400 box-border px-3 py-4 w-max'>
          {/* image container */}
          <div className="relative w-[150px] h-[150px] px-2">
            <Image src="/card1.png" alt="Product-Image" fill style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>


          <h3 className='font-medium mt-8'>Jaket Kirito</h3>

          <button className='text-xs w-full rounded-md bg-blue-500 text-white  py-2 mt-4'>More about</button>
        </div>
     


      </div>
    </div>
  )
}
