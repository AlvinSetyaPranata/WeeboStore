import React from 'react'

export default function Payment() {
  return (
    <div className='grid place-items-center py-12 w-full h-full'>
      <div className='container px-8 py-12'>
        <h2 className='text-2xl font-heading font-semibold'>Shipping Information</h2>

        <form>
          <div className='grid mt-12'>
            <div>
              <h3 className="text-sm font-heading">Username</h3>
              <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
            </div>


          </div>
        </form>
      </div>
    </div>
  )
}
