import React from 'react'

function Cards() {
  return (
    
    <div className="w-full h-screen py-10 bg-[#f1f1f1] px-[3rem] flex items-center gap-4">
        <div className="cardcontainer w-1/2 pt-10 pb-6 ">
            <div className="card relative w-full h-[63vh] bg-[#004D43] rounded-xl flex items-center justify-center">
              <img className="w-36" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" /> 
              <button className="absolute left-8 bottom-8 px-3 py-1 border-[1.5px] border-[#CDEA68] text-[#CDEA68] rounded-3xl text-sm font-semibold">&#169;2019–2022</button>
              </div>
        </div>
        <div className="cardcontainer w-1/2 flex gap-4 pt-10 pb-6">
        <div className="card relative w-full h-[63vh] bg-[#212121] rounded-xl flex items-center justify-center"> 
          <img className="w-36"  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute left-8 bottom-8 px-3 py-1 border-[1.5px] text-[#E5E7EB] rounded-3xl text-sm uppercase">Rating 5.0 on Clutch</button>
        </div>
        <div className="card relative w-full h-[63vh] bg-[#212121] rounded-xl flex items-center justify-center"> 
          <img className="w-28"  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute left-8 bottom-8 px-3 py-1 border-[1.5px]  text-[#E5E7EB]  rounded-3xl uppercase text-sm ">Business Bootcamp Alumni</button>
        </div>
        </div>

    </div> 
  )
}

export default Cards
