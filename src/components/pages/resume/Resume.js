import React from 'react'
import Title from '../../Home/Title'
import Education from './Education'
import Skills from './Skills'

export default function Resume() {
  return (
    <section id='resume'>
        <Title title='My'subtitle='Resume' />
        <Education />
        <Title title='My'subtitle='Skills' />
        <Skills />
    </section>
  )
}
