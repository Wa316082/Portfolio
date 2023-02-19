import React from 'react'

export default function RoundFour() {
    return (
        <div className='w-[800px] h-[800px] absolute rounded-full top-0 left-0  '>
            <div className='w-full h-full relative animate-reverse-spin '>
                <div className='w-40 h-40 rounded-full bg-designColor absolute top-10 right-0 blur-3xl'>
                </div>
                <div className='w-52 h-52 rounded-full bg-gradient-to-t from-purple-400 to-blue-600 absolute bottom-32 right-20 blur-3xl'>
                </div>

                <div className='w-28 h-28 rounded-full bg-white absolute bottom-32 right-20 blur-2xl'>
                </div>
                <div className='w-28 h-28 rounded-full bg-fuchsia-700 absolute top-0 right-10 blur-2xl'>
                </div>

            </div>

        </div>
    )
}
