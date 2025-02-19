import React from 'react'
import './Whychooseus.css'
import arrow from '/public/Website/arrow-animation.gif'
import meanbag from '/public/Website/meanbag.png'
import { motion } from "framer-motion";
import rotateimg from "/public/Website/Tagline Rotate 2.png";
import shadowone from "/public/Website/shadow-one.png";
import shadowtwo from "/public/Website/shadow-two.png";


const Whychooseus = () => {
  return (
    <>
       <div className="why-container">
       <div className="why-box">
            <motion.h2 initial={{color:"#eb8d355e"}} whileInView={{color:'#EF9540'}} transition={{duration:1.5, ease:"easeInOut"}} viewport={{once:true}}>Why<br/> Choose <br/> us?</motion.h2>
            {/* <motion.span className="why-dummy-box1" initial={{width:216}} whileInView={{width:0}} transition={{duration:0.8,delay:0.3}} viewport={{ once: true }}></motion.span>
          <motion.span className="why-dummy-box2" initial={{width:345}} whileInView={{width:0}}  transition={{duration:0.8,delay:0.5}} viewport={{ once: true }}></motion.span>
          <motion.span className="why-dummy-box3" initial={{width:167}} whileInView={{width:0}}  transition={{duration:0.8,delay:0.5}} viewport={{ once: true }}></motion.span> */}
            <img  className="why-arrow" src={arrow} alt=""  />
            <motion.img className="rotate-img-two" src={rotateimg} alt="" initial={{rotate:0}} animate={{rotate:360}} transition={{ duration: 30,ease: "linear",repeat: Infinity,
          repeatDelay: 0}} />
    </div>
    <div className="why-description-box">
        <motion.div className="img-box" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1.5,delay:1}} viewport={{ once: true }}>
           <motion.img src={meanbag} className='moving-obj' alt="" />
           <img className="bag-shadow"   src={shadowone}  />
           <img className="bag-shadow-two" src={shadowtwo}  />
        </motion.div>
        <motion.div className="description">
            <motion.p><span className='bold-orange'>Meal Maven is your meal buddy!</span> We’re all about making your life easier with convenient, customized, and affordable meal solutions. Because eating well should be a right, not a luxury. Our meals are tailored to fit your health goals. Whether you’re a busy student or someone with specific dietary needs, we’ve got you covered. No stress, just good food.
            </motion.p>
        </motion.div>
    </div>
       </div>
    
    
    
    </>
  )
}

export default Whychooseus