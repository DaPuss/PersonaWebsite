import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className="animate-fade flex items-center justify-center flex-col right-0 left-0 top-0 h-[100vh]">
            <motion.div
                animate={{
                    rotate: 180,
                    opacity: 1,
                }}
                transition={{
                    type: 'spring',
                    repeat: 1,
                    duration: 3,
                    repeatType: 'mirror',
                }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    style={{
                        right: 0,
                        top: 0,
                        height: '50px',
                        background: '#FFD369',
                        width: '50px',
                        borderRadius: '50%',
                    }}
                    className="handle"
                    initial={{ x: -100 }}
                    animate={{ x: 100 }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                />
                <motion.div
                    style={{
                        right: 0,
                        top: 0,
                        height: '50px',
                        background: '#FFD369',
                        width: '50px',
                        borderRadius: '50%',
                    }}
                    className="handle"
                    initial={{ x: 100 }}
                    animate={{ x: -100 }}
                    transition={{
                        duration: 1,

                        type: 'spring',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                />
            </motion.div>
        </div>
    )
}

export default Loader
