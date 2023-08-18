import { useEffect, useState } from 'react'
import './First_Layers.css'
import imgBlegourrRonger from '../assets/logo/Blegourr.webp'

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
          <img src={imgBlegourrRonger} alt="Photo de moi dans l'uniforme des pompiers" onContextMenu={handleContextImgBlegourrRonger} onClick={handleClickImgBlegourrRonger}/>
        </div>
        <div className="containerElement">
          <p>Mayocompagnie_bank, c'est un peu comme la cerise sur le gâteau de notre été entre potes. J'ai mis au point ce data pack spécialement pour notre serveur, et même si c'était un petit projet, il a laissé une empreinte bien plus grande que ce à quoi je m'attendais. L'idée, c'était de rendre les choses plus fun, plus pratiques et surtout de partager des moments incroyables avec mes amis du lycée.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
