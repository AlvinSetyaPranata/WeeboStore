export default function ProfileForms(props) {

    return (
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
                                <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 outline-none" />
                            </div>
                            <div>
                                <h3 className="font-heading text-sm">Last Name</h3>
                                <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 outline-none" />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading text-sm">Email Address</h3>
                            <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-[300px] outline-none" autoComplete="email" />
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
                            <textarea type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full outline-none" autoComplete="email" />
                        </div>

                        <div className="flex w-full gap-2">
                            <div>
                                <h3 className="font-heading text-sm">City</h3>
                                <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full outline-none" autoComplete="email" />
                            </div>
                            <div>
                                <h3 className="font-heading text-sm">State / Province</h3>
                                <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full outline-none" autoComplete="email" />
                            </div>
                            <div>
                                <h3 className="font-heading text-sm">ZIP / Postal code</h3>
                                <input type="text" className="border-[1px] border-gray-300 rounded-lg px-2 py-1 mt-2 w-full outline-none" autoComplete="email" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">

                            <button className="rounded-lg px-4 py-2 text-sm bg-red-500 text-white" onClick={() => props.setEdit(false)}>Cancel</button>
                            <button className="rounded-lg px-4 py-2 text-sm bg-green-500 text-white">Change</button>

                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}