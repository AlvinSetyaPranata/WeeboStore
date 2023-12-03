'use client'


import Link from "next/link";
import { AccountIcon, CartIcon } from "../SVG";
import MarketIcon from "../SVG/MarketIcon";
import { useEffect, useReducer, useState } from "react";
import { usePathname } from "next/navigation";


// NOTE: 
// so need to make the autocomplete is appear
// and re-fetch the data to the 
// server if the input is onFocus state and input is not empty
// and the autocomplete will be disappear if the input is not
// focused 


export default function Navbar() {

    const [active, setActive] = useState(0)

    
    const searchReducer = (state, action) => {
        switch(action.type) {
            case "setFocus":
                return {value: state.value, isFocused: action.toBe}
            case "setValue":
                return {value: action.toBe, isFocused: state.isFocused}
        }
    }
    
    
    const [state, dispatch] = useReducer(searchReducer, {value: "", isFocused: false}) 
    const pathname = usePathname()
    
    useEffect(() => {
        
        switch (pathname) {
            case "/":
                setActive(1)
                break
            case "/account":
                setActive(2)
                break
            case "/cart":
                setActive(3)
                break
            default:
                setActive(0)
                break
        }
    }, [])


    return (
        <div className="sticky top-0 bg-white w-full py-6 flex items-center justify-between z-50 px-12">
            {/* logo */}
            <img src="/logo.png" alt="logo" className="w-[32px] h-[32px]" />


            {/* search */}
            <div className="w-1/2 relative">

                <div className="flex gap-2 bg-gray-100 px-2.5 py-3 rounded-lg items-center w-full">
                    <img src="/magnifier.png" alt="p" className="w-[18px] h-[18px]" />
                    <input type="text" className="w-full outline-none bg-transparent text-sm" placeholder="Search here" onChange={(e) => dispatch({type: "setValue", toBe: e.target.value})} onFocus={() => dispatch({type: "setFocus", toBe: true})} onBlur={() => dispatch({type: "setFocus", toBe: false})}/>

                </div>

                {/* autocomplete */}
                <div className={`w-full bg-white rounded-lg box-border px-4 py-2 text-sm font-heading absolute mt-2 ${state.isFocused && state.value != "" ? 'opacity-1' : 'opacity-0'}`}>
                    {/* rows */}
                    <div className="w-full">
                        <button className="w-full py-2 px-4 text-sm font-semibold text-left">{state.value}</button>
                        <button className="w-full py-2 px-4 text-sm font-semibold text-left">{state.value}</button>
                        <button className="w-full py-2 px-4 text-sm font-semibold text-left">{state.value}</button>
                    </div>
                </div>

            </div>

            {/* nav-links */}
            <div className="flex items-center gap-x-3">
                <Link onClick={() => setActive(1)} className={`rounded-full p-2 hover:cursor-pointer border-primary ${active == 1 ? 'bg-primary border-none' : 'bg-white border-[1px]'}`} href="/">
                    <MarketIcon className={`w-[20px] h-[20px] stroke-none ${active == 1 ? 'fill-white' : 'fill-primary'}`} />
                </Link>
                <Link onClick={() => setActive(3)} href="/cart" className={`rounded-full p-2 hover:cursor-pointer border-primary ${active == 3 ? 'bg-primary border-none' : 'bg-white border-[1px]'}`}>
                    <CartIcon className="w-[20px] h-[20px] stroke-none" color={active == 3 ? 'white' : '#6DCBFF'} />
                </Link>
                <Link onClick={() => setActive(2)} className={`rounded-full p-2 hover:cursor-pointer border-primary ${active == 2 ? 'bg-primary border-none' : 'bg-white border-[1px]'}`} href="/account">
                    <AccountIcon className={`w-[20px] h-[20px] stroke-none ${active == 2 ? 'fill-white' : 'fill-primary'}`} />
                </Link>

            </div>
        </div>
    )
}