import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import man from "/public/Website/meal-man.png";
import bag from "/public/Website/shopping-bag.png";
import meal from "/public/Website/food.png";
import l1 from "/public/Website/L1.png";
import l2 from "/public/Website/L2.png";
import l3 from "/public/Website/L3.png";
import l4 from "/public/Website/L4.png";
import l5 from "/public/Website/L5.png";
import l6 from "/public/Website/L6.png";
import l7 from "/public/Website/L7.png";
import l8 from "/public/Website/L8.png";

const Hero = () => {
  const handleMouseMove = (e) => {
    const card = document.querySelector(".banner-box");
    const { clientX, clientY } = e;
    const { left, top, width, height } = card.getBoundingClientRect();
  
    const centerX = left + width / 2;
    const centerY = top + height / 2;
  
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
  
    const rotateX = (deltaY / height) * 18; // Adjust tilt sensitivity
    const rotateY = (deltaX / width) * -18;
  
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    const card = document.querySelector(".banner-box");
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };
  

  return (
    <>
      <div className="hero-container">
        <div className="meal-box">
        <div
          className="banner-box"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div class="dots_border"></div>


          <motion.div
            className="image-box"
            initial={{ opacity: 0.5, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={man}
              alt=""
              variants={{
                fly: {
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
                vibrate: {
                  x: [10, 25, 10],
                  y: [-10, -25, -10],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="fly"
              animate="vibrate"
            />
          </motion.div>
          <div className="banner-content">
            <motion.h1>
              Home-Cooked <br />
              <motion.span>
                Happiness
              </motion.span>
              <br />
              Taste of Home, <br />
              Made Easy
              <br />
            </motion.h1>

            <div className="order-box wrap-order">
              <motion.button
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                className="button-order"
              >
                <img src={bag} alt="" className="btn-icon" />
                <span className="button-text">Order Now</span>
              </motion.button>
            </div>
          </div>

          
        </div>

        <motion.img
            className="meals"
            src={meal}
            alt=""
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />

</div>

        <div className="images-box-ab">
          <motion.img
            className="f1 floating"
            src={l1}
            alt="leaf 1"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f2 floating"
            src={l2}
            alt="leaf 2"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f3 floating"
            src={l3}
            alt="leaf 3"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f4 floating"
            src={l4}
            alt="leaf 4"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f5 floating"
            src={l5}
            alt="leaf 5"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f6 floating"
            src={l6}
            alt="leaf 6"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f7 floating"
            src={l7}
            alt="leaf 7"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f8 floating"
            src={l8}
            alt="leaf 8"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f9 floating"
            src={l5}
            alt="leaf 9"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            className="f10 floating"
            src={l6}
            alt="leaf 10"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
