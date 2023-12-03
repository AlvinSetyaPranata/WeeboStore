'use client'


import SelectCard from '@/components/Atoms/SelectCard'
import SelectCardContainer from '@/components/Molecules/SelectCardContainer'
import PaymentMethodGroup from '@/components/Organisms/PaymentMethodGroup'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


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

            <SelectCardContainer className='py-12 border-t-[1.5px] border-gray-300 mt-12' label="Delivery Method">
              <SelectCard name="JNE" desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
              <SelectCard name="JNT" desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
              <SelectCard name="Pos Indonesia" desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
              <SelectCard name="Si Cepat  " desc="Estimated time 1 May - 4 June" price="Rp. 10.000" />
            </SelectCardContainer>

            {/* payment method use conditional rendering based on what option
            is selected  */}

            <div className='py-12 border-t-[1.5px] border-gray-300 mt-12'>
              <PaymentMethodGroup />
            </div>


            <div className='py-12 border-t-[1.5px] border-gray-300 mt-12'>
              <h2 className='text-2xl font-heading font-semibold'>Order Summary</h2>

              {/* summary container */}
              <div className='mt-8 border-[1.5px] border-gray-200 px-4 pb-8 pt-4 grid gap-y-2'>

                {/* items */}
                <div className='py-6 border-b-[1.5px] border-gray-300 flex gap-x-4'>

                  {/* next-image container */}
                  <div className='relative w-[120px] h-[120px]'>
                    <Image src="/card1.png" alt="card" fill style={{ objectFit: 'cover' }} sizes="(min-width: 808px) 50vw, 100vw" />
                  </div>
                  {/* desc */}
                  <div>
                    <h4 className='font-heading'>Sword Art Online - Asuna Cosplay</h4>
                    <p className='font-heading text-gray-400'>3 Items</p>

                    <p className='font-heading font-semibold mt-12'>Rp.3000.000</p>
                  </div>
                </div>
                <div className='py-6 border-b-[1.5px] border-gray-300 flex gap-x-4'>

                  {/* next-image container */}
                  <div className='relative w-[120px] h-[120px]'>
                    <Image src="/card1.png" alt="card" fill style={{ objectFit: 'cover' }} sizes="(min-width: 808px) 50vw, 100vw" />
                  </div>
                  {/* desc */}
                  <div>
                    <h4 className='font-heading'>Sword Art Online - Asuna Cosplay</h4>
                    <p className='font-heading text-gray-400'>3 Items</p>

                    <p className='font-heading font-semibold mt-12'>Rp.3000.000</p>
                  </div>
                </div>
                <div className='py-6 border-b-[1.5px] border-gray-300 flex gap-x-4'>

                  {/* next-image container */}
                  <div className='relative w-[120px] h-[120px]'>
                    <Image src="/card1.png" alt="card" fill style={{ objectFit: 'cover' }} sizes="(min-width: 808px) 50vw, 100vw" />
                  </div>
                  {/* desc */}
                  <div>
                    <h4 className='font-heading'>Sword Art Online - Asuna Cosplay</h4>
                    <p className='font-heading text-gray-400'>3 Items</p>

                    <p className='font-heading font-semibold mt-12'>Rp.3000.000</p>
                  </div>
                </div>

                {/* subtotal, and others */}
                <div className='w-full grid gap-y-4 mt-4'>
                  <div className='w-full flex justify-between items-center'>
                    <p className='text-slate-400'>Subtotal</p>
                    <p className='text-slate-800 font-semibold'>Rp.3000.000</p>
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <p className='text-slate-400'>Discount</p>
                    <p className='text-slate-800 font-semibold'>Rp.-30.000</p>
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <p className='text-slate-400'>Provider Taxes</p>
                    <p className='text-slate-800 font-semibold'>Rp.2.000</p>
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <p className='text-slate-400'>Total</p>
                    <p className='text-slate-800 font-semibold'>Rp.2.700.000</p>
                  </div>
                </div>

                {/* end of subtotal, and others */}

              </div>


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
