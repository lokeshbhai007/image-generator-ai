import Description from '@/components/Description'
import GenerateBtn from '@/components/GenerateBtn'
import Header from '@/components/Header'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function Home() {
  return (
    <div className=''>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBtn/>

    </div>
  )
}

export default Home
