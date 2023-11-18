'use client'

import { useRef, useState } from "react"
import { ArrowBack, ArrowNext } from "../SVG"


export default function HorizontalGroup({ children, label }) {
    const [index, setIndex] = useState(0)

    const sliderWrapperRef = useRef()
    const sliderContainerRef = useRef()

    const isEdgeReached = (edge) => {
        const sliderContainerRect = sliderContainerRef.current.getBoundingClientRect()
        const sliderWrapperRect = sliderWrapperRef.current.getBoundingClientRect()

        if (edge == "left") {
            return sliderWrapperRect.x >= sliderContainerRect.x
        } else {
            return ((sliderWrapperRect.width + sliderWrapperRect.x) - sliderContainerRect.width) <= 0
        }
    }

    const nextSlide = () => {
        if (isEdgeReached("right")) return
        

        setIndex((currentPos) => currentPos - 100);
    };
    
    const prevSlide = () => {
        if (isEdgeReached("left")) return

        setIndex((currentPos) => currentPos + 100);
      };

    return (
        <div className="group min-w-full relative">
            <div className={`w-full flex opacity-0 justify-between absolute top-[50%] z-20 group-hover:opacity-100 ${children.length <= 4 ? 'hidden' : 'flex'}`}>
                <button className="rounded-full p-2 bg-slate-200" onClick={prevSlide}>
                    <ArrowBack className="w-[30px] h-[30px]" />
                </button>
                <button className="rounded-full p-2 bg-slate-200" onClick={nextSlide}>
                    <ArrowNext className="w-[30px] h-[30px]" />
                </button>
            </div>
            <h3 className="text-xl font-bold mb-4">{label}</h3>
            <div ref={sliderContainerRef} className="box-border overflow-x-hidden pl-4 py-2">
                <div ref={sliderWrapperRef} className="w-max duration-100 transition-transform ease-in flex gap-x-4 px-2" style={{transform: `translateX(${index}px)`}}>
                    {children}
                </div>
                {/* {children.map((children, i) => (
                    <div className="duration-100 transition-transform ease-in" style={{transform: `translateX(${100*(i-index)}%)`}} key={i}>
                        {children}
                    </div>
                ))} */}
            </div>
        </div>
    )
}