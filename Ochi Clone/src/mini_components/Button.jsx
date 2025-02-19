import React from 'react'

const Button = ({buttonText}) => {
  return (
    <div className=' ml-2 '>
      <button className="px-[0.7rem] py-[1.5px] border-[1.5px] border-zinc-700 text-zinc-900 rounded-full uppercase text-[0.98rem] tracking-tight relative bg-white isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center    hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">{buttonText}</button>
    </div>
  )
}

export default Button
