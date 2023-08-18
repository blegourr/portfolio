import { useState } from 'react'
import Background from '../compoments/Mayocompagnie_bank/Background'
import FirstLayer from '../compoments/Mayocompagnie_bank/First_Layers'
import SecondLayer from '../compoments/Mayocompagnie_bank/Second_layers'
import ThirdLayers from  '../compoments/Home/Third_layers'

function Home() {

  return (
    <div className='PageMayocompagnie_bank'>
      <Background />
      <FirstLayer />
      <SecondLayer />
      <ThirdLayers />
    </div>
  )
}

export default Home
