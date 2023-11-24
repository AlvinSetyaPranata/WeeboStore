import Image from "next/image"
import Link from "next/link"

export default function Card() {
    return (
        <Link className="overflow-hidden box-border w-[180px] border-primary border-2 p-2 hover:cursor-pointer rounded-lg flex-shrink-0 bg-white" href="/details/1">
            <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                    src="/card1.png"
                    alt="card"
                    fill
                    style={{objectFit: "cover"}}
                />
            </div>

            <div className="grid gap-4">
                <p className="text-sm mt-2 leading-5">Baju Asuna, Sword Art Online (Ordinal Scale).</p>

                <div className="flex w-full gap-2">
                    <div className="px-2 py-1 text-xs bg-primary text-white font-semibold">10% OFF</div>
                    <div className="px-2 py-1 text-xs bg-red-500 text-white font-semibold">HOT SALE</div>
                </div>

                <div className="flex w-full justify-between items-center">
                    <p className="text-sm line-through text-slate-400">Rp.120.000</p>
                    <p className="font-semibold">Rp.80.000</p>
                </div>
            </div>
        </Link>
    )
}