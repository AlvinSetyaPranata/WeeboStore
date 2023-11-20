import { AccountIcon } from "@/components/SVG"

export const metadata = {
    "title": "WeeboStore - AlvinSetya"
}

export default function AccountLayout() {
    return (
        <div className="px-12 py-12">
            <form>
                <div className="flex gap-x-20">
                    <div>
                        <h2 className="font-bold">Profile</h2>
                        <p className="text-sm text-gray-600 mt-1">This information will be displayed publicly</p>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-800">Username</h3>
                            <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-800">About</h3>
                            <textarea type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px] min-h-[200px]" />
                            <p className="text-sm text-gray-600 mt-2">Tell them about yourself</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-800">Photo</h3>

                            <div className="flex gap-x-4 mt-4">
                                <div className="bg-gray-300 rounded-full p-2">
                                    <AccountIcon className="fill-white w-[20px] h-[20px]" />
                                </div>
                                <button className="border-[1px] border-gray-300 font-semibold rounded-md px-2 py-1 text-sm">Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}