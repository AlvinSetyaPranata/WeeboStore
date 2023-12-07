import Image from "next/image"
import Link from "next/link"

export default function Card({ title, price, priceDiscount, imageUrl }) {
    return (
        <Link className="overflow-hidden box-border w-[180px] border-primary border-2 p-2 hover:cursor-pointer rounded-lg flex-shrink-0 bg-white" href={`/details?product=${title}`} replace>
            <div className="relative w-full h-[180px] overflow-hidden rounded-lg hover:cursor-pointer">
                <Image
                    src={imageUrl}
                    alt="card"
                    fill
                    objectFit="cover"
                    objectPosition="center center"
                />
            </div>

            <div className="grid gap-4">
                <p className="text-sm mt-2 leading-5">{title}</p>

                <div className="flex w-full gap-2">
                    <div className="px-2 py-1 text-xs bg-primary text-white font-semibold">10% OFF</div>
                    <div className="px-2 py-1 text-xs bg-red-500 text-white font-semibold">HOT SALE</div>
                </div>

                <div className="flex w-full justify-between items-center">
                    {priceDiscount != 0 && priceDiscount && <p className="text-sm line-through text-slate-400">Rp.{priceDiscount}</p>}
                    <p className="font-semibold ml-auto">Rp.{price}</p>
                </div>
            </div>
        </Link>
    )
}