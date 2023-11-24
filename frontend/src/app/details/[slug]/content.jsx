'use client'


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Details() {
    const [expanded, setExpanded] = useState(false)
    const [image, setImage] = useState(1)
    const [qty, setQty] = useState(0)
    const router = useRouter()


    const handleMinus = () => {
        if (qty < 0) return
        
        setQty(latestValue => latestValue - 1)
    }
    
    const handleAdd = () => {

        // change later to total items
        if (qty > 10) return

        setQty(latestValue => latestValue + 1)
    }

    
    const handleAddCart = () => {
        router.push('/cart')
    }



    return (
        <div className="flex gap-4 py-12">
            <div>
                <div className="w-[250px] h-[250px] relative">
                    <Image
                        src={image == 1 ? "/card1.png" : "/card2.png"}
                        alt="card"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="flex gap-x-2 w-full mt-2">
                    {/* itterate trough later on */}
                    <button onClick={() => setImage(1)} className="border-[1.5px] hover:border-gray-500">
                        <img src="/card1.png" alt="images" className="w-[50px] h-[50px] object-cover" />
                    </button>
                    <button onClick={() => setImage(2)} className="border-[1.5px] hover:border-gray-500">
                        <img src="/card2.png" alt="images" className="w-[50px] h-[50px]" />
                    </button>
                </div>
            </div>

            {/* content */}
            <div>
                <h1 className="text-3xl font-semibold">Jacket cosplay kirito</h1>
                <div className="flex gap-2 w-full text-sm mt-1 text-gray-500">
                    <p>Terjual 21</p>
                    <p>•</p>
                    <p>4.7 Rating</p>
                    <p>•</p>
                    <p>Sisa 2 Item</p>
                </div>

                {/* badges */}
                <div className="grid grid-cols-4 mt-2 gap-2">
                    <div className="px-2 py-1 text-xs bg-red-500 text-white font-semibold text-center">HOT SALE</div>
                    <div className="px-2 py-1 text-xs bg-primary text-white font-semibold text-center">PROMO</div>
                </div>

                {/* description */}
                {/* max-h-[200px] overflow-y-auto */}

                <p className={`text-gray-500 max-w-[300px] text-sm mt-4  leading-7 ${expanded ? 'line-clamp-none' : 'line-clamp-5'}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur, repellat qui voluptatum cum possimus natus voluptatibus tempora accusamus? Exercitationem, dolorum ipsum assumenda qui quo totam repellat eius. Ratione, suscipit!
                    Dolores quos veritatis magnam facere iste ratione at facilis unde nam, exercitationem dolorum reprehenderit nesciunt totam voluptatum minus porro nihil, aspernatur iure explicabo voluptas eum atque pariatur. Nesciunt, omnis illo!
                </p>
                <button className="text-primary text-sm hover:underline underline-offset-2" onClick={() => setExpanded(latestState => !latestState)}>{expanded ? 'Hide' : 'Read more'}</button>
                {/* price */}
                <div className="flex justify-between mt-6">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-gray-500 line-through text-sm">Rp 20.000</h3>
                        <h3 className="font-bold text-xl">Rp 15.000</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button onClick={handleMinus}>-</button>
                        <input type="text" className="border-2 border-gray-300  rounded-lg py-0.5 max-w-[80px] text-sm text-center foont-semibold" value={qty} onChange={() => {}}/>
                        <button onClick={handleAdd}>+</button>
                    </div>
                </div>


                <button href="/cart" onClick={handleAddCart} className="w-full static text-center py-2 bg-primary text-white rounded-lg mt-8 outline-none">
                    Add to cart
                </button>
            </div>

        </div>
    )
}