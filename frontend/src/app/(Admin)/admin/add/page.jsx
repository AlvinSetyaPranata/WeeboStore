'use client'

import React from 'react'

export default function AddPage() {

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {}

    Object.keys(e.target).map((key) => {
      let element = e.target[parseInt(key)]

      if (element) {
        if (element.type == "text" || element.type == "file") {
          data[element.name] = element.value
        }
      }

    })


    // Do fetch

  }

  return (
    <div className='container px-24 py-16'>
      <h1 className='mb-12 font-semibold text-lg'>Tambahkan Produk Baru</h1>

      {/* forms */}
      <form method="post" onSubmit={onSubmit}>
        <div className='grid grid-cols-3 gap-y-12'>
          <div className='space-y-2'>
            <p className='font-medium'>Nama Barang</p>
            <input name="product-name" type="text" className='max-w-[300px] py-1 px-2 border-[1.5px] border-gray-500 rounded-md' />
          </div>
          <div className='space-y-2'>
            <p className='font-medium'>Harga Barang</p>
            <input name="price" type="text" className='max-w-[300px] py-1 px-2 border-[1.5px] border-gray-500 rounded-md' />
          </div>
          <div className='space-y-2'>
            <p className='font-medium'>Harga Barang setelah diskon</p>
            <input name="after-discount" type="text" className='max-w-[300px] py-1 px-2 border-[1.5px] border-gray-500 rounded-md' />
          </div>
          <div className='space-y-2'>
            <p className='font-medium'>Gambar Barang</p>
            <input name="product-image" type="file" className='max-w-[300px] py-1 px-2 border-[1.5px] border-gray-500 rounded-md' />
          </div>
        </div>

        <div className='col-span-3 flex justify-end'>
          <button type='submit' className='py-2 bg-blue-500 text-white rounded-md w-[200px]'>Tambah Barang</button>
        </div>
      </form>
    </div>
  )
}
