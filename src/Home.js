import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsTelephonePlusFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoIosPaper } from 'react-icons/io';
import { MdWork } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import LeftPart from "./components/Home/LeftPart";
import About from "./components/pages/about/About";
import Contacts from "./components/pages/contacts/Contacts";
import Messages from "./components/pages/messages/Messages";
import Projects from "./components/pages/projects/Projects";
import Resume from "./components/pages/resume/Resume";

export default function Home() {
  const[about, setAbout] = useState(true);
  const[resume, setResume] = useState(false);
  const[projects, setProjects] = useState(false);
  const[contact, setContact] = useState(false);
  const[message, setMessage] = useState(true);
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between ">
      <div className=" w-16 h-96 bg-transparent flex flex-col gap-4 ">
        <div className="bg-bodyColor w-full h-20 rounded-3xl flex justify-center items-center cursor-pointer group">
          <div className="flex flex-col gap-1.5 overflow-hidden ">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300  group-hover:bg-orange-600"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:translate-x-0 transition-transform duration-300  group-hover:bg-orange-600"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-1 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-orange-600"></span>
          </div>
        </div>


        {/* Other options  */}

    <div className='w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col justify-between items-center'>

      <span onClick={()=>setAbout(true) & setResume(false) & setProjects(false) & setContact(false) & setMessage(false)} className="w-full text-textColor text-xl flex items-center justify-center hover:text-orange-600 duration-300 relative group "> <FaUser /> <span className=" absolute text-textColor font-medium text-xs uppercase bg-orange-500 px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">About</span> </span>
      <span onClick={()=>setAbout(false) & setResume(true) & setProjects(false) & setContact(false) & setMessage(false)} className="w-full text-textColor text-xl flex items-center justify-center hover:text-orange-600 duration-300 relative group "> <IoIosPaper /> <span className=" absolute text-textColor font-medium text-xs uppercase bg-orange-500 px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Resume</span> </span>
      <span onClick={()=>setAbout(false) & setResume(false) & setProjects(true) & setContact(false) & setMessage(false)} className="w-full text-textColor text-xl flex items-center justify-center hover:text-orange-600 duration-300 relative group "> <MdWork /> <span className=" absolute text-textColor font-medium text-xs uppercase bg-orange-500 px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Projects</span> </span>
      <span onClick={()=>setAbout(false) & setResume(false) & setProjects(false) & setContact(false) & setMessage(true)} className="w-full text-textColor text-xl flex items-center justify-center hover:text-orange-600 duration-300 relative group "> <SiGooglechat /> <span className=" absolute text-textColor font-medium text-xs uppercase bg-orange-500 px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Message</span> </span>
      <span onClick={()=>setContact(true) & setAbout(false) & setResume(false) & setProjects(false)  & setMessage(false)} className="w-full text-textColor text-xl flex items-center justify-center hover:text-orange-600 duration-300 relative group "> <BsTelephonePlusFill/> <span className=" absolute text-textColor font-medium text-xs uppercase bg-orange-500 px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Contact</span> </span>
      
      
    </div>

      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        
        {/* left part  */}
        <LeftPart />

        {/* right part  */}

        <div className=" w-8/12 h-[95%] bg-bodyColor">

          <div className="w-full h-full overflow-y-scroll  scrollbar-thin scrollbar-thumb-lime-400">
          
          {
            about && (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
               <About />
            </motion.div>
             
              
            ) 
          }
          {
            resume && (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
              <Resume />
            </motion.div>
             
              
            ) 
          }
          {
            projects && (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
              <Projects />
            </motion.div>
             
              
            ) 
          }
          {
            message && (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
              <Messages />
            </motion.div>
             
              
            ) 
          }
          {
            contact && (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
              <Contacts />
            </motion.div>
             
              
            ) 
          }
          
          
          </div>
        </div>
      </div>
    </div>
  );
}
