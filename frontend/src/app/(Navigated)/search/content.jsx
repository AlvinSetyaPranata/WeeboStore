'use client'

import Card from '@/components/Atoms/Card'
import FilterOption from '@/components/Atoms/FilterOption'
import SortOption from '@/components/Atoms/SortOption'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Search({title}) {
  const [filterOpened, setFilterOpened] = useState(false)

  return (
    <div className='w-full box-border p-16'>
      {/* filter container */}
      <div className='absolute top-0 left-0 z-50 flex w-full'>

        {/* filter sidebar */}
        <aside className={`w-[30%] min-h-screen h-full border-r-2 border-gray-300 ${!filterOpened ? 'hidden' : ''} bg-white`}>
          <div className='px-4 py-6 border-b-[1.5px] border-gray-300 flex justify-between items-center'>
            <h2 className='text-xl font-medium text-gray-900 font-heading'>Filters</h2>
            <button className='p-2' onClick={() => setFilterOpened(false)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* filters */}
          <div className='mt-12 grid gap-y-6'>

            {/* filter-button */}
            <FilterOption />
            <FilterOption />
            <FilterOption />
          </div>
        </aside>

        <div className='flex-1 bg-black opacity-20' onClick={() => setFilterOpened(false)}></div>
      </div>


      {/* content */}
      <div className='w-full'>
        {/* heading */}
        <div className="flex items-center w-full justify-between flex-row-reverse">
          <h1 className='text-slate-800 font-heading text-4xl font-bold'>{title}</h1>

          {/* utils section */}
          <div className='w-max flex items-center gap-x-8'>
            <div className='hover:cursor-pointer' onClick={() => setFilterOpened(true)}>
              <svg class="h-5 w-5" viewBox="0 0 20 20">
                <path className='fill-gray-500' d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"></path>
              </svg>
            </div>
            <SortOption />
          </div>

        </div>
        <div className='w-full py-16 grid gap-y-12 gap-x-8 grid-cols-5 box-border'>
          <Card title="Jacket Asuna - SAO" price={20000}  imageUrl="/card1.png" /> 
          <Card title="Jacket Asuna - SAO" price={20000}  imageUrl="/card1.png" /> 
          <Card title="Jacket Asuna - SAO" price={20000}  imageUrl="/card1.png" /> 
          <Card title="Jacket Asuna - SAO" price={20000}  imageUrl="/card1.png" /> 
          <Card title="Jacket Asuna - SAO" price={20000}  imageUrl="/card1.png" /> 
        </div>
      </div>
    </div>
  )
}
