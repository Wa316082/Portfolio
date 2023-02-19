import React from 'react'

export default function RoundFive() {
  return (
    <div className='w-96 h-96 rounded-full absolute top-0 -right-10 '>
        <div className='w-full h-full relative animate-reverse-spin'>
            <div className='w-24 h-24 rounded-full bg-lime-300 absolute -bottom-10 left-16 blur-xl'></div>
            <div className='w-24 h-24 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl'></div>

        </div>
        
    </div>
  )
}
