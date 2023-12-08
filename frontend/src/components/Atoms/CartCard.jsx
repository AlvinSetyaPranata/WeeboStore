'use client'

import Image from "next/image"
import TrashIcon from "../SVG/TrashIcon"
import { useEffect, useReducer } from "react"


export default function CartCard({ next, title, id, handleDelete, price = 0, qty = 0 }) {
    const updateValueReducer = (state, action) => {
        let newState = {}

        switch (action.type) {
            case "MIN":
                if (state.value <= 0) {
                    newState["value"] = state.value
                } else {
                    newState["value"] = state.value - 1
                }
                break

            case "ADD":
                if (state.value >= 10) {
                    newState["value"] = state.value
                } else {
                    newState["value"] = state.value + 1
                }
                break

            case "CUSTOM":
                newState["value"] = action.value
        }

        return newState
    }




    const checkInput = () => {
        if (state.value >= 10) {
            dispatch({ type: "CUSTOM", value: 10 })
        }
        else if (state.value < 0) {
            dispatch({ type: "CUSTOM", value: 0 })
        }
    }



    const [state, dispatch] = useReducer(updateValueReducer, { value: qty })
    useEffect(() => next(id, state.value), [state.value])

    return (

        <div className="w-full px-2 py-1 pb-4 flex gap-4 border-b-2 border-gray-100 mb-4">
            <div className="flex items-center">
                <button onClick={() => handleDelete(id)} className="outline-none">
                    <TrashIcon color="red" />
                </button>

                <div className="w-[120px] h-[120px] ml-3 relative">

                    <Image src="/card1.png" alt="example" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="100vw" />

                </div>
            </div>
            <div className="flex flex-col justify-between">
                <div>

                    <label className="font-semibold line-clamp-1">{title}</label>
                    <p className="text-green-600 text-sm">Stock Available</p>
                </div>

                <div className="flex justify-between w-full">
                    <p className="font-bold">Rp.{price}</p>

                    <div className="flex gap-2 items-center">
                        <button onClick={() => dispatch({ type: "MIN" })}>-</button>
                        <input type="text" className="border-2 border-gray-300  rounded-lg py-0.5 max-w-[80px] text-sm text-center foont-semibold" value={state.value} onChange={(e) => dispatch({ type: "CUSTOM", value: e.target.value })} onBlur={checkInput} />
                        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}