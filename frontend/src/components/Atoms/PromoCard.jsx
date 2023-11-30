import { easeIn, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function PromoCard({ label, images }) {
    const variants = {
        'initial': { y: 250, opacity: 0 },
        'animate': { y: 0, opacity: 1 }
    }

    return (
        <motion.div
            variants={variants}
            transition={{ duration: 0.5, ease: easeIn }}
            className="bg-white px-6 py-4">
            <h3 className="font-semibold text-3xl lg:text-2xl mb-8">{label}</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {images.map((image, key) => (
                    <Image src={image} width={200} height={200} key={key}/>
                ))}
            </div>
            <div className="flex justify-end">
                <Link href="/" className="text-gray-600 font-semibold px-2 py-1 text-sm">Beli Sekarang</Link>
            </div>
        </motion.div>
    )
}