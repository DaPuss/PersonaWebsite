import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <div className="relative animate-fade flex items-center justify-center flex-col right-0 left-0 top-0 h-[100vh]">
            <motion.div
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
            >
                <Image
                    src={'bigBoyLogo.png'}
                    loader={() => 'bigBoyLogo.png'}
                    alt="Picture of the sexy man"
                    layout="fixed" // required
                    width={150}
                    height={150}
                    objectFit="cover" // change to suit your needs
                    className="hover:cursor-pointer " // just an example
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        damping: 2,
                        repeat: Infinity,
                    }}
                    className={styles.ballContainer}
                >
                    <div className={`${styles.ball} bg-primaryHighlight`} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Loader
