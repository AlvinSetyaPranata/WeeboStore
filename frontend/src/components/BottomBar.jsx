import Link from "next/link"
import { Account, Cart, HomeIcon, Trending } from "./SVG"


export default function BottomBar() {

    return (
        <div className="w-1/2 left-1/2 -translate-x-1/2 bg-white border-2 border-gray-200 sticky bottom-4 px-1 py-3 rounded-lg flex justify-evenly">
            <Link className="grid place-items-center" href="/">
                <HomeIcon className="w-[30px] h-[30px]" />
                <p className="text-xs text-gray-500 mt-1">Home</p>
            </Link>

            <Link className="grid place-items-center" href="trending/">
                <Trending className="w-[30px] h-[30px]" />
                <p className="text-xs text-gray-500 mt-1">Trending</p>
            </Link>

            <Link className="grid place-items-center" href="cart/">
                <Cart className="w-[30px] h-[30px]" />
                <p className="text-xs text-gray-500 mt-1">Cart</p>
            </Link>

            <Link className="grid place-items-center" href="account/">
                <Account className="w-[30px] h-[30px]" />
                <p className="text-xs text-gray-500 mt-1">Home</p>
            </Link>

        </div>
    )
}