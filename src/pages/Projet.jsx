import { useState } from 'react'
import Background from '../compoments/Projet/Background'
import FirstLayer from '../compoments/Projet/First_Layers'
// import SecondLayer from '../compoments/Home/Second_layers'
// import ThirdLayers from  '../compoments/Home/Third_layers'

function Projet() {

  return (
    <div className='PageProjet'>
      <Background />
     <FirstLayer />
      {/* <SecondLayer />
      <ThirdLayers /> */}
    </div>
  )
}

export default Projet
