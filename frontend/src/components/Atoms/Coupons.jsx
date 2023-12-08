export default function Coupons({ discount, title, desc, owned = false }) {
    return (
        <div className="flex gap-12 w-full border-2 px-6 py-6 items-center rounded-lg border-primary hover:bg-primary group">
            <h4 className="text-2xl font-semibold text-primary  group-hover:text-white">{discount}%</h4>
            <div className="flex-1">
                <p className="text-primary group-hover:text-white font-bold text-2xl">{title}</p>
                <span className="text-primary group-hover:text-white">{desc}</span>
            </div>
            {owned ?
                <h4 className="text-primary group-hover:text-white font-semibold">3 day left</h4>
                :
                <button className="bg-primary text-white group-hover:bg-white group-hover:text-primary text-sm rounded-lg px-4 py-2 text-medium">Buy</button>
            }
        </div>
    )
}