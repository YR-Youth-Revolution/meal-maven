import React from "react";
import "./Mobile.css";
import profile1 from "/Website/App-members-one.png";
import profile2 from "/Website/App-members-two.png";
import profile3 from "/Website/App-members-three.png";
import profile4 from "/Website/App-members-four.png";
import profile5 from "/Website/App-members-Five.png";
import mob from "/Website/mob.png";
import arrow from "/Website/t-r-arrow.png";
import playstore from "/Website/meal-maven-playstore.png";
import applestore from "/Website/meal-maven-app-store.png";
import { motion } from "framer-motion";

const Mobile = () => {
  const handleMouseMove = (e) => {
    const card = document.querySelector(".mobile-app-container");
    const { clientX, clientY } = e;
    const { left, top, width, height } = card.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const rotateX = (deltaY / height) * 15; 
    const rotateY = (deltaX / width) * -15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = document.querySelector(".mobile-app-container");
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <div
        className="mobile-app-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="inner-mobile-app">
          <div className="inner-app-left-section">
            <motion.h2>
              Download
              <br /> Our Mobile App
            </motion.h2>
            <div className="img-boxes">
              <motion.img
                src={profile1}
                alt=""
                // initial={{ opacity: 0, x: -200 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1 }}

                className="pro-img"
              />
              <motion.img
                src={profile2}
                alt=""
                // initial={{ opacity: 0, x: -250 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1.5 }}

                className="pro-img"
              />
              <motion.img
                src={profile3}
                alt=""
                // initial={{ opacity: 0, x: -280 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1.8 }}

                className="pro-img"
              />
              <motion.img
                src={profile4}
                alt=""
                // initial={{ opacity: 0, x: -300 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 2 }}

                className="pro-img"
              />
              <motion.img
                src={profile5}
                alt=""
                // initial={{ opacity: 0, x: -350 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 2.3 }}

                className="pro-img"
              />
              <motion.img
                className="t-r-arrow pro-img"
                src={arrow}
                alt=""
                initial={{ opacity: 1, x: -50, rotate: "45deg" }}
                whileInView={{ opacity: 1, x: 0, rotate: "0deg" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{once:true}}
              />
            </div>
            <div className="moblie-playstore-box">
              <motion.img src={playstore} alt="" className="playstore" />
              <motion.img src={applestore} alt="" className="playstore" />
            </div>
          </div>
          <div className="inner-app-right-section">
            <motion.img
              src={mob}
              alt=""
              initial={{ opacity: 1, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
