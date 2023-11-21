'use client'

import { useState } from "react"

// Will use this in future if user haven't set profile photo yet 
// import { AccountIcon } from "@/components/SVG"
import Image from "next/image"
import ProfileForms from "@/components/Atoms/ProfileForms"


export default function AccountLayout() {

    const [edit, setEdit] = useState(false)

    return (
        <div className="px-12 py-12 space-y-12">
            <div className="flex gap-x-8 items-center pb-6">
                <div className="relative rounded-full w-[200px] h-[200px] overflow-hidden group hover:cursor-pointer">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        fill
                        style={{ objectFit: "cover" }}
                    />

                    {/* overlay */}
                    <div className="absolute w-full h-full bg-[rgba(0,0,0,.5)] rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in">
                        <span className="text-white">Change</span>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-3xl">Alvin Setya Pranata</h1>
                    <h3 className="text-gray-500 mt-1">Gold Member</h3>
                    <button className={`rounded-lg bg-blue-500 px-4 py-2 text-white mt-4 text-sm ${edit ? 'cursor-not-allowed opacity-75' : ''}`} onClick={() => setEdit(true)}>Edit profile</button>
                </div>
            </div>

            {edit &&
                <ProfileForms setEdit={setEdit} />
            }

            <div>
                <h2 className="text-2xl font-semibold font-heading">Actions</h2>
                <div className="space-y-12 rounded-lg px-4 py-2 border-[1px] border-gray-300 mt-4">
                    <div className="w-full">
                        <p>Hello</p>
                    </div>
                </div>
            </div>


        </div>
    )
}