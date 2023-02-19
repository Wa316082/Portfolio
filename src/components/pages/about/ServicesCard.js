import React from 'react'

export default function ServicesCard({icons, title, subTitle}) {
  return (
    <div className='py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom'>
        <span className='text-4xl text-orange-500 mb-2'>{icons}</span>
        <h2 className='font-titlefont text-lg'>{title}</h2>
        <p className='text-base text-center text-zinc-300 px-6'> {subTitle} </p>
    </div>
  )
}
