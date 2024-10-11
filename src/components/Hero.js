import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='hero mt-5' id='home'>
            <motion.div className='content mt-5'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            >
                <p>Custom-made IT solutions</p>
                <p>to meet your business needs.</p>
            </motion.div>
        </div>
    )
}

export default Hero