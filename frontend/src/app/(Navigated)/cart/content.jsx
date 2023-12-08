'use client'

import CartCard from "@/components/Atoms/CartCard";
import Link from "next/link";
import { useReducer, useState } from "react";

export default function Cart() {

    const data = [{
        index: 0,
        name: "Jaket cosplay asuna - Sword Art online",
        price: 20000,
        qty: 1
    }, {
        index: 1,
        name: "Jaket cosplay asuna - Sword Art online",
        price: 30000,
        qty: 3
    },
    {
        index: 2,
        name: "Jaket cosplay asuna - Sword Art online",
        price: 20000,
        qty: 1
    },]

    const itemReducer = (state, action) => {
        switch (action.type) {
            case "SET_QTY":
                var newState = state

                newState[action.index]["qty"] = action.value

                return newState

            case "REMOVE_ITEM":
                var newState = state.filter(item => item.index != action.index)

                return newState
        }
    }

    const [state, dispatch] = useReducer(itemReducer, data)

    // Dummy hooks that force UI to re-render
    const [, setForce] = useState(false)



    const onChange = (id, value) => {
        dispatch({ type: "SET_QTY", index: id, value: value })
        setForce(latest => !latest)
    }


    const onItemRemove = (id) => {
        dispatch({ type: "REMOVE_ITEM", index: id })
        setForce(latest => !latest)
    }

    return (

        <div className="px-8 py-12 max-h-[80vh] overflow-y-auto">
            <div className="flex">
                <div className="flex-1">
                    <h2 className="text-xl text-gray-500 font-semibold mb-8">{state.length > 0 ? 'Your Cart' : 'Your Cart is empty'}</h2>

                    <div className="flex w-full">
                        <div className="grid gap-8 w-full">
                            {state.length == 0 &&
                                <div className="py-12 w-full grid place-items-center">
                                    <h3 className="text-gray-500 font-medium">Buy something for me, ni-chan</h3>
                                    <Link className="text-center bg-primary font-semibold rounded-lg py-2 outline-none w-1/4 text-sm text-white mt-2" href="/" replace>To market</Link>
                                </div>
                            }
                            {state.map((item, itemKey) => (
                                <CartCard key={itemKey} next={onChange} title={item.name} price={item.price} qty={item.qty} id={item.index} handleDelete={onItemRemove} />
                            ))

                            }
                        </div>

                    </div>
                </div>

                {/* subtotal */}
                {state.length > 0 &&
                    <div className="px-8 w-1/3 bg-white">
                        <div className="sticky top-0">

                            <h3 className="text-xl font-bold">Sub Total</h3>
                            <div className="grid gap-8 mt-6 border-b-2 border-gray-400 pb-6">

                                {state.map((item, itemKey) => (
                                    <div key={itemKey} className="w-full flex justify-between items-center">
                                        <div className="text-sm">
                                            <p className="font-semibold line-clamp-2 mb-1">{item.name}</p>
                                            <p>Rp.{item.price * item.qty}</p>
                                        </div>
                                        <p className="font-bold text-gray-500">{item.qty}x</p>
                                    </div>
                                ))}


                            </div>
                            <p className="my-2 font-semibold text-primary underline-offset-2 hover:underline hover:cursor-pointer text-sm">use coupons</p>
                            <div className="mt-4 grid gap-2 text-sm">
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
                                <p className="w-full mt-5 bg-primary rounded-lg py-2 font-semibold text-white outline-non text-center text-sm">
                                    To Payment page
                                </p>
                            </Link>

                        </div>
                    </div>
                }
            </div>
        </div >
    )
}