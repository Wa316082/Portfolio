import React from 'react'

export default function ProjectCard({image, title, category, link}) {
  return (
    <div className='w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-orange-500'>
      <div className='w-full h-full mb-3 overflow-hidden relative cursor-pointer group'>
         <img className='object-cover group-hover:scale-105 transition-all duration-200' src={image} alt=""/>
         <div className='w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-10'>
          
         </div>
         <h3 className='font-titlefont text-normal font-semibold text-gray-200'> {title} </h3>
         <p className='text-base text-gray-300 -mt-1'> {category} </p>
         
      </div>
      <a className='text-base font-normal text-blue-400' href={link} target='_blank' rel="noreferrer" >Go and visit the site</a>
    </div>
  )
}
