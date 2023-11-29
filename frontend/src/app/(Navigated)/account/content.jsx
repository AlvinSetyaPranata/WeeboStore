'use client'

/*

[
    {
        "id": 1,
        "name": "Alvin Setya Pranata",
        "description": "Ohayou nii-chan ^-^",
        "member_type": "3",
        "date_registered": "2023-11-24T22:07:20.706497Z"
    }
]


*/

import { useState } from "react"

// Will use this in future if user haven't set profile photo yet 
// import { AccountIcon } from "@/components/SVG"
import Image from "next/image"
import ProfileForms from "@/components/Atoms/ProfileForms"
import Link from "next/link"
import HeadphoneIcon from "@/components/SVG/HeadphoneIcon"
import QuestionMark from "@/components/SVG/QuestionMark"
import InformationIcon from "@/components/SVG/InformationIcon"
import Coupons from "@/components/Atoms/Coupons"
import { ArrowNext } from "@/components/SVG"


export default function Account() {

    const [edit, setEdit] = useState(false)

    return (
        <div className="px-12 py-12 space-y-16">
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
                    <div className="flex gap-2 items-center">
                        <h3 className="text-gray-500 mt-1 font-semibold">Weebo Member</h3>
                    </div>
                </div>
            </div>

            {/* forms section */}

            <div>
                <h2 className="text-2xl font-semibold font-heading">About your account</h2>
                {!edit &&
                    <button className={`rounded-lg bg-blue-500 px-4 py-2 text-white mt-4 text-sm ${edit ? 'cursor-not-allowed opacity-75' : ''}`} onClick={() => setEdit(true)}>Edit profile</button>
                }

                <div className="w-full py-12 empty:py-0">
                    {edit &&
                        <ProfileForms setEdit={setEdit} />
                    }
                </div>
            </div>


            <div>
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-2xl font-semibold font-heading">Owned Coupons</h2>
                    <Link href="/account" className="flex items-center group">
                        <p className="font-semibold text-primary text-sm group-hover:underline">Get more coupons</p>
                        <ArrowNext className="w-[10px] h-[10px]" color="rgb(109, 203, 255)" />
                    </Link>
                </div>
                <div className="space-y-6 rounded-lg p-2 py-8">
                    <Coupons discount="30" title="30th April" desc="What happened in that day?" />
                    <Coupons discount="60" title="Ramadhan Special Sale" desc="Month of forgiveness and blessings" />
                </div>

            </div>




            {/* other stuff section */}

            <div>
                <h2 className="text-2xl font-semibold font-heading">Other stuff</h2>
                <div className="space-y-12 rounded-lg p-2 border-[1px] border-gray-300 mt-4">
                    <div className="w-full px-3 py-4 space-y-8">

                        {/* action buttons */}
                        <div className="flex items-center gap-2 hover:cursor-pointer pt-2 border-b-[1px] border-gray-300 pb-6">
                            <HeadphoneIcon color="black" className="w-[20px] h-[20px]" />
                            <Link href="/account" className="text-sm text-slate-600">
                                Contact us
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 hover:cursor-pointer pt-2 border-b-[1px] border-gray-300 pb-6">
                            <QuestionMark className="w-[20px] h-[20px]" color="black" />
                            <Link href="/account" className="text-sm text-slate-600">
                                Need Help
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 hover:cursor-pointer pt-2 border-b-[1px] border-gray-300 pb-6">
                            <InformationIcon className="w-[20px] h-[20px]" color="black" />
                            <Link href="/account" className="text-sm text-slate-600">
                                About us
                            </Link>
                        </div>



                    </div>
                </div>
            </div>


        </div>
    )
}