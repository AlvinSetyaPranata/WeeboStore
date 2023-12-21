import { motion } from 'framer-motion'
import React from 'react'

export default function Alert({ title, messege, onClose }) {

    return (
        <motion.div
            className='w-[300px] px-4 py-3 rounded-md bg-white border-primary border-2 fixed right-3 top-24 z-50 flex items-center justify-between'>
            <div className='flex-1'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='text-sm mt-2'>{messege}</p>
            </div>
            <button onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </motion.div>
    )
}
