import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);
    
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle= Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle -180);
        })
    })



  return (
    <div  className='eyes w-full h-screen overflow-hidden'>
{/*Background img */}
    <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
{/* Eyes Part */}
    <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%] ">
        <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-[10vw] h-[10vw] bg-zinc-800 rounded-full">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[1.5vw] "><div className="w-[1.5vw] h-[1.5vw] bg-zinc-100 rounded-full"></div></div>
            </div>
        </div>
        <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-[10vw] h-[10vw] bg-zinc-800 rounded-full">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[1.5vw] "><div className="w-[1.5vw] h-[1.5vw] bg-zinc-100 rounded-full"></div></div>
            </div>
        </div>
        
        
    </div>
    </div>
      
    </div>
  )
}

export default Eyes