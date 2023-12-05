import React, { useState } from 'react'

export default function FilterOption() {
    const [expanded, setExpanded] = useState(false)

    return (
        <button className='w-full border-b-[1.5px] border-gray-300 py-4 px-4'>
            <div className='flex items-center justify-between' onClick={() => setExpanded(state => !state)}>
                <span className='text-lg text-gray-900'>Color</span>

                {expanded ?
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                    </svg>
                    :
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                }
            </div>

            {/* options */}
            <div className='mt-8 w-full grid place-items-start'>
                <div className="flex items-center">
                    <input type="checkbox" className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500' value="red" />
                    <label className='ml-3 text-gray-500'>White</label>
                </div>

            </div>
        </button>
    )
}
