import React from 'react'
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div data-scroll  data-scroll-speed="-.06" className="w-full py-20 bg-[#CDEA68] rounded-lg font-['Neue Montreal'] text-[3.22rem] leading-none ">
      <h1 className="tracking-tight px-[3rem]">Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds,</span> <span className='underline'>sell products,</span> <span className='underline'>explain complex ideas,</span> and <span className='underline'>hire great people.</span></h1>

 {/* 2nd Section here */}
    <div className="w-full border-t-[0.3px] mt-12 border-zinc-500 flex pb-16">
      <div className="w-1/2 px-[3rem] mt-3  mr-[7.2rem]">
        <h1 className="tracking-tight text-base">What you can expect:</h1> 
      </div>
    <div className="w-2/3 px-[3rem] mt-3 flex">
      <div className="w-1/2 ">
        <h1 className="tracking-tight text-base mb-6">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1> 
        <h1 className="tracking-tight text-base">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1> 
     </div>
      <div className="w-1/3  mt-20 text-lg flex flex-col justify-end ml-32">
        <h1 className="tracking-tight text-base">S:</h1> 
        <h1 className="tracking-tight text-base underline">Instagram</h1> 
        <h1 className="tracking-tight text-base underline">Behance</h1>  <h1 className="tracking-tight text-base underline">Facebook</h1> 
        <h1 className="tracking-tight text-base underline">Linkedin</h1> 
      </div>
     </div>
    </div>

   {/* 3rd section here */}
    <div className="w-full flex gap-5 border-t-[0.3px] mt-12 border-zinc-500">
        <div className="w-1/2 px-[3rem]">
        <h1 className="tracking-tight mt-3">Our approach: </h1>
        <button className="text-sm mt-3 uppercase text-white rounded-full bg-[#212121] pl-7 pr-5 py-4 flex items-center justify-between gap-10 ">Read More <GoDotFill /></button> 
        </div>
        <div className="w-1/2 h-[70vh] mx-[2.2rem] bg-red-600  mt-3 rounded-xl"><img
        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
        alt="image of 2 people"
        className="w-full h-full object-cover rounded-md"
      /></div>

        </div>
    </div>
  )
}

export default About
