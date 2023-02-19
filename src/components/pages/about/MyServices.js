import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineAntDesign, AiTwotoneApi } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import ServicesCard from './ServicesCard'

export default function MyServices() {
  return (
    <div className='grid grid-cols-2'>
       <ServicesCard  icons= {<BiCodeAlt />} title='Web Development' subTitle='I will develop web application.' />
       <ServicesCard icons={<AiOutlineAntDesign />} title="Web Design" subTitle="I will design website." />
       <ServicesCard icons={<AiTwotoneApi />} title="Api Create" subTitle="I will do create api from server site for mobile application." />
       <ServicesCard icons={<RiPaintFill />} title='UiUx Design' subTitle='I will do ui ux design for web and mobile application.'/>
    </div>
  )
}
