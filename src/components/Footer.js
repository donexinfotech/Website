import React from 'react'
import './Footer.css'
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

export default function Footer() {
  return (
    <>
	<hr />
    <footer class="footer">
			
  	 		<div class="footer-col">
  	 			<motion.h4 class='sl-h4'
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				>follow us</motion.h4>
  	 			<div class="social-links">
  	 				<motion.a href="https://www.facebook.com/profile.php?id=61563584618281&mibextid=ZbWKwL"
					variants={iconVariants(2.4)}
					initial="initial"
					animate="animate"
					><i class="fab fa-facebook-f"></i></motion.a>
  	 				<motion.a href="https://x.com/x_done8128"><i class="fab fa-twitter"
					variants={iconVariants(1.5)}
					initial="initial"
					animate="animate"
					></i></motion.a>
  	 				<motion.a href="https://www.instagram.com/donexinfotech/"
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					><i class="fab fa-instagram"></i></motion.a>
  	 				<motion.a href="https://www.linkedin.com/in/donex-infotech-5b03ba321"><i class="fab fa-linkedin-in"
					variants={iconVariants(2.1)}
					initial="initial"
					animate="animate"
					></i></motion.a>
  	 			</div>
  	 </div>
  </footer>
    </>
  )
}
