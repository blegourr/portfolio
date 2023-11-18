import './First_Layers.css'
import BlegourrPortfolio from '../assets/logo/BlegourrPortfolio.png'

function Home() {


  const handleContextImgBlegourrRonger = (event) => {
    event.preventDefault();
    let element = event.target
    element.classList.add('activeInversion')
      element.addEventListener("animationend", () => {
        element.classList.remove('activeInversion')
      })
  }

  const handleClickImgBlegourrRonger = (event) => {
    event.preventDefault();
    let element = event.target
    element.classList.add('active')
      element.addEventListener("animationend", () => {
        element.classList.remove('active')
      })
  }
      


  return (
    <div className="containerFirstLayer">
      <div className="container">
        <div className="containerElement">
          <img src={BlegourrPortfolio} alt="Photo de moi dans l'uniforme des pompiers" onContextMenu={handleContextImgBlegourrRonger} onClick={handleClickImgBlegourrRonger}/>
        </div>
        <div className="containerElement">
          <p>Bienvenue dans la galerie &quot;Regardez ce que j&apos;ai créé !&quot; où chaque projet se dévoile comme une petite œuvre d&apos;art qui m&apos;est propre. Naviguant entre les idées, et avouons-le, après quelques débats sérieux avec mon canard, j&apos;ai façonné chacun de ces projets avec passion et une bonne dose de café.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
