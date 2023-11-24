'use client'

import Card from "@/components/Atoms/Card"
import PromoCard from "@/components/Atoms/PromoCard"
import HorizontalGroup from "@/components/Molecules/HorizontalGroup"
import { motion } from "framer-motion"


export async function getServerSideProps() {
    const res = await fetch('http://127.0.0.1:8000/api/products')
    const data = await res.json()

    return {props: { data }}
}

export default function Home({data}) {
    return (
        <main>
            <div className="pt-1 pb-12">

                {/* slider */}
                <div className="w-full bg-primary h-[100vh] mt-8 mb-12 px-20 py-12 flex flex-col justify-start items-ce nter relative">
                    <div className="flex items-center gap-12 justify-center">

                        <div>
                            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, ease: 'easeIn' }} className="text-6xl font-semibold text-white">Memorial Day</motion.h1>
                            <h3 className="text-2xl font-normal text-white">Creator is miss someone</h3>
                        </div>
                        <h1 className="text-7xl font-bold text-yellow-200">18th</h1>
                    </div>


                    <div className="absolute bottom-3 grid grid-cols-3 gap-16">
                        <PromoCard label="Promo" delay={0.1}>
                            <img src="/card1.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card2.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card1.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card2.png" alt="test" className="w-[100px] h-[100px]" />
                        </PromoCard>
                        <PromoCard label="Promo" delay={0.3}>
                            <img src="/card1.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card2.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card1.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card2.png" alt="test" className="w-[100px] h-[100px]" />
                        </PromoCard>
                        <PromoCard label="Promo" delay={0.5}>
                            <img src="/card1.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card2.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card1.png" alt="test" className="w-[100px] h-[100px]" />
                            <img src="/card2.png" alt="test" className="w-[100px] h-[100px]" />
                        </PromoCard>
                    </div>
                </div>



                <div className="px-12">

                    <div className="mt-4 mb-12 grid gap-x-12 gap-y-16">
                        <HorizontalGroup label="Sword Art Online ">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                            <Card />
                            <Card />

                            <Card />
                            <Card />
                            <Card />
                        </HorizontalGroup>
                        <HorizontalGroup label="Sword Art Online ">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                            <Card />
                            <Card />

                            <Card />
                            <Card />
                            <Card />
                        </HorizontalGroup>
                    </div>

                    {/* main content */}
                    <h3 className="font-bold text-2xl mb-4">For you</h3>
                    <div className="w-full grid grid-cols-5 gap-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>
        </main>
    )
}