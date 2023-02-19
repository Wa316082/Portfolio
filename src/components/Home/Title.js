import React from 'react'

export default function Title({title, subtitle}) {
  return (
    <h1 className='font-titlefont font  text-xl font-medium  capitalize text-textColor relative z-10 px-6 py-3 borderBottom group '><span className=' text-orange-500'> {title} </span> <span className=' w-8 h-8 bg-gradient-to-t from-orange-500 to-lime-400 inline-block rounded-full absolute left-2 top-3 opacity-20 -z-10 translate-x-0 group-hover:translate-x-24 transform duration-500 '></span>{subtitle}</h1>
  )
}
