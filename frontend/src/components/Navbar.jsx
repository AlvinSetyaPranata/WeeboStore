import { Account } from "./SVG";

export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white w-full py-6 flex items-center justify-between">
            <img src="logo.png" alt="logo" className="w-[32px] h-[32px]" />
            <div className="flex items-center gap-x-3">
                <div className="flex gap-2 bg-gray-100 px-2.5 py-2 rounded-lg items-center">
                    <img src="magnifier.png" alt="p" className="w-[18px] h-[18px]" />
                    <input type="text" className="w-full outline-none bg-transparent text-sm" placeholder="Search here" />
                </div>
                <div className="rounded-full p-2 bg-primary">
                    <Account className="w-[20px] h-[20px] stroke-none fill-white" />
                </div>
            </div>
        </div>
    )
}