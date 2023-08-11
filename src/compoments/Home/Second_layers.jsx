import { useState } from 'react'
import './Second_layers.css'
import imgMairieIco from '../assets/logo/imgMairieIco.ico'
import logoValiblanca_immo from '../assets/logo/logoValiblanca_immo.svg'

function Home() {

  return (
    <div className="containerSecondLayer">
      <div className='skew'>
        <div className='containerAbsolute'>
          <div className="title">
            <h1>Mes Projets :</h1>
          </div>
          <div className='containerCard'>
          <div className="card">
            <div className="containerElementInCard">
              <img src={imgMairieIco} alt="logo de la mairie de larmor plage" />
              <h1>Webcams • Toulhars</h1>  
              <p>En tant que bénévole pour la mairie de Larmor-Plage, j'ai réalisé ma première page web pour partager deux caméras touristiques captivantes avec le grand public.</p>
            </div>
          </div>
          <div className="card">
            <div className="containerElementInCard">
            <img src={logoValiblanca_immo} alt="logo de la page web valiblanca.com" />
              <h1>Valiblanca_immo</h1>  
              <p>Jusqu'à présent, le projet de la page web Valiblanca_immo se démarque comme mon accomplissement majeur, illustrant ma progression au niveau du back-end.</p>
            </div>
          </div>
          <div className="card">
            <div className="containerElementInCard">

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
