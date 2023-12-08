'use client'

import Coupons from '@/components/Atoms/Coupons'
import React from 'react'


export default function CouponsPage() {
  return (
    <div className='container w-full py-16 px-10 box-border'>
      
      <div>
        <h1 className='font-bold text-gray-500'>Owned Coupons</h1>
        <div className='grid w-full mt-4 gap-y-4'>
          <Coupons title="The day of trancending day" desc="Only hope that can rise the light" discount={10} owned={true} />
          <Coupons title="The day of trancending day" desc="Only hope that can rise the light" discount={10} owned={true} />
          <Coupons title="The day of trancending day" desc="Only hope that can rise the light" discount={10} owned={true} />
        </div>
      </div>
      
      <div className='mt-10'>
        <h1 className='font-bold text-gray-500'>Purchase Coupons</h1>
        <div className='grid w-full mt-4 gap-y-4'>
          <Coupons title="The day of trancending day" desc="Only hope that can rise the light" discount={10} />
          <Coupons title="The day of trancending day" desc="Only hope that can rise the light" discount={10} />
          <Coupons title="The day of trancending day" desc="Only hope that can rise the light" discount={10} />
        </div>
      </div>


    </div>
  )
}
