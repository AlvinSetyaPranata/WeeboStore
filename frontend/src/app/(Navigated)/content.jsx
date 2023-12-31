'use client'

import Card from "@/components/Atoms/Card"
import CatagoryCard from "@/components/Atoms/CatagoryCard"
import PromoCard from "@/components/Atoms/PromoCard"
import HorizontalGroup from "@/components/Molecules/HorizontalGroup"
import PromoCardContiner from "@/components/Molecules/PromoCardContiner"
import { motion } from "framer-motion"


export default function Home({ data }) {

    return (
        <div className="pt-1 pb-12">

            {/* slider */}
            <div className="w-full bg-primary h-max mt-8 mb-12 p-12 flex flex-col justify-start items-center relative box-border">
                <div className="flex items-center gap-12 justify-center">

                    <div>
                        <motion.h1
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeIn' }} className="text-6xl font-semibold text-white">Memorial Day</motion.h1>
                        <motion.h3
                            className="text-2xl font-normal text-white"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}
                        >Creator is miss someone</motion.h3>
                    </div>
                    <motion.h1
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeIn', delay: 0.9 }}
                        className="text-7xl font-bold text-yellow-200"

                    >18th</motion.h1>
                </div>


                <PromoCardContiner className="top-[300px] left-0 px-8 grid grid-cols-3 gap-16 mt-24 w-max" delay={1}>
                    <PromoCard label="Promo" images={["/card1.png", "/card2.png", "/card2.png", "/card1.png"]} />
                    <PromoCard label="Promo" images={["/card1.png", "/card2.png", "/card2.png", "/card1.png"]} />
                    <PromoCard label="Promo" images={["/card1.png", "/card2.png", "/card2.png", "/card1.png"]} />
                </PromoCardContiner>


                <div className="mt-6 w-full px-4 box-border">
                    <div className="grid grid-cols-3 mt-4 gap-y-4 gap-x-12">
                        <CatagoryCard />
                        <CatagoryCard />
                        <CatagoryCard />
                    </div>
                </div>
            </div>


            {/* main */}
            <div className="px-12 mt-4">



                {/* slides by Popular  */}
                <div className="mt-4 mb-12 grid gap-x-12 gap-y-16">
                    <HorizontalGroup label="Sword Art Online ">
                        {/* {data.map((item, key) => <Card key={key} title={item.title} price={item.price} priceDiscount={item.discount_price} imageUrl={item.product_image} />)} */}
                        <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                        <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                        <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                        <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                        <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                        <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                        <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                        <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                    </HorizontalGroup>

                </div>

                {/* main content */}
                <h3 className="font-bold text-2xl mb-4">For you</h3>
                <div className="w-full grid gap-y-8 gap-x-4 grid-cols-5 xl:grid-cols-7 xl:gap-x-1">
                    {data.length == 0 && <h1>No connection to the server</h1>}
                    {data.map((item, key) => (<Card key={key} title={item.title} price={item.price} priceDiscount={item.discount_price} imageUrl={item.product_image} />))}

                    {/* <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                    <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                    <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                    <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" />
                    <Card title="Jaket kirito - SAO" price="30000" priceDiscount="120000" imageUrl="/card2.png" />
                    <Card title="Jaket Asuna - SAO" price="30000" imageUrl="/card1.png" /> */}

                </div>
            </div>

        </div>

    )
}