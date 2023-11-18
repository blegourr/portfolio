import Background from '../compoments/Home/Background'
import FirstLayer from '../compoments/Home/First_Layers'
import SecondLayer from '../compoments/Home/Second_layers'
import ThirdLayers from  '../compoments/Home/Third_layers'

function Home() {

  return (
    <div className='PageHome'>
      <Background />
      <FirstLayer />
      <SecondLayer />
      <ThirdLayers />
    </div>
  )
}

export default Home
