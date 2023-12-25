import React from 'react'

export default function Details() {
    return (
        <>
            {/* sidebar */}
             

            <h1 className='mt-12 ml-12 text-2xl font-bold mb-8'>Detail Produk</h1>

            <form action="">
                <div className='container box-border px-12 py-12 grid grid-cols-3 gap-x-12 gap-y-14'>
                    <div>
                        <h3 className="text-sm font-medium font-heading">Nama Barang</h3>
                        <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium font-heading">Catagori Barang</h3>
                        <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium font-heading">Harga Barang</h3>
                        <input type="number" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium font-heading">Harga setelah diskon</h3>
                        <input type="number" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium font-heading">Gambar Produk</h3>
                        <input type="file" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                    </div>
                </div>

                <div className='flex justify-end gap-x-4 text-sm w-full border-t-[1.5px] border-gray-200 py-4 px-8'>
                    <button className='px-4 py-2 bg-red-500 text-white rounded-md'>Delete</button>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>Update</button>
                </div>
            </form>
        </>
    )
}
