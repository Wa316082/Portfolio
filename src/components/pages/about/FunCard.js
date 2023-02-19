import React from 'react'

export default function FunCard({icons, des}) {
  return (
    <div className='w-full'>
        <div className='w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-r-orange-500 border-b-[1px] border-b-orange-500'>
            <span className='text-2xl text-orange-600'>{icons}</span>
            <p className='text-base w-32 h-10 text-center text-zinc-300 hover:text-white duration-200'>{des}</p>
        </div>

    </div>
  )
}
