import Image from "next/image"
import Link from "next/link"

export default function Card({ title, price, priceDiscount, imageUrl }) {
    return (
        <Link className="overflow-hidden box-border w-max max-w-[180px] border-primary border-2 p-2 hover:cursor-pointer rounded-lg flex-shrink-0 bg-white grid place-items-center" href={`/details?product=${title}`} replace>
            <div className="relative w-[150px] h-[150px] overflow-hidden rounded-lg hover:cursor-pointer">
                <Image
                    src={imageUrl}
                    alt="card"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="100vw"
                />
            </div>

            <div className="grid gap-4">
                <p className="text-sm mt-2 leading-5">{title}</p>

                <div className="flex w-full gap-2">
                    <p className="px-2 py-1 text-xs bg-primary text-white font-semibold">10% OFF</p>
                    <p className="px-2 py-1 text-xs bg-red-500 text-white font-semibold">HOT SALE</p>
                </div>

                <div className="flex w-full justify-between items-center text-sm">
                    {priceDiscount != 0 && priceDiscount && <p className="text-sm line-through text-slate-400">Rp.{priceDiscount}</p>}
                    <p className="font-semibold ml-auto">Rp.{price}</p>
                </div>
            </div>
        </Link>
    )
}