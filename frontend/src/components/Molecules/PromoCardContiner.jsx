// COntainer for promo card

'use client'


import { motion } from 'framer-motion'
import React from 'react'

export default function PromoCardContiner({children, className, delay=0}) {
  
return (
    <motion.div
        initial="initial"
        animate="animate"
        transition={{staggerChildren: 0.1, delayChildren: delay}}
        className={className}
>
        {children}
    </motion.div>
  )
}
