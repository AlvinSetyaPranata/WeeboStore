'use client'

import CartCard from "@/components/Atoms/CartCard";
import { useState } from "react";

export default function Cart() {
    const [items, setItems] = useState(0)

    const addHandler = () => setItems(latestvalue => latestvalue + 1)
    const minusHandler = () => setItems(latestvalue => {
        if (latestvalue > 0) return latestvalue - 1
        return latestvalue
    })


    return (

        <div className="px-8 py-12">

            <div className="flex">
                <div className="flex-1">
                    <h2 className="text-2xl text-gray-500 font-semibold mb-8">Your Cart</h2>

                    <div className="flex w-full">
                        <div className="grid gap-8">
                            <CartCard onAdd={addHandler} onMinus={minusHandler} value={items} />
                            <CartCard onAdd={addHandler} onMinus={minusHandler} value={items} />
                            <CartCard onAdd={addHandler} onMinus={minusHandler} value={items} />
                        </div>

                    </div>
                </div>

                {/* subtotal */}
                <div className="px-8 w-1/3">
                    <h3 className="text-2xl font-bold">Sub Total</h3>
                    <div className="grid gap-8 mt-6 border-b-2 border-gray-400 pb-6 overflow-y-auto max-h-[250px]">

                        {/* items */}
                        <div className="w-full flex justify-between items-center">
                            <div className="">
                                <p className="font-semibold">Hello</p>
                                <p>Rp.20.000</p>
                            </div>
                            <p className="font-bold text-gray-500">2 Item</p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="">
                                <p className="font-semibold">Hello</p>
                                <p>Rp.20.000</p>
                            </div>
                            <p className="font-bold text-gray-500">2 Item</p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="">
                                <p className="font-semibold">Hello</p>
                                <p>Rp.20.000</p>
                            </div>
                            <p className="font-bold text-gray-500">2 Item</p>
                        </div>
                        {/* items */}

                    </div>
                    <div className="mt-4 grid gap-2">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-500">Price Total</p>
                            <p className="font-bold">Rp.130.000</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-500">Diskon</p>
                            <p className="font-bold">-Rp.50.000</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-500">Total</p>
                            <p className="font-bold">Rp.80.000</p>
                        </div>
                    </div>
                    <button className="w-full mt-5 bg-primary rounded-lg py-2 font-semibold text-white">Buy</button>
                </div>
            </div>
        </div>
    )
}