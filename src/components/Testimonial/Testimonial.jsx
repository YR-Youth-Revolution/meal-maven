import React from 'react';
import './Testimonial.css';
import test1 from '/public/Website/Testimonal 1.png';
import test2 from '/public/Website/Testimonal 2.png';
import test3 from '/public/Website/Testimonal 3.png';
import test4 from '/public/Website/Testimonal 4.png';
import test5 from '/public/Website/Testimonal 5.png';
import test6 from '/public/Website/Testimonal 6.png';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      {/* First slider */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ pause: true }} 
        className="slider first-slider"
      >
        <img src={test1} alt="Testimonial 1" />
        <img src={test2} alt="Testimonial 2" />
        <img src={test3} alt="Testimonial 3" />
        <img src={test4} alt="Testimonial 4" />
        <img src={test5} alt="Testimonial 5" />
        <img src={test6} alt="Testimonial 6" />
        <img src={test1} alt="Testimonial 1" />
        <img src={test2} alt="Testimonial 2" />
        <img src={test3} alt="Testimonial 3" />
        <img src={test4} alt="Testimonial 4" />
        <img src={test5} alt="Testimonial 5" />
        <img src={test6} alt="Testimonial 6" />
      </motion.div>

      
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ pause: true }} 
        className="slider first-slider"
      >
        <img src={test1} alt="Testimonial 1" />
        <img src={test2} alt="Testimonial 2" />
        <img src={test3} alt="Testimonial 3" />
        <img src={test4} alt="Testimonial 4" />
        <img src={test5} alt="Testimonial 5" />
        <img src={test6} alt="Testimonial 6" />
        <img src={test1} alt="Testimonial 1" />
        <img src={test2} alt="Testimonial 2" />
        <img src={test3} alt="Testimonial 3" />
        <img src={test4} alt="Testimonial 4" />
        <img src={test5} alt="Testimonial 5" />
        <img src={test6} alt="Testimonial 6" />
      </motion.div>
    </div>
  );
};

export default Testimonial;
