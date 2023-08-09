import { useEffect, useState } from 'react'
import './First_Layers.css'
import imgBlegourrRonger from '../assets/img/imgBlegourrRonger.jpg'
import audioOhhhhNonnn from '../assets/audio/ohhhhhhhhNonnnnnn.mp3'

function Home() {


  const handleContextImgBlegourrRonger = (event) => {
    event.preventDefault();
    let audio = new Audio(audioOhhhhNonnn);
    audio.play();

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
          <p>Je suis fier de faire partie de l'Orchestre des Sapeurs-Pompiers du Morbihan (OSPM56), où ma clarinette résonne en harmonie avec la musique. La mélodie n'est pas mon seul intérêt, car je suis aussi un passionné de voile, attiré tout particulièrement par la planche à voile et les sensations que procure la glisse sur l'eau.</p>
          <p>Cependant, au cœur de toutes ces activités, brille une passion intense : le développement web. Chaque ligne de code que j'écris est une expression de créativité, une manière de tisser des expériences en ligne captivantes. Je suis également magicien, ajoutant une touche de magie à tout ce que j'entreprends.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
