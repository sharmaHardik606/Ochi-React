import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

const Featured = () => {

  return (
    <div className="w-full py-10 rounded-3xl  bg-[#f1f1f1]">
        <div className="w-full pt-10 pb-6  border-b-[0.3px] border-zinc-400 px-[3rem]">
            <h1 className="text-[3.35rem] tracking-tight">Featured Projects</h1>
        </div>

        {/* first card */}
        <div className="">
      <div className="cards flex gap-4 mt-24 px-[3rem]">
        {/* First card container */}
        <div
          className="cardcontainer relative w-1/2 h-[80vh] rounded-xl"
        >
          <h1 className="masking flex overflow-hidden uppercase absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap">
            {"Cardboard Spaceship".split('').map((item, index) => (
              <span
                className="inline-block translate-y-full"
              >
                {item}
              </span>
            ))}
          </h1>
          <div className="card scale-95 w-full h-full rounded-xl bg-cover">
            <img
              className="w-full h-full rounded-xl"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />
          </div>
        </div>

        {/* Second card container */}
        <div
          className="cardcontainer relative w-1/2 h-[80vh] rounded-xl"
        >
          <h1 className="masking flex uppercase absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap">
            {" AH2 & Matt Horn".split('').map((item, index) => (
              <span
                className="inline-block translate-y-full"
              >
                {item}
              </span>
            ))}
          </h1>
          <div className="card scale-95 w-full h-full rounded-xl bg-cover">
            <img
              className="w-full h-full rounded-xl"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

        {/* second card */}
        <div className=""> <div className="cards flex gap-4 mt-24 px-[3rem]">
          
                <div className="cardcontainer relative w-1/2 h-[80vh]  rounded-xl">
                  <h1 className="masking uppercase  absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap">{"fyde".split('').map((item, index)=>(<span>{item}</span>
                ))}</h1>
                <div className="card scale-95 w-full h-full rounded-xl bg-cover"><img className="w-full h-full rounded-xl" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" /></div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[80vh]  rounded-xl">
                <h1 className="masking uppercase  absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap">{"Vise".split('').map((item, index)=>(<span>{item}</span>
                ))}</h1>
                <div className="card scale-95 w-full h-full rounded-xl bg-cover"><img className="w-full h-full rounded-xl" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" /></div>
                </div>
                
              </div>
        </div>

        {/* Third Card */}
        <div className=""> <div className="cards flex gap-4 mt-24 px-[3rem]">
          
                <div className="cardcontainer relative w-1/2 h-[80vh]  rounded-xl">
                  <h1 className="masking uppercase  absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap">{"Trawa".split('').map((item, index)=>(<span>{item}</span>
                ))}</h1>
                <div className="card scale-95 w-full h-full rounded-xl bg-cover"><img className="w-full h-full rounded-xl" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" /></div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[80vh]  rounded-xl">
                <h1 className="masking uppercase  absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-['Founders Grotesk X-Condensed'] font-bold tracking-tighter leading-none text-[#cdea68] whitespace-nowrap">{"Premium Blend".split('').map((item, index)=>(<span>{item}</span>
                ))}</h1>
                <div className="card scale-95 w-full h-full rounded-xl bg-cover"><img className="w-full h-full rounded-xl" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" /></div>
                </div>
                
              </div>
        </div>
        
    </div>
  )
}

export default Featured
