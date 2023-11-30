'use client'


import Link from "next/link";
import { AccountIcon, CartIcon } from "./SVG";
import MarketIcon from "./SVG/MarketIcon";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import Image from "next/image";


export default function Navbar() {

    const [active, setActive] = useState(1)
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
            <img src="/logo.png" alt="logo" className="w-[32px] h-[32px]" />
           
           
            <div className="flex gap-2 bg-gray-100 px-2.5 py-3 rounded-lg items-center w-1/2">
                <img src="/magnifier.png" alt="p" className="w-[18px] h-[18px]" />
                <input type="text" className="w-full outline-none bg-transparent text-sm" placeholder="Search here" />
            </div>
            <div className="flex items-center gap-x-3">
                <Link onClick={() => setActive(1)} className={`rounded-full p-2 hover:cursor-pointer border-primary ${active == 1 ? 'bg-primary border-none' : 'bg-white border-[1px]'}`} href="/">
                    <MarketIcon className={`w-[20px] h-[20px] stroke-none ${active == 1 ? 'fill-white' : 'fill-primary'}`} />
                </Link>
                <Link onClick={() => setActive(2)} className={`rounded-full p-2 hover:cursor-pointer border-primary ${active == 2 ? 'bg-primary border-none' : 'bg-white border-[1px]'}`} href="/account">
                    <AccountIcon className={`w-[20px] h-[20px] stroke-none ${active == 2 ? 'fill-white' : 'fill-primary'}`} />
                </Link>
                <Link onClick={() => setActive(3)} href="/cart" className={`rounded-full p-2 hover:cursor-pointer border-primary ${active == 3 ? 'bg-primary border-none' : 'bg-white border-[1px]'}`}>
                    <CartIcon className="w-[20px] h-[20px] stroke-none" color={active == 3 ? 'white' : '#6DCBFF'} />
                </Link>
            </div>
        </div>
    )
}