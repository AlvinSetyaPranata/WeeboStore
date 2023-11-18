import Link from "next/link"

export default function Footer() {
    return (
        <div className="w-full text-white py-16 px-12 grid gap-6 place-items-center border-t-[1px] border-gray-200">
            <div className="flex items-center gap-2">
                <img src="/logo.png" className="w-[30px] h-[30px]" />
                <h1 className="font-semibold text-slate-700 text-xl font-heading">WeeboStore</h1>
            </div>

            <p className="font-normal text-slate-500 text-sm">Created by Alvin Setya Pranata</p>

        </div>
    )
}