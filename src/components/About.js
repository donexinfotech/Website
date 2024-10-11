import React from 'react'
import './About.css'
import IconCloud from "./magicui/icon-cloud.tsx";
import { motion } from "framer-motion"

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];


const About = () => {
    return (
    <div className='about' id='about'>
    <h1>About US</h1>
    <div className="container1">
        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1 }}
        className="mobile relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
        </motion.div>
        <motion.div
        className="content"
        whileInView={{opacity:1, x:0}}
        initial={{x:100, opacity:0}}
        transition={{duration:1, delay:0.5}}
        >
            <h2>Welcome to Our Website</h2>
            <p>DoneXInfotech, excels in creating custom websites and apps.
                We focus on enhancing your digital presence and optimizing
                operations to drive business success. With our tailored 
                solutions, we ensure your online platforms are effective,
                user-friendly, and aligned with your strategic goals in the
                competitive digital market.</p>
        </motion.div>
    </div>
</div>

    )
}

export default About