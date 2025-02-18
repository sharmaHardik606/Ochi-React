import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import Card from '../mini_components/Card';
import Button from '../mini_components/Button';

const Feature = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (index) => {
    setHoveredCard(index);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null);
  };

  // Text for each card
  const cardTexts = ['Cardboard Spaceship',
    'AH2 & Matt Horn',
    'Fyde',
    'Vise',
    'Trawa',
    'Premium Blend'];


  return (
    <div className="w-full py-10 rounded-3xl bg-[#f1f1f1] relative ">
  <div className="w-full pt-10 pb-6 border-b-[0.3px] border-zinc-400  ">
    <h1 className="text-[3.35rem] flex tracking-tight overflow-x-hidden px-[3rem]">
      Featured Projects
    </h1>
  </div>
       

  <div className='flex w-full justify-center items-center '>
    {/* Text Displayed Between Cards */}
    <motion.h1
            className="absolute text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap mt-24 z-10 uppercase"
            animate={{ opacity: hoveredCard !== null ? 1 : 0, y: hoveredCard !== null ? 0 : -50 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            style={{ pointerEvents: "none" }}
          >
            {hoveredCard !== null && cardTexts[hoveredCard]}
          </motion.h1>
  <div className='flex flex-col'>
    <Card 
      text={"Cardboard Spaceship"}
      image={"https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"}
      index={0}
      onHoverStart={handleHover}  
      onHoverEnd={handleHoverEnd}
    />
  <div className='px-[0.5rem] flex items-center justify-start'>
    <Button 
      buttonText={"Branded Template"}
      />
    <Button 
      buttonText={"sales deck"}
      />
    <Button 
      buttonText={"social media templates"}
      />
  </div>
 </div>

 <div className='flex flex-col'>
  <Card 
    text={"AH2 & Matt Horn"}
    image={"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"}
    index={1}
    onHoverStart={handleHover}  
    onHoverEnd={handleHoverEnd}
  />

<div className='px-[0.5rem] flex items-center justify-start'>
    <Button 
      buttonText={"pitch Deck"}
      />
  </div>
  </div>
  </div>

  {/* Second Layer */}
  <div className='flex w-full justify-center items-center'>
    {/* Text Displayed Between Cards */}
    <motion.h1
            className="absolute text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap z-10 mt-24 uppercase"
            animate={{ opacity: hoveredCard !== null ? 1 : 0, y: hoveredCard !== null ? 0 : -50 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            style={{ pointerEvents: "none" }}
          >
            {hoveredCard !== null && cardTexts[hoveredCard]}
          </motion.h1>

    <div className='flex flex-col'>      
    <Card 
    text={"fyde"}
    image={"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"}
    index={2}
    onHoverStart={handleHover}  
    onHoverEnd={handleHoverEnd}
    />
    <div className='px-[0.5rem] flex items-center justify-start'>
    <Button 
      buttonText={"audit"}
      />
    <Button 
      buttonText={"copywriting"}
      />
    <Button 
      buttonText={"sales deck"}
      />
    <Button 
      buttonText={"slides design"}
      />
  </div>
  </div>

   <div className='flex flex-col'>
    <Card 
      text={"Vise"}
      image={"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"}
      index={3}
      onHoverStart={handleHover}  
      onHoverEnd={handleHoverEnd}
    />
    <div className='px-[0.5rem] flex items-center justify-start'>
    <Button 
      buttonText={"agency"}
      />
    <Button 
      buttonText={"company presentation"}
      />
  </div>
  </div>
  </div>

  {/* Third Layer */}
  <div className='flex w-full justify-center items-center'>
    {/* Text Displayed Between Cards */}
    <motion.h1
            className="absolute text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap z-10 mt-24 uppercase"
            animate={{ opacity: hoveredCard !== null ? 1 : 0, y: hoveredCard !== null ? 0 : -50 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            style={{ pointerEvents: "none" }}
          >
            {hoveredCard !== null && cardTexts[hoveredCard]}
          </motion.h1>

    <div className='flex flex-col'>      
    <Card 
    text={"Trawa"}
    image={"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"}
    index={4}
    onHoverStart={handleHover}  
    onHoverEnd={handleHoverEnd}
    />
    <div className='px-[0.5rem] flex items-center justify-start'>
    <Button 
      buttonText={"Brand identity"}
      />
    <Button 
      buttonText={"design reasearch"}
      />
    <Button 
      buttonText={"investor deck"}
      />
  </div>
  </div>
    
  <div className='flex flex-col'> 
    <Card 
      text={"Premium Blend"}
      image={"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"}
      index={5}
      onHoverStart={handleHover}  
      onHoverEnd={handleHoverEnd}
    />
    <div className='px-[0.5rem] flex items-center justify-start'>
    <Button 
      buttonText={"Branded Template"}
      />
  </div>
  </div>
  </div>




  </div>

  );
};

export default Feature;
