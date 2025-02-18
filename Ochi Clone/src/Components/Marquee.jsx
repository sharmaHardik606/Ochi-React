import React from 'react'
import { motion } from "framer-motion"
const Marquee = () => {
  return (
    <div data-scroll  data-scroll-speed="-.001" className="w-full py-20 bg-[#004d43] text-white rounded-xl">
      <div className="w-full ">
      <div className="w-full text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap uppercase  overflow-hidden transform scale-y-150">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:9}} className="text-[18vw] leading-none font-['Founders Grotesk'] font-bold tracking-[-0.06em] -mb-4 -mt-10 pl-10" >We are ochi </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:9}} className="text-[18vw] leading-none font-['Founders Grotesk'] font-bold tracking-[-0.06em] -mb-4 -mt-10 pl-10" >We are ochi </motion.h1>
      </div>
      </div>
    </div>
  )
}

export default Marquee
