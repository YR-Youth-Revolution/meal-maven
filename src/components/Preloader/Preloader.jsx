import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import preloaderimage from "/public/Website/character-walk.gif";
import "./Preloader.css";

const Preloader = ({ onFinishLoading }) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true); 
      onFinishLoading(); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onFinishLoading]);

 
  const text = ["M", "e", "a", "l", " ", "M", "a", "v", "e", "n"];

  const letterVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  };

  return (
    <div className={`preloader ${isLoadingComplete ? "hide" : ""}`}>
     
      {/* <motion.img
        src={preloaderimage}
        alt="Preloader"
        className="preloader-image"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.4, delay: 0.2 }}
      /> */}
      <div className="text-load-box">
        <div className="pre-text-box">
          {text.map((letter, index) => (
            <motion.h1
              key={index}
              className="reveal-text"
              initial="hidden"
              whileInView="visible"
              variants={letterVariants}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.2, 
              }}
              style={{
                display: "inline-block",
                color: index < 4 ? "#F68B33" : "#570E0F", 
              }}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
