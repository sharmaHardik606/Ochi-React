import React from 'react';
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import Button from './Button';

const Card = ({ text, image, index, onHoverStart, onHoverEnd }) => {
  return (
    <div className="relative flex flex-col mt-24">
        <p className="px-[1rem] flex items-center justify-start"><GoDotFill />{text}</p>
      {/* Cards */}
      <div className="cards flex relative w-full justify-center">
        <motion.div
          onHoverStart={() => onHoverStart(index)}  // Use parent function to handle hover
          onHoverEnd={onHoverEnd}  // Use parent function to handle hover end
          className="cardcontainer relative w-full h-[80vh] rounded-xl cursor-pointer"
        >
          <div className="card scale-95 w-full h-full rounded-xl bg-cover">
            <img
              className="w-full h-full rounded-xl"
              src={image}
              alt={text}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Card;




  
    