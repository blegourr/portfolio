import { useState } from 'react'
import Background from '../compoments/Home/Background'
import FirstLayer from '../compoments/Home/First_Layers'
import SecondLayer from '../compoments/Home/Second_layers'

function Home() {

  return (
    <div className='PageHome'>
      <Background />
      <FirstLayer />
      <SecondLayer />
    </div>
  )
}

export default Home
