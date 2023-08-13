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
          <p>Bienvenue dans la galerie "Regardez ce que j'ai créé !" où chaque projet se présente comme une petite œuvre d'art numérique. Jonglant avec des idées, transformant les défis en opportunités et admettons-le, ayant eu quelques débats sérieux avec mon écran, j'ai conçu chacun de ces projets avec amour et une bonne dose de café. De la magie du design web à la danse complexe du code, chaque projet raconte une histoire unique qui fusionne créativité et technologie, capturant l'essence de mes aventures digitales.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
