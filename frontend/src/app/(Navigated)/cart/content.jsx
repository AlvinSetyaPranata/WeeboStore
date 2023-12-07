'use client'

import CartCard from "@/components/Atoms/CartCard";
import Link from "next/link";
import { useEffect, useMemo, useReducer, useState } from "react";

export default function Cart() {

    const data = [{
        "name": "Jaket cosplay asuna - Sword Art online",
        "price": 20000,
        "qty": 1
    }, {
        "name": "Jaket cosplay asuna - Sword Art online",
        "price": 20000,
        "qty": 1
    },]

    const itemReducer = (state, action) => {
        switch (action.type) {
            case "SET_QTY":
                let newState = state

                newState[action.index]["qty"] = action.value

                return newState
        }
    }

    const [state, dispatch] = useReducer(itemReducer, data)
    
    // Dummy hooks that force UI to re-render
    const [,setForce] = useState(false)



    const onChange = (id, value) => {
        dispatch({ type: "SET_QTY", index: id, value: value })

        setForce(latest => !latest)
    }


    return (

        <div className="px-8 py-12 max-h-[80vh] overflow-y-auto">
            <div className="flex">
                <div className="flex-1">
                    <h2 className="text-2xl text-gray-500 font-semibold mb-8">Your Cart</h2>

                    <div className="flex w-full">
                        <div className="grid gap-8">
                            {state.map((item, itemKey) => (
                                <CartCard key={itemKey} next={onChange} title={item.name} price={item.price} qty={item.qty} id={itemKey} />
                            ))

                            }
                        </div>

                    </div>
                </div>

                {/* subtotal */}
                <div className="px-8 w-1/3 bg-white">
                    <div className="sticky top-0">

                        <h3 className="text-2xl font-bold">Sub Total</h3>
                        <div className="grid gap-8 mt-6 border-b-2 border-gray-400 pb-6">

                            {state.map((item, itemKey) => {
                                console.log(item)
                                return (
                                <div key={itemKey} className="w-full flex justify-between items-center">
                                    <div className="">
                                        <p className="font-semibold line-clamp-2">{item.name}</p>
                                        <p>Rp.{item.price*item.qty}</p>
                                    </div>
                                    <p className="font-bold text-gray-500">{item.qty}x</p>
                                </div>
                            )})}


                        </div>
                        <p className="text-right mt-1 font-semibold text-primary underline-offset-2 hover:underline hover:cursor-pointer">use coupons</p>
                        <div className="mt-4 grid gap-2">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-500">Price Total</p>
                                <p className="font-bold">Rp.130.000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-500">Discount</p>
                                <p className="font-bold">-Rp.50.000</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-500">Total</p>
                                <p className="font-bold">Rp.80.000</p>
                            </div>
                        </div>
                        <Link href="/payment">
                            <p className="w-full mt-5 bg-primary rounded-lg py-3 font-semibold text-white outline-non text-center">
                                To Payment page
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    )
}