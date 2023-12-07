'use client'


import Card from "@/components/Atoms/Card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useReducer, useState } from "react";

export default function Details() {
    const [expanded, setExpanded] = useState(false)
    const [image, setImage] = useState(1)
    const router = useRouter()

    const qtyReducer = (state, action) => {
        switch (action.type) {
            case "MIN":
                if (state.value < 0) return { value: state.value }
                return { value: state.value - 1 }
            case "ADD":
                if (state.value >= 10) return { value: state.value }
                return { value: state.value + 1 }
            default:
                console.log(state.value)
                if (state.value >= 10 && state.value < 0 && !state.isFocused) {
                    return { value: 0 }
                }
                return { value: action.value }

        }
    }

    const [state, dispatch] = useReducer(qtyReducer, { value: 0, isFocused: false })


    const handleAddCart = () => {
        router.push('/cart')
    }



    return (
        <>
            <div className="px-12 w-full">
                <Link href="/" className="text-xl font-semibold hover:underline underline-offset-2 hover:cursor-pointer w-max">Go Back</Link>
            </div>


            {/* content */}
            <div className="flex gap-8 py-20">

                <div>
                    <div className="w-[250px] h-[250px] relative">
                        <Image 
                            src={image == 1 ? "/card1.png" : "/card2.png"}
                            alt="card"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center center" }}
                            sizes="100vw"
                        />
                    </div>

                    <div className="flex gap-x-2 w-full mt-2">
                        {/* itterate trough later on */}
                        <button onClick={() => setImage(1)} className="border-[1.5px] hover:border-gray-500">
                            <div className="w-[50px] h-[50px]">
                                <Image  src="/card1.png" alt="images" style={{ objectFit: "cover", objectPosition: "center center" }} sizes="100vw"/>
                            </div>
                        </button>
                        <button onClick={() => setImage(2)} className="border-[1.5px] hover:border-gray-500">
                            <div className="w-[50px] h-[50px]">
                                <Image  src="/card1.png" alt="images" fill style={{objectFit: "cover", objectPosition: "center center"}} sizes="100vw"/>
                            </div>
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
                            <button onClick={() => dispatch({ type: "MIN" })}>-</button>
                            <input type="text" className="border-2 border-gray-300  rounded-lg py-0.5 max-w-[80px] text-sm text-center foont-semibold" value={state.value} onChange={(e) => dispatch({ type: "", value: e.target.value, isFocused: true })} onFocus={() => dispatch({ type: "", isFocused: true })} onBlur={() => dispatch({ type: "", isFocused: false })} />
                            <button onClick={() => dispatch({ type: "ADD" })}>+</button>
                        </div>
                    </div>


                    <button href="/cart" onClick={handleAddCart} className="w-full static text-center py-2 bg-primary text-white rounded-lg mt-8 outline-none">
                        Add to cart
                    </button>
                </div>
            </div>

            {/* Related content */}
            <div className="w-full px-16">
                <h2 className="text-2xl font-semibold">You might want</h2>
                <div className="mt-6 w-full grid grid-cols-5 gap-x-1 gap-y-4   ">
                    <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                    <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                    <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                    <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                    <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                    <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />

                </div>
            </div>
        </>
    )
}