'use client'

import { easeIn, easeOut, motion } from 'framer-motion'
import React, { useState } from 'react'

export default function SortOption() {
    const [sortFocused, setSortFocused] = useState(false)
    const [optionSelected, setOptionSelected] = useState(0)

    const optionsVariants = {
        hide: {
            x: -20,
            y: -20,
            opacity: 0,
            display: 'none',
            transition: {
                display: {
                    delay: 0.5
                },
                duration: 0.1,
                ease: 'easeIn'
            } 
        },

        show: {
            x: 0,
            y: 0,
            opacity: 1,
            display: 'grid',
            transition: {
                duration: 0.1,
                ease: 'easeOut'
            } 
        }
    }

    // Will be presented as props later
    const options = [
        "Sort",
        "Most Popular",
        "Newest",
        "Oldest"
    ]

    return (
        <div className='relative' onBlur={() => setSortFocused(false)}>
            <button onClick={() => setSortFocused(state => !state)} className='flex items-center text-gray-500 outline-none'>
                {options[optionSelected]}
                <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
            </button>

            {/* options container */}
            <motion.div
                initial="hide"
                animate={sortFocused ? 'show' : 'hide'}
                variants={optionsVariants}
                className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 gap-y-1 py-2 font-medium">
                <button onClick={() => setOptionSelected(1)} className={`px-4 hover:bg-gray-200 text-left w-full py-2 ${optionSelected == 1 ? 'text-black' : 'text-gray-600'}`}>Most Popular</button>
                <button onClick={() => setOptionSelected(2)} className={`px-4 hover:bg-gray-200 text-left w-full py-2 ${optionSelected == 2 ? 'text-black' : 'text-gray-600'}`}>Newest</button>
                <button onClick={() => setOptionSelected(3)} className={`px-4 hover:bg-gray-200 text-left w-full py-2 ${optionSelected == 3 ? 'text-black' : 'text-gray-600'}`}>Oldest</button>
            </motion.div>
        </div>
    )
}
