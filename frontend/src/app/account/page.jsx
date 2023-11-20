import { AccountIcon } from "@/components/SVG"

export const metadata = {
    "title": "WeeboStore - AlvinSetya"
}

export default function AccountLayout() {
    return (
        <div className="px-12 py-12">
            <form>
                <div className="space-y-12">
                    <div className="flex gap-x-16 border-b-[1px] border-gray-300 pb-8">
                        <div>
                            <h2 className="font-bold">Profile</h2>
                            <p className="text-sm text-gray-600 mt-2 max-w-[250px]">This information will be displayed in public</p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-heading">Username</h3>
                                <input type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-heading">About</h3>
                                <textarea type="text" className="mt-2 outline-none rounded-md border-[1px] border-gray-300 px-3 py-2 text-sm w-[300px] min-h-[200px]" />
                                <p className="text-sm text-gray-600 mt-2">Tell them about yourself</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-heading">Photo</h3>

                                <div className="flex gap-x-4 mt-4">
                                    <div className="bg-gray-300 rounded-full p-2">
                                        <AccountIcon className="fill-white w-[25px] h-[25px]" />
                                    </div>
                                    <button className="border-[1px] border-gray-300 font-semibold text-slate-800 rounded-md px-3 py-1 text-sm">Change</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-16 border-b-[1px] border-gray-300 pb-8">

                        <div>
                            <h2 className="font-bold">Personal</h2>
                            <p className="text-sm text-gray-600 mt-2 max-w-[250px]">This information will not be displayed in public</p>
                        </div>


                        <div className="space-y-8">
                            <div className="flex items-center gap-x-12">
                                <div>
                                    <h3 className="font-heading text-sm">First Name</h3>
                                    <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-sm">Last Name</h3>
                                    <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2" />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-heading text-sm">Email Address</h3>
                                <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-[300px]" autoComplete="email" />
                            </div>

                            <div>
                                <h3 className="font-heading text-sm">Country</h3>
                                <select className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-[200px] bg-white">
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>

                            <div>
                                <h3 className="font-heading text-sm">Address</h3>
                                <textarea type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full" autoComplete="email" />
                            </div>

                            <div className="flex w-full gap-2">
                                <div>
                                    <h3 className="font-heading text-sm">City</h3>
                                    <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full" autoComplete="email" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-sm">State / Province</h3>
                                    <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full" autoComplete="email" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-sm">ZIP / Postal code</h3>
                                    <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full" autoComplete="email" />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="rounded-lg px-4 py-2 text-sm bg-blue-500 text-white">Edit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}