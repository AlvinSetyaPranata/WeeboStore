import SelectCard from '@/components/Atoms/SelectCard'
import SelectCardContainer from '@/components/Molecules/SelectCardContainer'
import React from 'react'

export default function Payment() {
  return (
    <div className='grid place-items-center py-12 w-full h-full'>
      <div className='container px-8 py-12'>
        <h2 className='text-2xl font-heading font-semibold'>Shipping Information</h2>

        <form>
          <div className='max-w-[65%]'>

            <div className='grid mt-12 gap-8 grid-cols-2'>
              <div className='col-span-2'>
                <h3 className="font-heading">Username</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div>
                <h3 className="font-heading">First Name</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div>
                <h3 className="font-heading">Last Name</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div className='col-span-2'>
                <h3 className="font-heading">Address</h3>
                <textarea type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div>
                <h3 className="font-heading">Country</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div>
                <h3 className="font-heading">Province</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div>
                <h3 className="font-heading">City</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div>
                <h3 className="font-heading">Postal code / ZIP</h3>
                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

              <div className='col-span-2'>
                <h3 className="font-heading">Phone Number</h3>
                <input type="tel" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-full" />
              </div>

            </div>
            {/* delivery method */}

            <SelectCardContainer className='py-12 border-t-[1.5px] border-gray-300 mt-12'>
              <SelectCard />
              <SelectCard />
            </SelectCardContainer>

          </div>


        </form>
      </div>
    </div>
  )
}
