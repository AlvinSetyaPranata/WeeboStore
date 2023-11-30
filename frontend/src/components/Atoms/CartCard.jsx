import TrashIcon from "../SVG/TrashIcon"


export default function CartCard({onAdd, onMinus, value=0}) {
    return (

        <div className="w-full px-2 py-1 pb-4 flex gap-4 border-b-2 border-gray-100 mb-4">
            <div className="flex items-center">
                <TrashIcon color="red" />
                <img src="/card1.png" alt="example" className="w-[120px] h-[120px] ml-3"/>
            </div>
            <div className="flex flex-col justify-between">
                <div>

                    <label className="font-semibold text-lg line-clamp-1">Jaket cosplay asuna - Sword Art online</label>
                    <p className="text-green-600 text-sm">Stock Available</p>
                </div>

                <div className="flex justify-between w-full">
                    <p className="font-bold">Rp.300.000</p>

                    <div className="flex gap-2 items-center">
                        <button onClick={onMinus}>-</button>
                        <input type="text" className="border-2 border-gray-300  rounded-lg py-0.5 max-w-[80px] text-sm text-center foont-semibold" value={value} onChange={() => {}}/>
                        <button onClick={onAdd}>+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}