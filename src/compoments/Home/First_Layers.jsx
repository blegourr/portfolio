import { useEffect, useState } from 'react'
import './First_Layers.css'
import imgBlegourrRonger from '../assets/img/imgBlegourrRonger.jpg'

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
          <p>dfjsfojodjfiospdfjsfojodjfiospdfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiospdfjsfojodjfiosp dfjsfojodjfiosp v dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp dfjsfojodjfiosp s</p>
        </div>
      </div>
    </div>
  )
}

export default Home
