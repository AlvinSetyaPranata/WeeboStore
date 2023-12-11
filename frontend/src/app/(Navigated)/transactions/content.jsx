import Image from 'next/image'
import React from 'react'

export default function Transactions() {
  return (
    <div className="px-12 py-12 max-h-[80vh] overflow-y-auto">
      <h1 className='text-2xl font-semibold font-heading'>Your orders recently</h1>

      <div className='max-w-xl py-6'>
        <div className='py-6 border-b-[1.5px] border-gray-300 flex gap-x-4'>

          {/* next-image container */}
          <div className='relative w-[120px] h-[120px]'>
            <Image src="/card1.png" alt="card" fill style={{objectFit: "cover", objectPosition: "center center"}} sizes='100vw' />
          </div>
          {/* desc */}
          <div className='flex-1'>
            <h4 className='font-heading line-clamp-1'>Sword Art Online - Asuna Cosplay</h4>
            <p className='font-heading text-gray-400'>3 Items</p>

            <div className="flex w-full justify-between items-center mt-12">
              <p className='font-heading font-semibold'>Rp.3000.000</p>
              <button className='bg-primary text-white font-semibold px-4 py-2 text-sm'>Order again</button>
            </div>
          </div>

        </div>
        <div className='py-6 border-b-[1.5px] border-gray-300 flex gap-x-4'>

          {/* next-image container */}
          <div className='relative w-[120px] h-[120px]'>
            <Image src="/card1.png" alt="card" fill style={{objectFit: "cover", objectPosition: "center center"}} sizes='100vw' />
          </div>
          {/* desc */}
          <div className='flex-1'>
            <h4 className='font-heading line-clamp-1'>Sword Art Online - Asuna Cosplay</h4>
            <p className='font-heading text-gray-400'>3 Items</p>

            <div className="flex w-full justify-between items-center mt-12">
              <p className='font-heading font-semibold'>Rp.3000.000</p>
              <button className='bg-primary text-white font-semibold px-4 py-2 text-sm'>Order again</button>
            </div>
          </div>

        </div>
        {/* end of items grid */}


      </div>
    </div>
  )
}
