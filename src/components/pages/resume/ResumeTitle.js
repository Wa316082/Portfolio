import React from 'react'
export default function ResumeTitle({title, icon}) {
  return (
    <h1 className='text-lg text-gray-300 uppercase font-medium flex items-center gap-2 border-b-[1px] border-orange-500'> <span className='text-orange-600 text-2xl' > { icon } </span> {title}</h1>
  )
}
