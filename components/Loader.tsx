import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className="flex items-center justify-center flex-col right-0 left-0 top-0 h-[100vh]">
            <motion.div
                style={{
                    height: '50px',
                    background: '#FFD369',
                    width: '50px',
                    borderRadius: '2% 50%',
                }}
                animate={{
                    rotate: 360,
                    borderRadius: ['50% 50%', '2% 50%'],
                    x: 100,
                }}
                transition={{
                    flip: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                }}
                initial={{
                    x: -100,
                }}
            ></motion.div>
        </div>
    )
}

export default Loader
