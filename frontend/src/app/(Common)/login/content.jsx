'use client'

import React, { useRef } from 'react'

export default function Login() {
    const username = useRef()
    const password = useRef()


    const onClicked = (event) => {
        
    } 

    

    return (
        <div className='w-full min-h-screen grid place-items-center'>
            <div className='border-[1.5px] border-gray-400 rounded-lg px-4 py-6 space-y-12'>
                <h1 className='font-semibold text-2xl text-center'>Login</h1>

                {/* field */}
                <div className='space-y-2 text-sm font-medium'>
                    <p>Username</p>
                    <input ref={username} type="text" className='border-[1.5px] border-slate-300 w-[300px] px-2 py-3 rounded-md' />
                </div>


                <div className='space-y-2 text-sm font-medium'>
                    <p>Password</p>
                    <input ref={password} type="password" className='border-[1.5px] border-slate-300 w-[300px] px-2 py-3 rounded-md' />
                </div>

                <button className='w-full bg-primary text-white font-medium py-2 rounded-md hover:cursor-pointer' onClick={onClicked}>Login</button>
            </div>
        </div>
    )
}
