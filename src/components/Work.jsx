import React from 'react'
import portfolio from './works/Screenshot 2024-08-04 120921.png'
import report from './works/reportcard.png'
import rbook from './works/rbook.png'
import './work.css'
import shyamsPortfolio from './works/portfolio.png'
import a1 from "./works/a1.png";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

export default function Work() {
  return (
    <div id='works' className='works'>
        <motion.div className="heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        >
            <h2 className='fw-bold'>Our Works</h2>
        </motion.div>
      <motion.div id="carouselExampleCaptions" class="carousel slide"
      variants={iconVariants(2.4)}
      initial="initial"
      animate="animate"
      >
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <a href="https://ankit-mathapati.vercel.app"><img src={portfolio} class="d-block caro-img mx-auto" alt="Work1"/></a>
            <div class="carousel-caption d-none d-md-block">
                <h5>Portfolio Website</h5>
                <p>This was a portfolio website made for a client to showcase his skills and achievements</p>
            </div>
            </div>
            <div class="carousel-item">
            <a href="https://shyam-jet.vercel.app/#"><img src={shyamsPortfolio} class="d-block caro-img mx-auto" alt="..."/></a>
            <div class="carousel-caption d-none d-md-block caro-text">
                <h5>Portfolio Website</h5>
                <p>This was a portfolio website made for a client to showcase his skills and achievements</p>
            </div>
            </div>
            <div class="carousel-item">
            <a href="#"><img src={rbook} class="d-block caro-img mx-auto" alt="..."/></a>
            <div class="carousel-caption d-none d-md-block caro-text">
                <h5>Recipe Book</h5>
                <p>This is a Recipe book website made in order to showcase recipe's of verious foods in this website</p>
            </div>
            </div>
            <div class="carousel-item">
            <a href="https://a1-market.vercel.app/"><img src={a1} class="d-block caro-img mx-auto" alt="..."/></a>
            <div class="carousel-caption d-none d-md-block caro-text">
                <h5>A-1 Market</h5>
                <p>An E-commerce store designed to buy items with functionality of cart user registration login etc...</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{"animation" : "none"}}>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{"animation" : "none"}}>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </motion.div>
    </div>
  )
}
