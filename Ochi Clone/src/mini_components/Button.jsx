import React from 'react'

const Button = ({buttonText}) => {
  return (
    <div className=' ml-2'>
      <button className="px-[0.7rem] py-[1.5px] border-[1.5px] border-zinc-700 text-zinc-900 rounded-full uppercase text-[0.98rem] tracking-tight">{buttonText}</button>
    </div>
  )
}

export default Button
