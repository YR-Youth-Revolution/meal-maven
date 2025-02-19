import React from 'react'
import './Value.css'
import one from '/public/Website/cook-one.png'
import two from '/public/Website/cook-two.png'
import { motion } from "framer-motion";
 
const Values = () => {
  
  return (
    <>
    <div className="values-container">
        <div className="mission-box">
        <div className="mission">
        <motion.h2>Mission</motion.h2>
        <motion.p className='p-text'>We are dedicated to delivering the <span className="highlight">taste of home</span><br/> to the Indian community in Canada. Meal Maven<br/> is more than a service; it will be a journey back to<br/> the flavors of your homeland, delivered with care<br/> and convenience.</motion.p>
      </div>
      <motion.div className="image-container" >
      <motion.img src={one} alt="Cooking Illustration" className="illustration mission-img moving-obj"  />
      </motion.div>
        </div>
      

      <div className="vission-box">  
      <motion.div className="image-container">
      <motion.img src={two} alt="Cooking Illustration" className="illustration vision-img moving-obj"  />
      </motion.div>

      <div className="vision">
        <motion.h2>Vision</motion.h2>
        <motion.p className='p-text'>At Meal Maven, our vision is a world where <br/> <span className="highlight">“Food for All”</span> is more than just a motto — it is a <br/>lived reality. We seek to provide affordable and<br/> authentic dining options that cater to the needs<br/> of students and young professionals; we strive<br/> to make this accessible to everyone.</motion.p>
      </div>

      </div>
      
    </div>
    </>
  )
}

export default Values