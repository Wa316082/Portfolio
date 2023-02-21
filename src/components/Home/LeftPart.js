import React from 'react'
import { BsFillCloudArrowDownFill, BsGithub } from "react-icons/bs"
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { profileImg3 } from "../../assets/index"
import CV from "../../assets/Wasim_CV.pdf"


export default function LeftPart() {

    const [text] = useTypewriter({
        words : ["Web developer", "Software Developer", "Web Designer", "Full Stack Web Developer"],
        loop:true,
        typeSpeed:30,
        delaySpeed: 3000,
        deleteSpeed: 20,
    })
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10'>
          <div className=' w-full h-3/5'>
            <img className='w-full p-2 h-full   rounded-2xl' src={profileImg3} alt="ProfleImg" loading='priority' />
            
          </div>

          <div className='w-full h-2/5 '>
                {/* Intro  */}
                <div className='flex flex-col items-center gap-2 py-11'>
                    <h1 className='text-textColor text-2xl font-semibold font-titlefont'>Md. Wasim Akram</h1>
                    <p className=' text-lg text-orange-400 font-titlefont'> {text}<Cursor cursorBlinking ="false" cursorStyle="|" /> </p>
                    <div className='flex justify-center gap-2 mt-2'>
                        <span className='hover:text-orange-600 duration-300 cursor-pointer text-xl'> <BsGithub /> </span>
                        <span className='hover:text-orange-600 duration-300 cursor-pointer text-xl'> <FaFacebook /> </span>
                        <span className='hover:text-orange-600 duration-300 cursor-pointer text-xl'> <FaLinkedin /> </span>
                        <span className='hover:text-orange-600 duration-300 cursor-pointer text-xl'> <FaWhatsapp /> </span>
                    </div>
                </div>

                {/* Buttons  */}
                <div className=' flex h-14'>
                     <a className='w-1/2  borderRight border-t-[1px] border-orange-400 text-sm tracking-wide uppercase hover:text-orange-600' href={CV} target='_blank' rel='noreferrer'>
                     <button className= ' w-full h-full flex justify-center items-center gap-2 '>
                        Dounload CV <BsFillCloudArrowDownFill />
                    </button>
                     </a>
                    <button className='w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-orange-400 text-sm tracking-wide uppercase hover:text-orange-600'>
                        Contuct Me <FiSend />
                    </button>

                
                </div>
            </div>
    </div>
  )
}
