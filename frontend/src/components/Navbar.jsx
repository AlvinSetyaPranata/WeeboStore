import { Account, Cart } from "./SVG";

export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white w-full py-6 flex items-center justify-between z-50">
            <img src="logo.png" alt="logo" className="w-[32px] h-[32px]" />
            <div className="flex gap-2 bg-gray-100 px-2.5 py-3 rounded-lg items-center w-1/2">
                <img src="magnifier.png" alt="p" className="w-[18px] h-[18px]" />
                <input type="text" className="w-full outline-none bg-transparent text-sm" placeholder="Search here" />
            </div>
            <div className="flex items-center gap-x-3">
                <div className="rounded-full p-2 bg-primary">
                    <Account className="w-[20px] h-[20px] stroke-none fill-white" />
                </div>
                <div className="rounded-full p-2 bg-primary">
                    <Cart className="w-[20px] h-[20px]" color="white"/>
                </div>
            </div>
        </div>
    )
}