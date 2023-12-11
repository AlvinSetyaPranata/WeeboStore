import React from 'react'

export default function CardCartSkeleton() {
  return (
    <div className="min-w-full px-2 py-1 pb-4 flex gap-4 border-b-2 border-gray-100 mb-4">
      <div className="flex items-center">
        <div className="w-[120px] h-[120px] ml-3 relative">

          <div className='min-w-full min-h-full bg-gray-500'></div>

        </div>
      </div>
      <div className="flex flex-col justify-between min-w-full">
        <div className='min-w-full'>


          <div className="min-w-full min-h-[20px] bg-gray-500"></div>
          <div className="min-w-full min-h-[20px] bg-gray-500"></div>
        </div>

        <div className="flex justify-between min-w-full">
          <div className="min-w-full min-h-[20px] bg-gray-500"></div>

        </div>
      </div>

    </div>)
}
