import React, { useState } from 'react';
import "./Culinary.css";
import chef from "/public/Website/chef.png";
import rotateimg from "/public/Website/Tagline Rotate 2.png";
import { motion } from "framer-motion";
import Modal from './Modal';
import modelimageone from '/public/Website/food-one.png'
import modelimagetwo from '/public/Website/food-two.png'
import modelimagethree from '/public/Website/food-three.png'

const Culinary = () => {

  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);

  const handleOpenModal1 = () => setModal1Open(true);
  const handleCloseModal1 = () => setModal1Open(false);

  const handleOpenModal2 = () => setModal2Open(true);
  const handleCloseModal2 = () => setModal2Open(false);

  const handleOpenModal3 = () => setModal3Open(true);
  const handleCloseModal3 = () => setModal3Open(false);

  return (
    <>
      <div className="culinary-container">
        <div className="culinary-content">
          <motion.h2 initial={{color:"#eb8d355e"}} whileInView={{color:'#EF9540'}} transition={{duration:1.5, ease:"easeInOut"}} viewport={{once:true}}>
            Miss., Mrs., & Mr. <br /> <motion.span initial={{color:"#eb8d355e"}} whileInView={{color:'#EF9540'}} transition={{duration:1.5, ease:"easeInOut"}} viewport={{once:true}}>Culinary</motion.span>
          </motion.h2> 
          {/* <motion.span className="Cl-dummy-box2" initial={{width:414}} whileInView={{width:0}} transition={{duration:0.8,delay:0.3}} viewport={{ once: true }}></motion.span>
          <motion.span className="Cl-dummy-box3" initial={{width:321}}  whileInView={{width:0}} transition={{duration:0.8,delay:0.5}} viewport={{ once: true }}></motion.span>  */}
          <br />
          <br />
          <motion.p>
            Are you secretly a Kitchen Ninja? <br />
            Do you take pride in
             <span className="bold-orange"> What You Put On The Table?</span>{" "}
            <br />
            We are looking for passionate home cooks who love to share
            <br /> their culinary creations!
          </motion.p>
          <br /><br />
          <motion.p>
            Do your friends and family rave about your food?<br />
            <span className="bold-orange">
              (He Said, She Said levels of praise!)
            </span><br />
            Meal Maven wants to help you turn that passion into a<br/> profession.
          </motion.p>
        </div>
        <motion.div className="culinary-img">
          <motion.img src={chef} alt="" className="moving-obj" />
        </motion.div>
      </div>
      <div className="speciality-box">
        <div className="first-box">
            <motion.div  onClick={handleOpenModal1}  className="spec-content" initial={{opacity:1,x:359}} whileInView={{opacity:1,x:0}} transition={{duration:0.2,delay:0.5}} viewport={{ once: true }}>
           <motion.h2 className="spec-h2" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1,}} viewport={{ once: true }}>Bring the taste of home<br/>to Canada</motion.h2> 
            </motion.div>
            <Modal isOpen={isModal1Open} onClose={handleCloseModal1} className="model-box">
              <img src={modelimageone} alt="Bring the taste of home to Canada" />
          <h2>Bring the taste of home <br />
          to Canada</h2>
          <p>Missing delicious, authentic Indian food while living overseas can be challenging, especially for students or working professionals far from home. This is where you can step in to save their taste buds. Meal Maven helps bring your cherished, generations-old recipes to people who will truly appreciate them. With your magical cooking, you can brighten their days and nights, giving them a taste of home.</p>
        </Modal>

            <motion.div  onClick={handleOpenModal2} className="spec-content" initial={{opacity:1,x:-359}}  whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.5}} viewport={{ once: true }}>
            <motion.h2 className="spec-h2" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} viewport={{ once: true }}>Make your passion a <br/> profession</motion.h2>
            </motion.div>
            <Modal isOpen={isModal2Open} onClose={handleCloseModal2} className="model-box">
            <img src={modelimagetwo} alt="Make your passion a profession" />
          <h2>Make your passion a<br/>
          profession</h2>
          <p>Do you spend hours perfecting your grandma's secret comfort recipe? Does seeing your loved ones enjoy your food fuel your passion for cooking? If so, you've come to the right place. With Meal Maven, you can transform your love for cooking into a rewarding career. Join us at Meal Maven and share the joy of your delicious, home-cooked meals. Let’s spread the love and warmth of your generational recipes to those in need, bringing them a comforting taste of home.</p>
        </Modal>
        </div>

        <div className="second-box">
            <motion.div onClick={handleOpenModal3} className="spec-content"  initial={{opacity:1,y:-189}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5}} viewport={{ once: true }}>
             <motion.h2 className="spec-h2" initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} viewport={{ once: true }}>Make a Difference</motion.h2>
            </motion.div>
            <Modal isOpen={isModal3Open} onClose={handleCloseModal3} className="model-box">
            <img src={modelimagethree} alt="Make a Difference" />
          <h2>Make a Difference</h2>
          <p>Join us in our vision of “food for all.” Meal Maven is dedicated to bridging the gap between food and accessibility, ensuring no one goes to bed hungry. We believe food is a fundamental human right, and nothing should come between people and their meals. At Meal Maven, we offer a marketplace for your culinary creations, delivering highly customizable meal plans and top-quality food. 
          </p>
        </Modal>
        </div>
        <motion.img className="rotate-img-three" src={rotateimg} alt="" initial={{rotate:0}} animate={{rotate:360}} transition={{ duration: 30,ease: "linear",repeat: Infinity,
          repeatDelay: 0}} />
      </div>
    </>
  );
};

export default Culinary;
