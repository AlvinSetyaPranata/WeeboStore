import Link from "next/link"


export default function PromoCard({ label, children }) {
    return (
        <div className="bg-white px-6 py-4">
            <h3 className="font-semibold text-2xl mb-8">{label}</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {children}
            </div>
            <div className="flex justify-end">
                <Link href="/" className="text-gray-600 font-semibold px-2 py-1 text-sm">Beli Sekarang</Link>
            </div>
        </div>
    )
}