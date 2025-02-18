import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {

  return (
    // data-scroll is responsible for late scrolling so that when the landing page scroll late the item in front of it comes over it 
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className="w-full h-screen pt-2 bg-[#f1f1f1]">
      <div className="textstructure mt-32 px-[3rem] ">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
          return <div className="masker">
          <div className='w-fit flex items-end overflow-hidden'>
            <div>
              {index === 1 &&(<motion.div initial={{width:0}} animate={{width:100}} transition={{duration: 0.6,
        ease: [0.45, 0, 0.55, 1], duration:1}} className="mr-1 rounded-lg w-[10vw] relative -top-[0.30rem] mt- h-[6vw]"><img
        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
        alt="Description"
        className="w-full h-full object-cover rounded-md"
      /></motion.div>)}
            </div>
           <h1 className=" uppercase text-[7.5vw] font-['Founders Grotesk X-Condensed'] font-bold leading-none tracking-[-0.09em]">{item}</h1>
          </div>
      </div>
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-[6.6rem] flex justify-between items-center py-[0.7rem] px-[3rem]">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index)=><p className="font-normal tracking-tight leading-none text-zinc-900">{item}</p>)}

        <div className="start flex items-center gap-1">
        <div className="px-[0.7rem] py-[1.5px] border-[1.5px] border-zinc-700 text-zinc-900 rounded-full uppercase text-[0.98rem] tracking-tight">START THE PROJECT</div>
        <div className="w-8 h-8 rounded-full border-zinc-700 border-[1.3px] flex items-center justify-center text-lg "><MdOutlineArrowOutward /></div>
      </div>
      </div>

    </div>
  )
}

export default LandingPage
