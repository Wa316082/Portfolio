import React from 'react'
import Title from '../../Home/Title'
import AboutMe from './AboutMe'
import FunFact from './FunFact'
import MyServices from './MyServices'

export default function About() {
  return (
    <section className='w-full' id='about'>
        <Title title='About' subtitle='Me' />
        <AboutMe />
        <Title title='My' subtitle='Services' />
        <MyServices />
        <Title title="Fun" subtitle="Fact" />
        <FunFact />
    </section>
  )
}
