'use client'


import SelectCard from '@/components/Atoms/SelectCard'
import SelectCardContainer from '@/components/Molecules/SelectCardContainer'
import PaymentMethodGroup from '@/components/Organisms/PaymentMethodGroup'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Payment() {


  const [paymentMethod, setPaymentMethod] = useState("Bank")


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

            <SelectCardContainer className='py-12 border-t-[1.5px] border-gray-300 mt-12' label="Delivery Method" onCardSelected={setPaymentMethod}>
              <SelectCard name="JNE" desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
              <SelectCard name="JNT" desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
              <SelectCard name="Pos Indonesia" desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
              <SelectCard name="Si Cepat  " desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
            </SelectCardContainer>

            <div className='py-12 border-t-[1.5px] border-gray-300 mt-12'>
              <PaymentMethodGroup />
            </div>

            <div className='mt-4 flex gap-x-4'>
              <Link href="/cart" className='mt-4 w-1/2 bg-red-500 py-4 rounded-md font-semibold text-white text-center'>Cancel</Link>
              <button className='mt-4 w-1/2 bg-primary py-4 rounded-md font-semibold text-white'>Checkout order</button>
            </div>

          </div>




        </form>
      </div>
    </div>
  )
}
