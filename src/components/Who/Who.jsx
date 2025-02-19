import React, { useEffect, useRef, useState } from "react";
import "./Who.css";
import mealman from "/public/Website/hand-shake.gif";
import sdl from "/public/Website/sdl.png";
import icons from "/public/Website/meal-icon.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Who = () => {
  const [inView, setInView] = useState(false); // Track if the component is in view
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="meal-maven-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="meal-img-box"
      >
        <motion.img
          src={mealman}
          alt="Meal Maven"
          className="meal-maven-image mission-move"
        />
      </motion.div>
      <div className="meal-maven-text">
        <motion.h2>
          Who is
          <br /> Meal Maven?
        </motion.h2>
        <motion.p>
          <strong>Your Meal Buddy!</strong>
          {inView && (
            <TypeAnimation
              style={{ whiteSpace: "pre-line", display: "block" }}
              sequence={[
                `Don't worry about cooking every day.\nYour Meal Buddy is here to make your\nlife and meals better! He knows all the best\nIndian home cooks in Canada and connects you\nwith their exclusive, home-cooked dishes.\nDelivered straight to your home.`,
                2000,
              ]}
              repeat={0}
            />
          )}
        </motion.p>
        <div className="meal-maven-icons">
          <motion.img
            src={sdl}
            alt="Sustainable Development Goals"
            className="meal-maven-icon sdl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <hr className="hr-line" />
          <motion.img
            src={icons}
            alt="Recycle"
            className="meal-maven-icon iconcs"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Who;
