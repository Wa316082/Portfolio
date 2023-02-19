import React from 'react'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import FunCard from './FunCard'

export default function FunFact() {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
        <FunCard icons={<AiOutlineAntDesign />} des="2 Finished Projects" />
        <FunCard icons ={<BiCodeAlt />} des="100 Hours of Coding" />
        <FunCard icons ={<BiCodeAlt />} des="100 Hours of Coding" />
        <FunCard icons ={<BiCodeAlt />} des="100 Hours of Coding" />
    </div>
  )
}
