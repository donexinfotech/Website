import React, { useEffect } from 'react';
import './Services.css';
import img from './images/service0.jpg';
import img1 from './images/service-1.png';
import img2 from './images/service-2.png';
import img3 from './images/service-3.png';
import img4 from './images/service-4.png';
import img5 from './images/service-5.png';
import { motion } from 'framer-motion';

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

const Services = () => {

  useEffect(() => {
    function truncateText() {
      const cardTextElements = document.querySelectorAll('.card-text');
      cardTextElements.forEach(element => {
        const fullText = element.getAttribute('data-full-text');
        if (!fullText) {
          element.setAttribute('data-full-text', element.innerText);
        }
        const text = element.getAttribute('data-full-text');
        if (text) {
          const words = text.split(' ');
          if (window.innerWidth <= 600 && words.length > 10) {
            element.innerText = words.slice(0, 10).join(' ') + '...';
          } else if (window.innerWidth > 600) {
            element.innerText = text;
          }
        }
      });
    }

    truncateText();
    window.addEventListener('resize', truncateText);

    return () => {
      window.removeEventListener('resize', truncateText);
    };
  }, []);

  const scrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementPosition = contactSection.offsetTop;
      window.scrollTo({
        top: elementPosition - 75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.h1 className='services-head' id='services'
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      >Services</motion.h1>
      <div className='services'>
        <motion.div className="card-services"
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        >
          <img src={img1} className="card-img-top" alt="Portfolio Websites" />
          <div className="card-body">
            <h5 className="card-title">Portfolio Websites</h5>
            <p className="card-text">Designed for artists, photographers, designers, and creative professionals to showcase their work.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </motion.div>
        <motion.div className="card-services"
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        >
          <img src={img2} className="card-img-top" alt="Business Websites" />
          <div className="card-body">
            <h5 className="card-title">Business Websites</h5>
            <p className="card-text">Professional sites to showcase services and contact info, enhancing online presence.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </motion.div>
        <motion.div className="card-services"
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        >
          <img src={img3} className="card-img-top" alt="Business App" />
          <div className="card-body">
            <h5 className="card-title">Business App</h5>
            <p className="card-text">Boost productivity with our app's task tracking, expense monitoring, CRM, and inventory management.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </motion.div>
        <motion.div className="card-services"
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        >
          <img src={img4} className="card-img-top" alt="Appointment Websites" />
          <div className="card-body">
            <h5 className="card-title">Appointment Websites</h5>
            <p className="card-text">Easy-to-use systems for scheduling appointments and reservations.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </motion.div>
        <motion.div className="card-services"
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        >
          <img src={img5} className="card-img-top" alt="College Projects" />
          <div className="card-body">
            <h5 className="card-title">College Projects</h5>
            <p className="card-text">Discover fun and educational projects that help you learn new things and spark creative ideas.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </motion.div>
        <motion.div className="card-services"
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        >
          <img src={img} className="card-img-top" alt="Card title" />
          <div className="card-body">
            <h5 className="card-title">Content Creation</h5>
            <p className="card-text">Craft engaging social media content to boost creativity, grow your audience, and enhance online presence effectively.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
