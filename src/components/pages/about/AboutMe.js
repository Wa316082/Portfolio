import React from 'react'

export default function AboutMe() {
  return (
    <div className='flex pb-6'>
        <div className='w-1/2 text-zinc-300 my-auto px-6  borderRight flex flex-col'>
            <h2 className='font-semibold mb-1 text-base '>Hello ! I'm Md. Wasim Akram</h2>
            <p>Web developer from Dhaka, Bangladesh. I have rich experience in building full stack web development. I would love to explore unique requirements. </p>
            
        </div>

        <div className='w-1/2 p-6 '>
            <ul>
                <li className='aboutLi'><span className='aboutLiSpan'>Age:</span> <span>22</span></li>
                <li className='aboutLi'><span className='aboutLiSpan'>Residance:</span> <span>Bangladesh</span></li>
                <li className='aboutLi'><span className='aboutLiSpan'>Freelance:</span> <span>Available</span></li>
                <li className='aboutLi'><span className='aboutLiSpan'>Present Address:</span><span>Uttara, Dhaka</span></li>
                <li className='aboutLi'><span className='aboutLiSpan'>Parmanent Address:</span><span>Naogaon</span></li>


            </ul>
            
        </div>
    </div>
  )
}

